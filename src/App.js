import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import ReactSwitch from 'react-switch'
import { createContext, useState } from 'react'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")

  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <Nav />
        <About />
        <Portfolio />
        <Contact />
        
        <div className='dark__mode'>
          <label>{theme === "dark" ? "Dark Mode" : "Light Mode"}</label>
          <ReactSwitch onChange={toogleTheme} checked={theme === "dark" } />
        </div>
        
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
