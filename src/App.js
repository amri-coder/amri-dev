import React from 'react';
import NavBar from './NavBar/NavBar.js';
import Lateral from './Lateral/Lateral.js';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";



import './App.css';

function App() {
  return (
    
     
     
    <Router>
   
      <div className="App">
      <NavBar />
        </div>
       
      <Lateral />
    </Router>
  
  
  );
}

export default App;
