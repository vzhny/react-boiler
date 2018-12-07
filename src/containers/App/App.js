import React, { Component } from 'react';
import LandingImage from '@/components/UI/LandingImage/LandingImage';
import styles from './App.module.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <LandingImage />
        <h1 className={styles.Heading}>Hello World!</h1>
      </div>
    );
  }
}
