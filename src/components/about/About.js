import React from 'react'
import './about.css'
import { useState } from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

const About = () => {

    const [ showPendidikan, setShowPendidikan ] = useState(false)
    const onClick = () => {
        setShowPendidikan((param) => param === true ? false : true)
    }
  return (
    <section className='about' id='about'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Tentang Saya</h5>
                {/* <small className="card-subtitle mb-2 text-muted">Deskripsi Singkat</small> */}
                <p className="card-text">Perkenalkan, nama saya I Made Agus Suyasa, S. Kom. Pendidikan terakhir saya adalah S1 Sistem Komputer. 
                Saya tertarik dengan bahasa pemrograman sejak masuk perguruan tinggi. Bahasa yang sering saya gunakan adalah PHP yang terkoneksi dengan
                database MySQL. </p>
                <button className="btn btn-sm" onClick={onClick}>Riwayat Pendidikan</button>
                <div className={showPendidikan ? 'show__pendidikan' : 'hide__pendidikan'}>
                    <div className="card pendidikan__header">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-6 col-md-3 tahun'>SD</div>
                                <div className='col-6 col-md-3 tahun'>1997 - 2003</div>
                                <div className='col-12 col-md-6 nama__sekolah'>SD 1 Blahkiuh</div>
                            </div>
                            <div className='row'>
                                <div className='col-6 col-md-3 tahun'>SMP</div>
                                <div className='col-6 col-md-3 tahun'>2003 - 2006</div>
                                <div className='col-12 col-md-6 nama__sekolah'>SMP N 1 Abiansemal</div>
                            </div>
                            <div className='row'>
                                <div className='col-6 col-md-3 tahun'>SMA</div>
                                <div className='col-6 col-md-3 tahun'>2006 - 2009</div>
                                <div className='col-12 col-md-6 nama__sekolah'>SMA N 1 Abiansemal</div>
                            </div>
                            <div className='row'>
                                <div className='col-6 col-md-3 tahun'>Perguruan Tinggi</div>
                                <div className='col-6 col-md-3 tahun'>2009 - 2013</div>
                                <div className='col-12 col-md-6 nama__sekolah'>STMIK STIKOM Baarticle</div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className="card-title">Pengalaman dalam programing : </h5>
                <div className='card-body'>
                    <div className='pengalaman__isi'>
                        <article><HiBadgeCheck /> PHP</article>
                        <article><HiBadgeCheck /> Laravel</article>
                        <article><HiBadgeCheck /> Javascript</article>
                        <article><HiBadgeCheck /> JQuery</article>
                        <article><HiBadgeCheck /> React</article>
                        <article><HiBadgeCheck /> Vue Js</article>
                        <article><HiBadgeCheck /> C#</article>
                        <article><HiBadgeCheck /> Java (Android Mobile)</article>
                        <article><HiBadgeCheck /> MySQL</article>
                        <article><HiBadgeCheck /> SQL Server</article>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About