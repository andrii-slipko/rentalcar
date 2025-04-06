import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../../redux/carsSlice';
import CarCard from '../../components/CarCard/CarCard';
import Filter from '../../components/Filter/Filter';
import styles from './CatalogPage.module.css'

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { cars, status, error } = useSelector((state) => state.cars);
  const { filteredCars } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(loadCars());  
  }, [dispatch]);

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
    </div>
  );
};

export default CatalogPage;