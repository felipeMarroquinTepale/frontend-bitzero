import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import Twitter from "../assets/img/twitter.png"
import Mail from "../assets/img/mail.png"
import Facebook from "../assets/img/facebook.png"
import Phone from "../assets/img/phone.png"
import "../assets/stylesheets/contacto.css"
import Form from "../components/FormularioContac"
import Mapa from "../components/Mapa"


class Contacto extends React.Component{
    render() {
        return(
            <>
                <Navbar/>
                <div className="CasosExito">
                    <div className=""><span className="BIT">Contactanos</span></div>
                </div>
                <div className="card-group" style={{heigth:"100%",margin:"10%", marginTop:"5%"}}>
                    <div className="col">
                        <div className="card-contacto" style={{background:"#E7E8EA",width:"90%",height:"120%"}}>
                            <a href="https://www.facebook.com/BitzeroTech/" style={{ textDecoration: 'none'}}><img src={Facebook} className="img-responsive" alt="..." style={{marginLeft:"45%",marginTop:"6%",width:"12%"}}/></a>
                            <div className="card-body">
                                <a href="https://www.facebook.com/BitzeroTech/" style={{ textDecoration: 'none'}}><h5 className="card-title text-center text-black">Facebook</h5></a>
                                <div style={{marginTop:"60%"}}>
                                    <a href="https://www.facebook.com/BitzeroTech/" style={{ textDecoration: 'none'}}><p className="card-text text-center text-black">BITZERO</p></a>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col">
                        <div className="card-contacto" style={{background:"#E7E8EA",width:"90%",height:"120%"}}>
                            <a href="https://twitter.com/bitzerotech?lang=es" style={{ textDecoration: 'none'}}><img src={Twitter} className="img-responsive" alt="..." style={{marginLeft:"45%",marginTop:"6%",width:"12%"}}/></a>
                            <div className="card-body">
                                <a href="https://twitter.com/bitzerotech?lang=es" style={{ textDecoration: 'none'}}><h5 className="card-title text-center text-black">Twitter</h5></a>
                                <div style={{marginTop:"60%"}}>
                                    <a href="https://twitter.com/bitzerotech?lang=es" style={{ textDecoration: 'none'}}>
                                        <p className="card-text text-center text-black">Bitzero Technologies</p></a>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col">
                        <div className="card-contacto" style={{background:"#E7E8EA",width:"90%",height:"120%"}}>
                            <img src={Phone} className="img-responsive" alt="..." style={{marginLeft:"45%",marginTop:"6%",width:"12%"}}/>
                            <div className="card-body">
                                <h5 className="card-title text-center text-black">Numero de contacto</h5>
                                <div style={{marginTop:"60%"}}>
                                    <p className="card-text text-center text-black">(961) 226 1559</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col">
                        <div className="card-contacto" style={{background:"#E7E8EA",width:"90%",height:"120%"}}>
                            <img src={Mail} className="img-responsive" alt="..." style={{marginLeft:"45%",marginTop:"6%",width:"10%"}}/>
                            <div className="card-body">
                                <h5 className="card-title text-center text-black">Correo electronico</h5>
                                <div style={{marginTop:"60%"}}>
                                    <p className="card-text text-center text-black">contacto@bitzero.mx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="container">
                    <div className="card-group">
                        <div className="col">
                            <Mapa/>
                            <br/>
                        </div>
                        <div className="col">
                            <Form/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }

}


export default Contacto;