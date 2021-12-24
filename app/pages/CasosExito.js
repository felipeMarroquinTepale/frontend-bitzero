import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Slider from "react-slick";
import '/app/assets/stylesheets/CasosExito.css'

import Restaurant from "../assets/img/Restaurant.png"
import puntoVenta from "../assets/img/puntoVenta.png"
import ruta from "../assets/img/ruta.png"
import eventos from "../assets/img/evento.png"

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
                    <h7 className=""><span className="BIT">Nuestros</span> casos de exito</h7>
                </div>
                <div className="container-card">
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <style>{cssstyle}</style>

                    <Slider {...settings}>
                        <div className="container">
                            <div className="card">
                                <img className="card-img" src={Restaurant} alt="" style={{width:"80%",marginLeft:"8%",marginTop:"4%"}}/>
                                <p className="textCard text-center text-dark" style={{marginTop:"2%",position:"relative"}}>Software consultor de Centros de Consumo de Alimentos y Bebidas de Tuxtla</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="card">
                                <img className="card-img" src={puntoVenta} alt="" style={{width:"70%",marginLeft:"7%",marginTop:"10%"}}/>
                                <p className="textCard text-center text-dark" style={{marginTop:"15%",position:"relative",background:"white"}}>Punto de venta para la administracion de comercios, como abarrotes,farmacias,etc.</p>
                            </div>
                        </div>

                        <div className="container">
                            <div className="card">
                                <img className="card-img" src={ruta} alt="" style={{width:"90%",marginLeft:"0",marginTop:"2%"}}/>
                                <p className="textCard text-center text-dark" style={{marginTop:"15%",position:"relative",background:"white"}}>Servicios de taxis creada para generar un transporte seguro,de calidad y con menor costo a traves de una app movil</p>
                            </div>
                        </div>

                        <div className="container">
                            <div className="card">
                                <img className="card-img" src={eventos} alt=""  style={{width:"60%",marginLeft:"18%",marginTop:"2%"}}/>
                                <p className="textCard text-center text-dark"  style={{marginTop:"5%",position:"relative",background:"white"}}>Software consultor para la organizacion de eventos en la Península de Yucatán: Bodas, Eventos Corporativos y Eventos Sociales.</p>
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
    color: #fff;
    font-size: 36px;
    line-height: 450px;    
    padding: 2%;
    position: relative;
    text-align: center;
}
.card{
    margin: 10px;
    border-radius: 2em;
    background: white;
    border: 1px solid grey;
}
.card{
    transition: all 0.2s ease;
    cursor: pointer;
}

.card:hover {
    box-shadow: 5px 6px 6px 5px gray;
    transform: scale(1.1);

}
.textCard{
    border-radius: 20px
}


.slick-next:before, .slick-prev:before {
   color: black;      
   font-size: 50px;
   margin: -40px;
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