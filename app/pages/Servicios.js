import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import web from "../assets/img/Web.png";
import app from "../assets/img/app.png";
import curso from "../assets/img/curso.png";
import ecomm from "../assets/img/Ecomm.png";
import marketing from "../assets/img/marketing.png";
import medida from "../assets/img/medida.png";
import style from "../assets/stylesheets/Servicios.css";
import front from "../assets/img/front.png"
import certificacion from "../assets/img/certificacion.png"
import bd from "../assets/img/bd.png"
import back from "../assets/img/back.png"
import movil from "../assets/img/movil.png"




export default  class Servicios extends React.Component {
    render(){
        return(
            <>
                <Header/>
                <div className="title_servicios text-center">
                    <div className="">En nuestros <span className="BIT">servicios</span> elegimos con medida cada parte de tu sistema</div>
                </div>
                <div className="tabs">
                    <h1 style={{color:"white"}}>React Tabs</h1>
                    <Tabs>
                        <Tab label="INTERFAZ DE USUARIO (FRONTEND)">
                            <div className="container">
                                <img src={front} className="img-tabs img-fluid rounded"  alt="Desarrollo de software"/>
                                <h4>INTERFAZ DE USUARIO (FRONTEND)</h4>
                                <div className="parrafo-tabs">
                                    <p  style={{margin:"10%"}} >Generamos interfaces fluidas, fáciles de usar y optimizadas para pantallas
                                        móviles y de escritorio. Además, somos expertos en experiencia de usuario (UX).
                                        Utilizamos tecnologías como: HTML5, Javascript, CSS y trabajamos con los principales
                                        "Frameworks" como:  VueJs, React, Bootstrap por mencionar solo las principales.</p>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="TECNOLOGIA A LADO DEL SERVIDOR">
                            <div className="container">
                                <img src={back} className="img-tabs img-fluid rounded"  alt="Desarrollo de software"/>
                                <h4>TECNOLOGIA DEL LADO DEL SERVIDOR</h4>
                                <div className="parrafo-tabs">
                                    <p  style={{margin:"10%"}} >Desarrollamos aplicaciones con los más avanzados lenguajes de programación,
                                        siguiendo metodologías de ingeniería de software y adecuados para aplicaciones
                                        de cualquier tamaño y complexidad. Somos expertos en lenguajes de programación
                                        como: PHP, Ruby y Javascript asi como en plataformas como Laravel, NodeJs, etc.</p>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="TECNOLOGIA MOVIL">
                            <div className="container">
                                <img src={movil} className="img-tabs img-fluid rounded"  alt="Desarrollo de software"/>
                                <h4>TECNOLOGIA MOVIL</h4>
                                <div className="parrafo-tabs">
                                    <p  style={{margin:"10%"}} >Nuestras metologías nos permiten desarrollar aplicaciones móviles nativas
                                        que funcionen como extensión de tu sistema en línea
                                        compartiendo una misma información centralizada.
                                        Hacemos aplicaciones para teléfonos móviles y tabletas Apple y Android.</p>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="BASE DE DATOS">
                                <div className="container">
                                <img src={bd} className="img-tabs img-fluid rounded"  alt="Desarrollo de software"/>
                                <h4>BASE DE DATOS</h4>
                                <div className="parrafo-tabs">
                                    <p  style={{margin:"10%"}} >Trabajamos con la más avanzada tecnología de base de datos de manera que nos
                                        aseguramos que tus datos están protegidos y disponibles cuando los necesites sin
                                        importar la cantidad de procesos que realizes ni el volumen de tus datos.
                                        Somos expertos en: MySQL y SQL Server.</p>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="CERTIFICACIONES">
                            <div className="container">
                                <img src={certificacion} className="img-tabs img-fluid rounded"  alt="Desarrollo de software"/>
                                <h4>CERTIFICACION</h4>
                                <div className="parrafo-tabs">
                                    <p  style={{margin:"10%"}} >La certificación en ISO/IEC respalda los procesos de
                                        nuestra compañía, y garantiza a nuestros clientes que todos los elementos de
                                        gestión sean de calidad, permiten el desarrollo de un sistema confiable y garantizado
                                        de innovación y producción en nuestra propuesta de valor de acuerdo a sus necesidades</p>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>

                {/*Card principal de Servicios*/}
                <div className="title_servicios">
                    <div className=""><span className="BIT">Nuestros</span> servicios</div>
                </div>
                <div className="card-group">
                    <div className="col">
                        <div className="container">
                        <div className="card-servicio h-100 text-black" id="card">
                            <img src={web} className="card-img-top w-75" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Diseño para pagina web</h5>
                                <p className="card-text" style={{marginTop:"15%"}}>
                                    Haz que tu idea, marca o producto llegue a más clientes potenciales
                                    <br/><br/><br/>
                                </p>
                            </div>
                        </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col">
                        <div className="container">
                        <div className="card-servicio h-100 text-black" id="card">
                            <img src={ecomm} className="card-img-top w-75" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">E- COMMERCE</h5>
                                <p className="card-text" style={{marginTop:"15%"}}>
                                    Lleva tus productos a mas clientes.
                                    Diseñamos tiendas online con
                                    Woocomerce o Prestashopbr<br/><br/><br/>
                                </p>
                            </div>
                        </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col">
                        <div className="card-servicio h-100 text-black" id="card">
                            <img src={marketing} className="card-img-top w-75"  alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">MARKETING DIGITAL</h5>
                                <p className="card-text" style={{marginTop:"15%"}}>
                                    Realizamos campañas en Google,
                                    Youtube, Facebook e instagram para
                                    que tus productos lleguen a mas
                                    clientes potenciales
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="card-group">
                    <div className="col">
                        <div className="card-servicio h-100 text-black" id="card">
                            <img src={medida} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Desarrollo a la medida</h5>
                                <p className="card-text" style={{marginTop:"15%"}}>
                                    Desarrollo de Software a la medida.
                                    <br/><br/><br/>
                                </p>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col">
                        <div className="card-servicio h-100 text-black" id="card">
                            <img src={curso} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cursos y talleres</h5>
                                <p className="card-text" style={{marginTop:"15%"}}>
                                    Asesorias, cursos y talleres de
                                    Marketing Digital para tu equipo de
                                    trabajo
                                    <br/><br/><br/>
                                </p>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col">
                        <div className="card-servicio h-100 text-black" id="card">
                            <img src={app} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Desarrollo de APP</h5>
                                <p className="card-text" style={{marginTop:"15%"}}>
                                    Desarrollomas Aplicaciones moviles
                                    a la medida
                                    <br/><br/><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>

        )
    }
}

class Tabs extends React.Component{
    state ={
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

        this.setState({ activeTab: tab });
    };
    render(){

        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child =>{
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
                <div className="tab-content">{content}</div>

            </div>
        );
    }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{

    return(
        <div className="tab-buttons">
            {buttons.map(button =>{
                return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
            })}
        </div>
    )
}

const Tab = props =>{
    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}