import React from "react";
import Car from '/app/assets/img/slider2.jpg'
import CarTwo from '/app/assets/img/us.png'
import '/app/assets/stylesheets/Home.css'

class Carrusel extends React.Component{
    
        redirect = () => {
        window.location.href="/Servicios"
    }


    render() {
        return(
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="card bg-white m-width-100">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className="container" style={{marginTop:"10%"}}>
                                    <div className="card-body text-left " style={{marginLeft:"5%"}}>
                                        <h4 className="text-black">BIENVENIDO A <span className="BIT">BIT</span>ZERO TECHNOLOGIES</h4>
                                        <h5 className="text-blackT"><br/><br/>Desarrollo de <span className="text-span">sistemas a su medida</span></h5>
                                        <p className="text-black "><br/>Somos una consultoria en soluciones tecnologicas y desarrollo
                                            de software a la medida siguiendo estandares de calidad.
                                            Nuestras aplicaciones son robustas y faciles de usar, trabajamos
                                            con principales herramientas tecnologicas de acuerdo a las necesidades de cada proyecto</p>
                                        <div className="d-grid gap-0 col-5 mx-auto" >
                                            <button type="button" onClick={this.redirect} className="btn btn-lg  text-white">Comenzar</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-carousel" src={Car} width="100%"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="card bg-white m-width-100">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className="container" style={{marginTop:"10%"}}>
                                        <div className="card-body text-left" style={{marginLeft:"5%"}}>
                                            <h4 className="text-black"><span className="BIT">BIT</span>ZERO TECHNOLOGIES</h4>
                                            <h5 className="text-blackT"><br/><br/>Conoce nuestros diferentes <span className="text-span">servicios</span></h5>
                                            <p className="text-black "><span className="BIT"><br/>BIT</span>ZERO es una compañia que te ofrece una variedad de servicios en cuanto al desarollo de software, como los son: <br/>
                                                Diseño de paginas web,Marketing digital, Ecommerce, cursos, talleres y mas.
                                            </p>
                                            <div className="d-grid gap-0 col-5 mx-auto" >
                                                <button type="button" onClick={this.redirect} className="btn btn-lg  text-white">Servicios</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-carousel" src={CarTwo} alt="..." width="111%"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

export default Carrusel;