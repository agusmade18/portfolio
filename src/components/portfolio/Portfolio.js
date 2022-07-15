import React from 'react'
import tentaclue from '../../assets/tentaclue.jpg'
import laundry from '../../assets/laundry.jpg'
import sekolah from '../../assets/sekolah.jpg'
import tourguide from '../../assets/tourguide.jpg'
import lawudev from '../../assets/lawudev.jpg'

const data = [
    {
        id: 1,
        image: tentaclue,
        title: "Sistem Penyewaan Peralatan Camping",
        des: "Menggunakan framework laravel dan MySQL sebagai databasenya. Memiliki fitur booking online dimana hasil booking online akan masuk ke email dan dapat dilihat di halaman adminnya",
        link: "https://tentaclue.com/",
    },
    {
        id: 2,
        image: laundry,
        title: "Sistem Laundry",
        des: "Menggunakan framework laravel dan MySQL sebagai databasenya. Sistem ini menghitung transaksi (Cucian customer, kas keluar masuk, penjualan, pendapatan harian bulanan, dan gaji pegawai) yang terjadi dalam sebuah laundry",
        link: "https://test.tentaclue.com/loundry",
    },
    {
        id: 3,
        image: sekolah,
        title: "Sistem Pendaftaran Calon Siswa Baru",
        des: "Menggunakan framework laravel dan MySQL sebagai databasenya. Ketika siswa ingin mendaftar ke sekolah ini, siswa diwajibkan terlebih dahulu mengisi data diri mereka ke dalam website ini. Setelah menginputkan data, maka calon siswa mendapatkan data yang mereka dalam format PDF dan di bawa saat melakukan pendaftaran di sekolah.",
        link: "http://daftaronlinesekolah.tentaclue.com/",
    },
    {
        id: 4,
        image: tourguide,
        title: "Website Travel Tour and Guide",
        des: "Menggunakan framework laravel dan MySQL sebagai databasenya. Client dapat melakukan booking dengan menggunakan whatsapp dan admin dapat menambahkan foto gallery dan review dari para  customernya",
        link: "https://balifriendlytourinfo.tentaclue.com/",
    },
    {
        id: 5,
        image: lawudev,
        title: "Website untuk undangan online",
        des: "Menggunakan framework laravel dan MySQL sebagai databasenya. Customer dapat memilih undangan yang diinginkan dengan melihat portfolio atau memiliki desain sendiri.",
        link: "https://undanganol.tentaclue.com/",
    }
]

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                
                <div className='row gy-3'>
                    {
                        data.map(({id, image, title, des, link}) => {
                            return (
                                <div key={id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                    <div className="card">
                                        <img src={image} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{des}</p>
                                            <a href={link} className="btn btn-outarticlene-dark btn-sm" target='_blank'>Lihat website</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio