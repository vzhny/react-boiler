import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import styles from './App.module.scss';

const Navigation = () => (
  <ul className={styles.Nav}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

const Home = () => (
  <>
    <h1 className={styles.Heading}>Hello World!</h1>
    <p className={styles.Blurb}>
      Lorem ipsum dolor sit amet consectetur elit. Laboriosam, nemo! Id aliquid voluptatum in!
      Assumenda quia accusantium quo quisquam.
    </p>
  </>
);

const About = () => (
  <>
    <h1 className={styles.Heading}>About Us</h1>
    <p className={styles.Blurb}>
      Lorem ipsum dolor sit amet nemo quia consectetur adipisicing elit. Incidunta a facilis veniam
      aspernatur temporibus a consectetur.
    </p>
  </>
);

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navigation />
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </div>
    );
  }
}
