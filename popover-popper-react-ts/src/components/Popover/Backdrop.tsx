import React from 'react';
import styles from './Backdrop.module.css'

type Props = {
    onClickHandler: ()=>void;
}

function Backdrop(props:Props) {
    return (
        <div className={styles.backdrop} onClick={props.onClickHandler}/>
    );
}

export default Backdrop;