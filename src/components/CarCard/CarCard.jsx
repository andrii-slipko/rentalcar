import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CarCard.module.css'

const CarCard = ({ car }) => {
  return (
    <div className={styles.card}>
     <img className={styles.img} src={car.img} alt={car.model} />
     <div className={styles.line}>
     <h2 className={styles.carTitle1}>{car.brand} <span className={styles.carTitle2}>{car.model}</span> , {car.year} </h2>
      <p className={styles.price}> ${car.rentalPrice}</p>
      </div>
      <p className={styles.description}> {car.address} | {car.rentalCompany} | {car.type} | {car.mileage} km</p>
      <Link to={`/catalog/${car.id}`}><button className={styles.btn}>Read More</button></Link>
    </div>
  );
};

export default CarCard;