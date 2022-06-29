import React from 'react';
import { Navigation } from './Components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Hero } from './Components/Hero/Hero';
import { Break } from './Components/Home/Break';
import {Models} from './Components/Home/Models/Models';
import { BigLove } from './Components/Home/BigLove/BigLove';
import { Featured } from './Components/Home/Featured/Featured';
import {Card} from './Components/Home/Card/Card';
import { BreakTwo } from './Components/Home/BreakTwo';
import { Contact } from './Components/Home/Contact';
import { Footer } from './Components/Footer/Footer';
import { Legal } from './Components/Footer/Legal';


function App() {
  return (
    <div>
      <Navigation/>
      {/* <Hero/> */}
      <Break/>
      <Models/>
      <BigLove/>
      <Featured/>
      <Card/>
      <BreakTwo/>
      <Contact/>
      <Footer/>
      <Legal/>
    </div>
  );
}

export default App;
