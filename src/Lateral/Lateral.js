import React from 'react';
import './Lateral.css';
import { MDBIcon, MDBContainer } from 'mdbreact';

const Lateral = () => {
  return (
    <div className="lateral">

          <br/>
          
          <MDBContainer>
            
            
            <a href="https://www.linkedin.com/in/amri-amri-302228187/" className="li-ic mr-3">
              <MDBIcon fab icon="linkedin-in" />
            </a>
            
            
            <a href="https://github.com/amri-coder" className="git-ic mr-3">
              <MDBIcon fab icon="github" />
            </a>
            
            <a href="mailto:amri.site@yahoo.com" className="email-ic mr-3">
              <MDBIcon icon="envelope" />
            </a>

            <a href="http://amri.store/" className="dribbble-ic mr-3">
              <MDBIcon fab icon="dribbble" />
            </a>


          </MDBContainer>
 
        <MDBContainer fluid style={{color:'#3B82F6'}}>
          &copy; {new Date().getFullYear()} Copyright{" "}
         | AMRI | All rights reserved
        </MDBContainer>
     
         

    </div>
   
  );
}

export default Lateral;