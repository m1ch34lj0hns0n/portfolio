import React from 'react';
import ReactGA from 'react-ga';

import './App.css';

import Navigation from './components/navigation';
import Header from './components/header';

import routes from './routes';

function App() {

  ReactGA.initialize('UA-180861803-1');
  ReactGA.pageview(window.location.pathname);

  const sections = routes.map((route, i) => (
    <React.Fragment key={route.name}>
      <route.component id={route.name.toLowerCase()} />
    </React.Fragment>
  ));

  return (
    <div className="App">
      <Navigation />
      <Header />
      {sections}
    </div>
  );
}

export default App;
