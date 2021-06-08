import React from 'react';
import UseAnimations from 'react-useanimations';
import '../Services/Services.css';
import loading2 from 'react-useanimations/lib/loading2';
import image from '../Services/page.png';
import image_mobile from '../Services/page_mobile.png';

export default function Services() {

    
    return (
        <div className="services">
           

            <h4>Mes Services</h4>
            
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <br/>
            <div className="services-item">

                <UseAnimations animation={loading2} size={100} />
                
            </div>
            
            <br />
            <div className="imageConstruction">
                <img src={image} alt ="construction" />
                <br/>
            </div>
            <div className="imageConstructionMobile">
                <img src={image_mobile} alt ="construction mobile" />
                <br/>
                <br/>
                <br/>
            </div>
            <div className="brr">
                <p></p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/> <br/><br/> <br/>
                <br/><br/>
                <br/><br/><br/><br/>
                <br/>
            </div>
            
           
            
        </div>



    );
}
