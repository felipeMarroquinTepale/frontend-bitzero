import React from "react";
import logo from "../assets/img/img.png"
import {NavLink} from "react-router-dom";
import "../assets/stylesheets/header.css"

class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-xxl navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo Bitzero"
                             className="d-inline-block align-top" width="155" height="55" style={{marginLeft:"10%"}}/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{marginRight:"7%"}}>
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <NavLink  activeStyle={{fontWeight:"bold",color:"#A50000"}} style={{marginLeft:"15px",color:"black", textDecoration: 'none'}} to="/Home">INICIO</NavLink>
                            </li>
                            <li className="nav-item">

                                <NavLink activeStyle={{fontWeight:"bold",color:"#A50000"}} style={{marginLeft:"15px",color:"black",textDecoration: 'none'}} to="/Servicios">SERVICIOS</NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavLink activeStyle={{fontWeight:"bold",color:"#A50000"}} style={{marginLeft:"15px",color:"black", textDecoration: 'none'}} to="/CasosExito">CASOS DE EXITO</NavLink>
                            </li>
                            <li className="nav-item" >

                                <NavLink activeStyle={{fontWeight:"bold",color:"#A50000"}} style={{marginLeft:"15px",color:"black", textDecoration: 'none'}} to="/Nosotros">NOSOTROS</NavLink>
                            </li>
                            <li className="nav-item" >

                                <NavLink activeStyle={{fontWeight:"bold",color:"#A50000"}} style={{marginLeft:"15px",color:"black", textDecoration: 'none'}} to="/Clientes">CLIENTES</NavLink>
                            </li>
                            <li className="nav-item" >

                                <NavLink activeStyle={{fontWeight:"bold",color:"#A50000"}} style={{marginLeft:"15px",color:"black",textDecoration: 'none'}} to="/Contacto">CONTACTO</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Header;