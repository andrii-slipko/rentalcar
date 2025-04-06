import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css'
import logo from '../../assets/Logo.svg';

const Layout = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navigation}>
        <Link to="/" className={styles.logo}>
  <img src={logo} alt="Logo" width="104" height="16" className={styles.logoSvg} />
</Link>
        <div className={styles.navBox}>
          <Link to="/"className={styles.nav}>Home</Link>
          <Link to="/catalog" className={styles.nav}>Catalog</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;