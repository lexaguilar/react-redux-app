import { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from './Home';
import Shopping from "./Shopping";
import Usuario from "./Usuario";
import { useSelector } from 'react-redux';

import React from 'react';
import Emails from "./Emails";

const Menu = () => {

    const { cart } = useSelector(store => store);
   
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/shopping">Shopping</Link> 
                        </li>
                        <li>
                            <Link to="/usuario">Usuario</Link>
                        </li>
                        <li>
                            <Link to="/emails">Correo</Link>
                        </li>
                        <li>
                            <Link to="/emails"><span className="fas fa-shopping-cart"></span>{cart.length}</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                   <Route exact path='/'>
                       <Home></Home>
                   </Route>
                   <Route exact path='/usuario'>
                       <Usuario></Usuario>
                   </Route>
                   <Route exact path='/shopping'>
                       <Shopping></Shopping>
                   </Route>
                   <Route exact path='/emails'>
                       <Emails></Emails>
                   </Route>

                </Switch>
            </BrowserRouter>
        );    
}

export default Menu;


// class Menu extends Component{
//     render(){
//         return(
//             <BrowserRouter>
//                 <div>
//                     <ul>
//                         <li>
//                             <Link to="/" >Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/shopping">Shopping</Link> 
//                         </li>
//                         <li>
//                             <Link to="/usuario">Usuario</Link>
//                         </li>
//                         <li>
//                             <Link to="/emails">Correo</Link>
//                         </li>
//                         <li>
//                             <Link to="/emails"><span className="fas fa-shopping-cart"></span>0</Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <Switch>
//                    <Route exact path='/'>
//                        <Home></Home>
//                    </Route>
//                    <Route exact path='/usuario'>
//                        <Usuario></Usuario>
//                    </Route>
//                    <Route exact path='/shopping'>
//                        <Shopping></Shopping>
//                    </Route>

//                 </Switch>
//             </BrowserRouter>
//         );
//     }
// }

// export default Menu;