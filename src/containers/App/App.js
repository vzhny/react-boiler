import React from 'react';
import { Router } from '@reach/router';
import Navigation from '@/components/Navigation/Navigation';
import ReactLogo from '@/images/react_logo.svg';
import Landing from '@/pages/Landing';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import { app, image, spinning } from './App.module.scss';

const App = () => (
  <div className={app}>
    <div className={image}>
      <img alt="React Logo" className={spinning} src={ReactLogo} />
    </div>
    <Navigation />
    <Router>
      <Landing path="/" />
      <About path="/about" />
      <NotFound default />
    </Router>
  </div>
);

export default App;
