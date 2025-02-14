import React, { useState } from 'react';
import styles from './Filters.module.css'

const Filters = ({ onFilterChange }) => {
    const [bedrooms, setBedrooms] = useState('')
    const [price, setPrice] = useState('')
    const [view, setView] = useState('')


    const filterChange = () => {
        onFilterChange({ bedrooms, price, view })
    }


    return (
        <div className={styles.container}>
            <h3>Фильтры</h3>

            <label>
                Количество спален:
                <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
                    <option value="">Любое</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3+</option>
                </select>
            </label>

            <label>
                Максимальная цена:
                <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Введите цену"
                />
            </label>

            <label>
                Вид:
                <select value={view} onChange={(e) => setView(e.target.value)}>
                <option value="">Любой</option>
                <option value="ocean">Океан</option>
                <option value="mountains">Горы</option>
                <option value="city">Город</option>
                </select>
            </label>

            <button className={styles.btn} onClick={filterChange}>Применить</button>
        </div>
    );
};

export default Filters;