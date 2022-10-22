import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import Carrito from './components/Carrito';



function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Carrito />

      <Footer />
    </div>
  );
}

export default App;
