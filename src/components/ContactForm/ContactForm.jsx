import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.h3}> Book your car now </h3>
        <p className={styles.text}>Stay connected! We are always ready to help you.</p>
      
        
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder='Name*'
        />
      

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder='Email*'
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder='Comment*'
        />

      <button type="submit" className={styles.btn}>Send</button>
    </form>
  );
};

export default ContactForm;
