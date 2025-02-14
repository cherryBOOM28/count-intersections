import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1>Добро пожаловать в систему бронирования!</h1>
            <Link to="/booking" className={styles.link}>Перейти к бронированию</Link>
        </div>
    );
};

export default HomePage;