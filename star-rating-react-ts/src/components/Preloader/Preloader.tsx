import React, {memo} from 'react';
import styles from './Preloader.module.css'

const Preloader = memo(function Preloader() {
    const classes:any = styles;
    return (
        <div className={classes['preloader-wrapper']}>
            <div className={`${classes.preloader} `}/>
        </div>

    )
})

export default Preloader;