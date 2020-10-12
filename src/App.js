import React from 'react';
import './App.css';

import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
