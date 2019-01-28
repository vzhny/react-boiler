import React from 'react';
import { Link } from '@reach/router';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <ul className={styles.Nav}>
    <li>
      <Link className={styles.NavLink} to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className={styles.NavLink} to="/about">
        About
      </Link>
    </li>
  </ul>
);

export default Navigation;
