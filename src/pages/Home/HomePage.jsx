import { Link } from 'react-router-dom';
import styles from './Homepage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
        <h1 className={styles.title}>Find your perfect rental car</h1>
        <p className={styles.text}>Reliable and budget-friendly rentals for any journey</p>
        <Link to="/catalog"><button className={styles.btn}> View Catalog </button></Link>
    </div>
  );
};

export default HomePage;