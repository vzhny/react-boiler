import React, { Component } from 'react';
import { Router } from '@reach/router';
import Navigation from '@/components/Navigation/Navigation';
import NotFound from '@/pages/NotFound';
import ReactLogo from '@/images/react_logo.svg';
import styles from './App.module.scss';

const Home = () => <h1 className={styles.Heading}>Hello World</h1>;

const About = () => <h1 className={styles.Heading}>About Us</h1>;

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <img className={styles.Image} src={ReactLogo} alt="React Logo" />
        <Navigation />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <NotFound default />
        </Router>
      </div>
    );
  }
}
