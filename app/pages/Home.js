import React from "react";
import Carrusel from '../components/Carrusel'
import '/app/assets/stylesheets/Home.css'
import Card from "../components/card";
import Footer from "../components/Footer";
import Navbar from "../components/Header";


class Home extends React.Component{
    render() {
        return(
            <>
                <Navbar/>
                <Carrusel/>
                <div className="tituloreseña">
                    <h4 className="text-black"><span className="BIT">BIT</span>ZERO SE PREOCUPA POR TI</h4>
                </div>
                <div className="container" >
                <div className="reseña">
                    <p>La vision de nuestros clientes es nuestra mejor practica que podemos usar para poder generar los resultados esperados.
                        Mas de N años de experiencia que nos respaldan nos ha llevado a perfeccionar el uso de las mejores practicas para producir
                        y mantener software de calidad a nuestros clientes.
                    </p>
                </div>
                </div>
                <Card/>
                <Footer/>
            </>
        )
    }
}

export default Home;