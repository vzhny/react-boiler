import React from 'react';
import PropTypes from 'prop-types';
import { heading } from './Heading.module.scss';

const Heading = ({ message }) => <h1 className={heading}>{message}</h1>;

Heading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Heading;
