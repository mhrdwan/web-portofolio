
import React, { Component } from "react";
import Slider from "react-slick";
import ava from '../assets/img/ap1.gif'
import pel from '../assets/img/pelita.png'
import eo from '../assets/img/eo.png'
import shopee from '../assets/img/shopee.png'
import '../App.css'


export default class Carausel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className="container">
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
          <div className="container-card">
                <div className="wrapper-card">
                    <div className="card">
                        <img src={ava} alt="" />
                    </div>
                    <div className="judul">
                        <h3>Angkasa Pura I</h3>
                        <p>PT Angkasa Pura I adalah anak usaha Aviasi Pariwisata Indonesia yang bergerak di bidang pengelolaan bandar udara di Indonesia di wilayah Pulau Batam, Jawa bagian tengah dan timur dan Bali, Pulau Lombok, Timor Barat, Kalimantan bagian selatan dan timur, Sulawesi bagian utara dan selatan, Pulau Ambon dan Papua</p>
                    </div>
                </div>
                </div>
          </div>
          <div>
          <div className="container-card">
                <div className="wrapper-card">
                    <div className="card">
                        <img src={pel} alt="" />
                    </div>
                    <div className="judul">
                        <h3>PT Pelita Air Service</h3>
                        <p>PT Pelita Air Service atau biasa disingkat menjadi PAS, adalah anak usaha dari Pertamina yang berbisnis di bidang penerbangan</p>
                    </div>
                </div>
                </div>
                </div>
          <div>
          <div className="container-card">
                <div className="wrapper-card">
                    <div className="card">
                        <img src={shopee} alt=""/>
                    </div>
                    <div className="judul">
                        <h3>Shopee</h3>
                        <p>Freelance in marketplace Shopee</p>
                    </div>
                </div>
                </div>
          </div>
          <div>
          <div className="container-card">
                <div className="wrapper-card">
                    <div className="card">
                        <img src={ava} alt="" />
                    </div>
                    <div className="judul">
                        <h3>Angkasa Pura I</h3>
                        <p>Angkasa pura lorem insum sauodhausidhuasohd sadaysgduysad</p>
                    </div>
                </div>
                </div>
          </div>
          <div>
          <div className="container-card">
                <div className="wrapper-card">
                    <div className="card">
                        <img src={ava} alt="" />
                    </div>
                    <div className="judul">
                        <h3>Angkasa Pura I</h3>
                        <p>Angkasa pura lorem insum sauodhausidhuasohd sadaysgduysad</p>
                    </div>
                </div>
                </div>
          </div>
          <div>
          <div className="container-card">
                <div className="wrapper-card">
                    <div className="card">
                        <img src={ava} alt="" />
                    </div>
                    <div className="judul">
                        <h3>Angkasa Pura I</h3>
                        <p>Angkasa pura lorem insum sauodhausidhuasohd sadaysgduysad</p>
                    </div>
                </div>
                </div>
          </div>
          <div>
          <div className="container-card">
                <div className="wrapper-card">
                    <div className="card">
                        <img src={ava} alt="" />
                    </div>
                    <div className="judul">
                        <h3>Angkasa Pura I</h3>
                        <p>Angkasa pura lorem insum sauodhausidhuasohd sadaysgduysad</p>
                    </div>
                </div>
                </div>
          </div>
          <div>
          <div className="container-card">
                <div className="wrapper-card">
                    <div className="card">
                        <img src={ava} alt="" />
                    </div>
                    <div className="judul">
                        <h3>Angkasa Pura I</h3>
                        <p>Angkasa pura lorem insum sauodhausidhuasohd sadaysgduysad</p>
                    </div>
                </div>
                </div>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}