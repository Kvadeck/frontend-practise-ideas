import React from 'react';
import styles from './Star.module.css'

const Star = () => {

    let classes: any = styles;

    return (
        <div className={classes.star}/>
    );
};

export default Star;