import React from 'react';
import styles from './Star.module.css'

const Star: React.FC<{ onStarClick: (e: React.MouseEvent) => void, activeStars: Boolean, id: number }> = (props) => {

    return (
        <div
            id={props.id.toString()}
            className={`${styles['star']} ${props.activeStars ? styles['star-selected'] : styles['star-not-selected']}`}
            onClick={(e) => props.onStarClick(e)}
        >
            <span className={styles['top-left-top-square-line']}/>
            <span className={styles['top-left-middle-square-line']}/>
            <span className={styles['top-right-top-square-line']}/>
            <span className={styles['top-right-middle-square-line']}/>

            <span className={styles['bottom-left-top-square-line']}/>
            <span className={styles['bottom-left-bottom-square-line']}/>
            <span className={styles['bottom-right-top-square-line']}/>
            <span className={styles['bottom-right-bottom-square-line']}/>

            <span className={styles['bottom-left-square-line']}/>
            <span className={styles['bottom-right-square-line']}/>
        </div>
    );
};

export default Star;