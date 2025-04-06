import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../redux/carsSlice';
import CarCard from '../../components/CarCard/CarCard';
import Filter from '../../components/Filter/Filter';
import styles from './CatalogPage.module.css'

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { cars, status, error } = useSelector((state) => state.cars);
  const { filteredCars } = useSelector((state) => state.filters);
  
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 15; 

  useEffect(() => {
    dispatch(loadCars({ page, limit })); 
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setLoading(true);  
    setPage(prev => prev + 1);  
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={styles.catalog}>
      <div className={styles.filters}>
        <Filter />
      </div>
      <div className={styles.carList}>
        {Array.isArray(filteredCars) && filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p>No cars found</p>
        )}
      </div>

      
      <div className={styles.loadMoreContainer}>
        <button onClick={handleLoadMore} disabled={loading} className={styles.btn}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default CatalogPage;
