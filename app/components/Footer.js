import React from "react";
import logo from "../assets/img/img.png"
import Email from "../assets/img/Email.png"
import Mobile from "../assets/img/Mobile.png"
import Location from "../assets/img/Location.png"
import '/app/assets/stylesheets/Home.css'
import {NavLink} from "react-router-dom";

class Footer extends React.Component{

    render() {
        return(

            <footer className="footer text-center text-lg-start text-muted  text-white" style={{marginTop:"5%", background:"#EAEAEA"}}>
                <br/>
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <img src={logo} alt=""
                                     className="d-inline-block align-text-top"
                                />
                                <p/>
                                <p>
                                    ¿Qué es Bitzero?
                                </p>
                                <p>
                                    Es una empresa especialista en el desarrollo de software a la medida y consultoría en solucions tecnológicas.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    MENU
                                </h6>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Home"> INICIO </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Servicios"> SERVICIOS </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/CasosExito"> CASOS DE EXITO </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Nosotros"> NOSOTROS </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Clientes"> CLIENTES </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Contacto"> CONTACTO </NavLink>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    SERVICOS
                                </h6>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Servicios"> Diseño de Pagina Web </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Servicios"> E-COMMERCE </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Servicios"> Desarrollo a la Medida </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Servicios"> Marketing Digital </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Servicios"> Cursos y Talleres </NavLink>
                                </p>
                                <p>
                                    <NavLink style={{color:"#6C757D", textDecoration: 'none'}} to="/Servicios"> Desarrollo de App </NavLink>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">¿Tienes alguna pregunta?</h6>
                                <p> {<img src={Email} height="18" width="20"/>} E-Mail: contacto@bitzero.mx</p>
                                <br/>
                                <p> {<img src={Mobile} height="20" width="15"/>} Tel. Cel.: 961 225 5126</p>
                                <p> {<img src={Location} height="20" width="18"/>} Av. Platino No. 173, Fraccionamiento, Valle Dorado, Col. Rosario Poniente,Tuxtla Gutiérrez, Chiapas C.P. 29014</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;