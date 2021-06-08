import React from 'react';
import Button from 'react-bootstrap/Button';
import javascript from '../Apropos/javascript.svg';
import html5 from '../Apropos/html5.svg';
import php from '../Apropos/php.svg';
import java from '../Apropos/java.svg';
import react from '../Apropos/react.svg';
import bootstrap from '../Apropos/bootstrap.svg';
import css3 from '../Apropos/css3.svg';
import npm from '../Apropos/npm.svg';
import filezilla from '../Apropos/filezilla.svg';
import git from '../Apropos/git.svg';
import apachetomcat from '../Apropos/apachetomcat.svg';
import mysql from '../Apropos/mysql.svg';
import api from '../Apropos/fastapi.svg';



import './Apropos.css';


export default function Apropos () {
    return(<div className="apropos">
        <h4>À PROPOS</h4>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
        <br/>
        <h5>Vous cherchez un développeur de confiance ?</h5>
        <p>Je suis AMRI, Développeur web</p>
        <p>Passionné par le développement web, je suis disponible pour vous accompagner sur tout le front-end et le back-end de votre projet</p>
        <br />
        <p>Mon inventivité et ma curiosité seront des atouts indéniables pour réaliser avec succès vos futurs projets car je suis toujours au fait des dernières tendances techniques.</p>
         
       

  
        <br/>

     
        <Button variant="success"><img height="32" width="32" src={javascript} alt="JavaScript" />  JavaScript</Button>{' '}
        <Button variant="success"><img height="32" width="32" src={html5} alt="HTML5" /> HTML5</Button>{' '}
        <Button variant="success"><img height="32" width="32" src={java} alt="Java" /> Java/Jee</Button>{' '}
        <Button variant="success"><img height="32" width="32" src={php} alt="PHP" /> PHP</Button>{' '}
        <br />
        <Button variant="success"><img height="32" width="32" src={react} alt="React" /> React</Button>{' '}
        <Button variant="success"><img height="32" width="32" src={bootstrap} alt="Bootstrap" /> Bootstrap</Button>{' '}
        <Button variant="success"><img height="32" width="32" src={css3} alt="Css3" />  CSS 3</Button>{' '}
        <Button variant="success"><img height="32" width="32" src={npm} alt="npm" />  NPM</Button>{' '}
        <br/>
        <Button variant="success"><img height="32" width="32" src={filezilla} alt="filezilla" />  Filezilla</Button>{' '}
        <Button variant="success"><img height="32" width="32" src={git} alt="git" />  Git</Button>{' '}
        <Button variant="success"><img height="32" width="32" src={apachetomcat} alt="apachetomcat" />  apache tomcat</Button>{' '}
        <Button variant="success"><img height="32" width="32" src={mysql} alt="mysql" />  mysql</Button>{' '}
        <br />
        <Button variant="success"><img height="32" width="32" src={api} alt="api" />  api</Button>{' '}

        <br />
        <br />
    </div>);
}