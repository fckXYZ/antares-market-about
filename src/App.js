import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Moto} from "./components/Moto";
import {Info} from "./components/Info";
import {Advantages} from "./components/Advantages";
import {SafeDeal} from "./components/SafeDeal";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="root">
      <Header/>
      <div className='main'>
          <Moto/>
          <Info/>
          <Advantages/>
          <SafeDeal/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
