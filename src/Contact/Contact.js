import React from 'react';
import './Contact.css';
import { Home, Message, Buy, Calling } from 'react-iconly';


import {SocialIcon} from 'react-social-icons';


export default function Contact () {
    return (
        <div className="contact">
            
            <h4>Travaillons ensemble</h4>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <h5>Une question, une remarque ? Veuillez me contacter **</h5>
            <p>Même si vous avez juste besoin de renseignements, de conseils, je prendrais le temps de vous donner une réponse pertinente.</p>
           
          
            <br />
            <table className="table3">
                <tr>
                    <td className="maison">
                    <Home set="bulk" primaryColor="blueviolet"/>
                    </td>
                    <td>Rueil Malmaison, 92, IDF, France</td>
                </tr>

                <br/>

                <tr>
                    <td className="maison">
                        <a href = "mailto: amri.site@yahoo.com"><Message set="bulk" primaryColor="blueviolet"/></a>
                    </td>
                    <td>
                        amri.site@yahoo.com
                    </td>
                </tr>

                <br/>

                <tr>
                    <td className="maison">
                        <a href="http://amri.store"><Buy set="bulk" primaryColor="blueviolet"/></a>
                    </td>
                    <td>
                        http://amri.store
                    </td>
                </tr>

                <br/>

                <tr>
                    <td className="maison">
                        <Calling set="bulk" primaryColor="blueviolet"/>
                    </td>
                    <td>
                        +33 (0)6 52 96 02 44
                    </td>
                
                </tr>

                <br/>
                
            </table>
        <br/>
        <h5>Retrouvez moi sur ....</h5>
        <p><SocialIcon url="https://www.linkedin.com/in/amri-amri-302228187/" />&nbsp;&nbsp;<SocialIcon url="https://github.com/amri-coder" /></p>
            
          
          <br/>
            
                
        </div>


        




    );
}
