import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react'


const Contact = () => {
    const [message, setMessage] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cih9z5r', 'template_vd6zcgx', form.current, 'MiElwnYhbXYDEzjll')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
        const getMessage = () => {
            setMessage(true)
        }
    };

  return (
    <section id='contact' className='contact'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Contact</h5>
                <div className="container py-4">
                    <form id="contactForm" ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label className="form-label">Nama</label>
                        <input className="form-control" id="nama" name='nama' type="text" placeholder="Nama" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Alamat Email</label>
                        <input className="form-control" id="email" name='email' type="email" placeholder="Alamat Email" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Tulis Pesan</label>
                        <textarea className="form-control" id="pesan" name='pesan' type="text" placeholder="Pesan"></textarea>
                    </div>

                    <div className="d-grid">
                        <button className="btn btn-outline-dark btn-sm" type="submit">Kirim</button>
                    </div>

                    </form>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Contact