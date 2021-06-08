import React, {useState} from 'react';
import './NavBar.css';

import { MDBNavItem } from "mdbreact";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav } from "mdbreact";

import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import Accueil from '../Accueil/Accueil.js';
  import Services from '../Services/Services.js';
  import Apropos from '../Apropos/Apropos.js';
  import Contact from '../Contact/Contact.js';

export default function NavBar () {
   
  
  const [isMobile, setIsMobile]= useState(false);
  
  
  return (


<Router>
      
  
  <div className="navbarPC">

    <MDBNavbar secondary expand="md" className="navbarColor">
        <MDBNavbarBrand >
          <strong className="blue-text" style={{color:"#CCCCCC"}}><Link activeClass="active" to="/" spy={true} smooth={true} offset={0} >AMRI</Link></strong>
        </MDBNavbarBrand>
        
         


                <MDBNavbarNav right>


                    <div className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={()=>setIsMobile(false)}>


                        <MDBNavItem className="link0">
                          <Link activeClass="active" to="/" spy={true} smooth={true} offset={0}>ACCUEIL</Link>
                        </MDBNavItem>
                        
                        <MDBNavItem className="link1">
                          <Link activeClass="active" to="/Services" spy={true} smooth={true} offset={0} duration={500}>SERVICES</Link>
                        </MDBNavItem>
                      
                      
                        <MDBNavItem className="link2">
                          <Link activeClass="active" to="/Apropos" spy={true} smooth={true} offset={0} duration={500}>À PROPOS</Link>
                        </MDBNavItem>
                      
                        <MDBNavItem className="link3">
                          <Link activeClass="active" to="/Contact" spy={true} smooth={true} offset={0} duration={500}>CONTACT</Link>
                        </MDBNavItem> 


                    </div>
                    
                  
                  </MDBNavbarNav>

        
         

        <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>{isMobile ? (<i className="fas fa-times"></i>):(<i className="fas fa-bars"></i>)}</button>
      </MDBNavbar>
  </div>
     

        <Route path="/" exact component={Accueil} />
        <Route path="/Services" component={Services} />
        <Route path="/Apropos" component={Apropos} />
        <Route path="/Contact" component={Contact} />

    
        
    </Router>

    );
}
