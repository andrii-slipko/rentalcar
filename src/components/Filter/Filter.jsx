import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../../redux/filtersSlice";
import { loadCars } from '../../redux/carsSlice'
import styles from './Filter.module.css'

const Filter = () => {
  const { brand, price, mileage } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "mileageFrom" || name === "mileageTo") {
      dispatch(updateFilters({
        name: "mileage",
        value: {
          [name === "mileageFrom" ? "from" : "to"]: value,
        },
      }));
    } else {
      dispatch(updateFilters({ name, value }));
    }
  };

  const handleSearchClick = () => {
    dispatch(loadCars());  
  };

  return (
    <div className={styles.filters}>
        <div className={styles.box}>
        <label htmlFor="brand" className={styles.placeholder}>Car brand</label>
      <select className={styles.select} name="brand" value={brand} onChange={handleInputChange}>
        <option value="">Choose a brand</option>
        <option value="Aston Martin">Aston Martin</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Bentley">Bentley</option>
        <option value="Buick">Buick</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Crysler">Crysler</option>
        <option value="GMC">GMC</option>
        <option value="HUMMER">HUMMER</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Kia">Kia</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Land Rover">Land Rover</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Lincoln">Lincoln</option>
        <option value="MINI">MINI</option>
        <option value="Mercedes-Benz">Mercedes-Benz</option>
        <option value="Mitsubishi">Mitsubishi</option>
        <option value="Nissan">Nissan</option>
        <option value="Pontiac">Pontiac</option>
        <option value="Subaru">Subaru</option>
        <option value="Volvo">Volvo</option>
        
      </select>
      </div>

      <div className={styles.box}>
      <label htmlFor="brand" className={styles.placeholder}>Price/1 hour</label>
      <select className={styles.select} name="price" value={price} onChange={handleInputChange}>
        <option value="">Choose a price</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
      </select>
      </div>

      <div className={styles.box}>
      <label htmlFor="brand" className={styles.placeholder}>Car mileage/km</label>
      <div className={styles.mileage}>
      <input
      className={styles.mileageL}
        type="number"
        name="mileageFrom"
        value={mileage.from || ""}
        onChange={handleInputChange}
        placeholder="From"
      />
      

      <input
      className={styles.mileageR}
        type="number"
        name="mileageTo"
        value={mileage.to || ""}
        onChange={handleInputChange}
        placeholder="To"
      />
      </div>
</div>
      <button onClick={handleSearchClick} className={styles.btn}>Search</button>
    </div>
  );
};

export default Filter;