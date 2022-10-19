import './App.css';
import React from 'react';
import Header from './components/layout/Header';

//Router traido desde react-router-dom (no confundir con el de express)
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
  <div className="App">
        <Header />
    
        
        <Footer />
    </div>
    </Router>
  );
}

export default App;