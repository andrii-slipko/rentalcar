import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CarDetailsPage.module.css'
import ContactForm from '../../components/ContactForm/ContactForm';



const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    axios.get(`https://car-rental-api.goit.global/cars/${id}`)
      .then(response => setCar(response.data))
      .catch(error => console.error(error));
  }, [id]);


  if (!car) return <p>Loading...</p>;

  return (
      <div className={styles.cont}>
        <div className={styles.box1}>
        <img className={styles.img} src={car.img} alt={car.model} />
        <ContactForm />
        </div>


        <div className={styles.box2}>

        <div className={styles.div1}>
        <h2 className={styles.title}>{car.brand} {car.model}, {car.year}</h2>
        <p className={styles.id}>Id:{car.id}</p> </div>

        <div className={styles.div2}>
        <p className={styles.desc}>{car.address}</p>
        <p className={styles.desc}> Mileage:{car.mileage} km</p>
        </div>

        <p className={styles.price}> {car.rentalPrice}$ </p>

        <p className={styles.description}>{car.description}</p>

        <div className={styles.descDiv}>
        <h3 className={styles.h3}>Rental conditions:</h3>
        <ul className={styles.list}>
    {car.rentalConditions.map((cond, idx) => (
      <li key={`cond-${idx}`} className={styles.desc}>{cond}</li>
    ))}
  </ul>
</div>

        <div className={styles.descDiv}>
        <h3 className={styles.h3}>Car Specifications:</h3>
        <ul className={styles.list}>
        <li className={styles.desc}> Year: {car.year} </li>
        <li className={styles.desc}> Type: {car.type} </li>
        <li className={styles.desc}> Fuel Consumption: {car.fuelConsumption} </li>
        <li className={styles.desc}> Engine Size: {car.engineSize} </li>
        </ul>
        </div>

        <div className={styles.descDiv}>
        <h3 className={styles.h3}>Accessories and functionalities:</h3>
        <ul className={styles.list}>
    {car.accessories.map((item, idx) => (
      <li key={`acc-${idx}`} className={styles.desc}>{item}</li>
    ))}
  </ul>
  <ul className={styles.list}>
    {car.functionalities.map((item, idx) => (
      <li key={`fun-${idx}`} className={styles.desc}>{item}</li>
    ))}
  </ul>
        </div>
        </div>


        
      </div>
  );
};

export default CarDetailsPage;