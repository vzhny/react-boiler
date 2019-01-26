import React, { Component } from 'react';
import { Router } from '@reach/router';
import Navigation from '@/components/Navigation/Navigation';
import Heading from '@/components/Heading/Heading';
import NotFound from '@/pages/NotFound';
import ReactLogo from '@/images/react_logo.svg';
import styles from './App.module.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <img className={styles.Image} src={ReactLogo} alt="React Logo" />
        <Navigation />
        <Router>
          <Heading message="Hello World!" path="/" />
          <Heading message="About Us" path="/about" />
          <NotFound default />
        </Router>
      </div>
    );
  }
}
