import React from 'react';
import { Link } from '@reach/router';
import styles from './Navigation.module.scss';

const Navigation = props => (
  <ul className={styles.Nav}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

export default Navigation;
