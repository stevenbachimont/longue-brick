
import React, { useState } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import lombric from '../data';

import './app.css'

export function App() {
  console.log('%c⧭', 'color: #0088cc', lombric[5].name);
  const [lombricList, setLombricList] = useState(0);

  return (
    <>

      <Header />

      <Main lombric ={lombric} lombricList={lombricList}  setLombricList={setLombricList}/>
      <Footer />
    </>

  )
}
