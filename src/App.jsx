import React from 'react';
import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from './container';
import { Brand, Cta, Navbar } from './components';
import './app.css'

const App = () => {
  return (
    <div classname="App">

        <div className="gradiant__bg">
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      
    </div>
  )
}

export default App
