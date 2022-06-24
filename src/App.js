import React from 'react';
import { Navigation } from './Components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Hero } from './Components/Hero/Hero';
import { Break } from './Components/Home/Break';
import {Models} from './Components/Home/Models/Models';
import { BigLove } from './Components/Home/BigLove/BigLove';


function App() {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <Break/>
      <Models/>
      <BigLove/>
    </div>
  );
}

export default App;
