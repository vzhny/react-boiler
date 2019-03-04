import React from 'react';
import { Link } from '@reach/router';
import { nav, navLink } from './Navigation.module.scss';

const Navigation = () => (
  <ul className={nav}>
    <li>
      <Link className={navLink} to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className={navLink} to="/about">
        About
      </Link>
    </li>
  </ul>
);

export default Navigation;
