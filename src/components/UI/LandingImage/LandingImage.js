import React from 'react';
import mapImage from '@/images/map.svg';
import styles from './LandingImage.module.scss';

const LandingImage = props => (
  <div className={styles.LandingImage}>
    <img className={styles.Image} src={mapImage} alt="Map" />
  </div>
);

export default LandingImage;
