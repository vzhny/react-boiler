import React from 'react';
import { Router } from '@reach/router';
import Navigation from '@/components/Navigation/Navigation';
import ReactLogo from '@/images/react_logo.svg';
import Landing from '@/pages/Landing';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import { app, image } from './App.module.scss';

const App = () => (
  <div className={app}>
    <img alt="React Logo" className={image} src={ReactLogo} />
    <Navigation />
    <Router>
      <Landing path="/" />
      <About path="/about" />
      <NotFound default />
    </Router>
  </div>
);

export default App;
