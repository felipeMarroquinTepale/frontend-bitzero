import React from "react";
import {BrowserRouter as Router, Switch,Route,Redirect} from "react-router-dom";

import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Clientes from "../pages/Clientes";
import Contacto from "../pages/Contacto";
import Servicios from "../pages/Servicios";
import CasosExito from "../pages/CasosExito";

class App extends React.Component{

    render() {

        return(
            <div>
                <Router>
                    <Switch>

                        <Route exact path='/' render={()=>(<Redirect to="/Home"/>)}/>
                        <Route exact path="/Home" component={Home}/>
                        <Route exact path="/Nosotros" component={Nosotros}/>
                        <Route exact path="/Clientes" component={Clientes}/>
                        <Route exact path="/Contacto" component={Contacto}/>
                        <Route exact path="/Servicios" component={Servicios}/>
                        <Route exact path="/CasosExito" component={CasosExito}/>
                    </Switch>
                </Router>
            </div>

        )
    }
}

export default App;