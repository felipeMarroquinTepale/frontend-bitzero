import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Slider from "react-slick";
import '/app/assets/stylesheets/CasosExito.css'
import Eventalia from "../assets/img/eventalia.jpg"
import TresientosLugares from "../assets/img/300.jpg"
import arsa from "../assets/img/arsa.jpg"
import kualicab from "../assets/img/kualicab.jpg"



export default class CasosExito extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint:768 ,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <Navbar/>
                <div className="CasosExito">
                    <div className=""><span className="BIT">Nuestros</span> clientes</div>
                </div>
                <div className="container-card">
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                    <style>{cssstyle}</style>

                    <Slider {...settings}>
                        <div>
                            <div className="card">
                                <img className="card-img" src={Eventalia} alt=""/>
                                <p className="text_card text-center text-white" style={{marginTop:"-9%",position:"relative",background:"#A50000"}}>Eventalia</p>
                            </div>
                        </div>
                        <div >
                            <div className="card">
                                <img className="card-img" src={TresientosLugares} alt=""/>
                                <p className="text_card text-center text-white" style={{marginTop:"-9%",position:"relative",background:"#A50000"}}>300 Lugares</p>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                <img className="card-img" src={arsa} alt=""/>

                                <p className="text_card text-center text-white" style={{marginTop:"-9%",position:"relative",background:"#A50000"}}>Sistema de punto de venta ARSA SA DE CV</p>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                <img className="card-img" src={kualicab} alt=""/>

                                <p className="text_card text-center text-white" style={{marginTop:"-9%",position:"relative",background:"#A50000"}}>Kualicab</p>
                            </div>
                        </div>
                    </Slider>
                </div>
                <Footer/>
            </>
        );
    }
}

const cssstyle = `
.container-card {
  margin: -20px auto;
  padding: 40px 40px 40px 40px;
  position: relative;
  top: 10px;  
  width: 90%;
  box-shadow: 0 0 100px rgba(0,0,0,.300);
  border-radius: 20px  
}

h3 {        
    font-size: 36px;
    line-height: 450px;        
    position: relative;
    text-align: center;
    border: 5px solid black;
}

.slick-next:before, .slick-prev:before {
   color: black;      
   font-size: 50px;
   margin: -40px;
}

.card{
    margin: 20px;
    border-radius: 2em;
    background: white;
}
.card{
    transition: all 0.2s ease;
    cursor: pointer;
}

.card:hover {
    box-shadow: 5px 6px 6px 5px gray;
    transform: scale(1.1);

}

.text_card{
border-radius: 20px
}
.card-img{
border-radius: 2em;
}



.slick-dots li.slick-active button:before, .slick-dots li button:before {
    color: #A50000;
    opacity: 1;
    font-size: 16px;
    
}
.slick-dots li.slick-active button {
    border: 2px solid black;
    border-radius: 100%;    
}
.slick-dots li.slick-active button:before {
    color: transparent;
}




`