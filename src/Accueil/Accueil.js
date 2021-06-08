import React, {Fragment} from 'react';
import { MDBBtn } from "mdbreact";
import './Accueil.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";



import accueil from '../Images/man.jpg';


export default function Accueil () {

    return (
    
    <div className="accueil">
        
        <table className="table1">

            <tr>
                <td className="td1">

                    <img src={accueil} alt="ico" />

                </td>
                <td className="td1">
                    <h3 className="h3">Ensemble, concevons</h3>
                    <h3 className="h3-1">un produit web innovant</h3>
                    <h3>Bonjour, je suis Amri.</h3>
                    
                    <h3>Développeur Informatique</h3>
                    
                    
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
           
                    <br/>

                    <Fragment>

                            <Link activeClass="active" to="/Apropos" spy={true} smooth={true} offset={0} duration={500}>
                                     <MDBBtn rounded outline color="secondary">EN SAVOIR PLUS !</MDBBtn>
                            </Link>

                    </Fragment>
                    <br/>

                  
      

                </td>
               
            </tr>
        </table>

        <div className="table2">

            

                     <img src={accueil} alt="ico" />

            
                    <h3 className="h3">Ensemble, concevons</h3>
                    <h3 className="h3-1">un produit web innovant</h3>
                    <h3>Bonjour, je suis Amri.</h3>
        
                    <h3>Développeur Informatique</h3>
        
        
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />

                    <br/>

                    <Fragment>

                        <Link activeClass="active" to="/Apropos" spy={true} smooth={true} offset={0} duration={500}>
                                <MDBBtn rounded outline color="secondary">EN SAVOIR PLUS !</MDBBtn>
                        </Link>

                    </Fragment>
                    
                    <br/>

      


        </div>

     
        
          <br/>

       
        
    </div>);
}