import React from 'react';


import { Navbar, Article, Brand, Type } from './components';
import { Footer, Header } from './containers';

import './App.css'
import WhatJsFramework from './containers/WhatJsFramework/WhatJsFramework';



const App = () => {
  return (
    <div className='App'>
      <div className="navbar_bg">
        <Navbar />
        <Header /> 

      </div>
      <Brand />
      <WhatJsFramework />
      <Type />
      <Footer />
    </div>
  )
}

export default App;


