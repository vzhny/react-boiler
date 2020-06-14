import * as React from 'react';
import styles from './Heading.module.scss';

export interface HeadingProps {
  message: string;
}

const Heading: React.FC<HeadingProps> = ({ message }: HeadingProps) => <h1 className={styles.heading}>{message}</h1>;

export default Heading;
