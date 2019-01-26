import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ message }) => <h1 className={styles.Heading}>{message}</h1>;

Heading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Heading;
