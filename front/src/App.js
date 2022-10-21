import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Ventas from './components/Ventas';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Ventas />

      <Footer />
    </div>
  );
}

export default App;
