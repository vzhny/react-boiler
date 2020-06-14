import * as React from 'react';
import { Link } from '@reach/router';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => (
  <ul className={styles.nav}>
    <li>
      <Link className={styles.navLink} to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className={styles.navLink} to="/about">
        About
      </Link>
    </li>
  </ul>
);

export default Navigation;
