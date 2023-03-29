import React from 'react';
import styles from './Button.module.css'

type Props = {
    name: string;
    onClickHandler: ()=>void;
    color: string;
}

function Button(props:Props) {
    return (
        <>
            <button className={`${styles.button} ${styles[props.color]}`} onClick={props.onClickHandler}>
                {props.name}
            </button>
        </>
    );
}

export default Button;