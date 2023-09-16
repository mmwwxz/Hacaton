import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroMolecules.module.scss';

export const HeroMolecules: FC = () => {
  return (
    <div className={styles.parallaxSection}>
      <p className={styles.parallaxSectionText}>
        Mot<span className={styles.parallaxSectionTextSubtitle}>her Ea</span>rth
      </p>
      <p className={styles.subText}>We help you live carbon neutral</p>
      <Link to='/'>
        <button className={styles.heroBtn}>Calculate Impact</button>
      </Link>
    </div>
  );
};
