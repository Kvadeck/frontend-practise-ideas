import React, {memo} from 'react';
import styles from './Preloader.module.css'

type Props = {
    themeToggle: string|number;
}

const Preloader = memo((props:Props) => {
    const classes:any = styles;
    return (
        <div className={`${classes['preloader-wrapper']} ${(props.themeToggle) ? styles['theme-red'] : styles['theme-gold'] }`}>
            <div className={`${classes.preloader}`}/>
        </div>

    )
})

export default Preloader;