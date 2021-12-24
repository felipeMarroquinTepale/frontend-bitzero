import React from "react";
import CarOne from "../assets/img/cardOne.png";
import CarTwo from "../assets/img/cardTwo.png"
import CarTres from "../assets/img/cardThree.png"
import "../assets/stylesheets/cardHome.css"


class card extends React.Component{
    render() {
        return(

            <div className="row" style={{marginTop:"100px",margin:"3%",padding:"2%",background:"#C6C6C6"}}>

                <div className="container mt-4 d-flex justify-content-center">
                    <div className="row g-0">
                        <div className="col-md-4 border-right">
                            <div className="cards" style={{margin:"5%"}}>
                                <div className="first bg-white p-4 text-center">
                                    <img
                                    src={CarOne} className="w-50"/>
                                    <h5 className="card-title">Nos preocupamos por una interfaz amigable</h5>
                                    <p className="card-text " >
                                        Una aplicación exitosa no debería ser dificil de usar.<br/>
                                        Por ello dedicamos tiempo y esfuerzo en hacer sistemas que sean fáciles de usar y den una buena experiencia a los usuarios.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 border-right">
                            <div className="cards" style={{margin:"5%"}}>
                                <div className="second bg-white p-4 text-center">
                                    <img
                                        src={CarTwo} className="w-50"/>
                                    <h5 className="card-title"><br/>Desarrollo multidisciplinario</h5>
                                    <p className="card-text">
                                        Detrás de una gran aplicación hay una combinación de habilidades de programación y diseño. Nuestro equipo trabaja con
                                        una mezcla de distintos talentos que nos permite entender y resolver los problemas desde distintos enfoques.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cards" style={{margin:"5%"}}>
                                <div className=" third bg-white p-4 text-center">
                                    <img
                                        src={CarTres} className="w-50" />
                                    <h5 className="card-title">Desarrollo en plataformas robustas</h5>
                                    <p className="card-text">Nosotros te orientaremos a elegir la infraestructura y lenguaje de programación adecuado de acuerdo al tamaño, presupuesto
                                        y objetivos de tu proyecto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default card;