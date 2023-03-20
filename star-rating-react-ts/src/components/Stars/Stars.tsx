import React from 'react';
import styles from './Stars.module.css'
import Star from "./Star";

const Stars: React.FC = () => {

    let classes: any = styles;

    return (
        <div className={classes.stars}>
            <h1>Star rating component</h1>
            <Star/>
        </div>
    );

};

export default Stars;