import React from 'react';
import styles from './Selector.module.css'

const Selector = () => {
    return (
        <div className={styles['theme-wrapper']}>
            <p className={styles['theme-title']}>Theme:</p>
            <label className={styles['theme-label']} htmlFor="">
                <select required className={styles['theme-selector']}  name="theme-selector">
                    <option value="" disabled selected>Select option</option>
                    <option value="">Gold</option>
                    <option value="">Red</option>
                </select>
                <svg className={styles['arrow-down']}>
                    <use xlinkHref="#select-arrow-down"/>
                </svg>
            </label>

            <svg className={styles['sprites']}>
                <symbol id="select-arrow-down" viewBox="0 0 10 6">
                    <polyline points="1 1 5 5 9 1"/>
                </symbol>
            </svg>

        </div>
    );
};

export default Selector;