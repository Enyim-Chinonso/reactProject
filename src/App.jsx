import React from 'react'
import './index.css';

import Career from "./Components/Career";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Career/>
    </>
  );
};

export default App;