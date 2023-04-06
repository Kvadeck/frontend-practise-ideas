import React, {memo} from 'react';
import styles from './Button.module.css'

interface Props {
    name: string;
    onClickHandler: (num: number | undefined) => void;
    color: string;
    isDisabled?: boolean;
    modalNumber?: number;
}

const Button = memo((props: Props): JSX.Element => {
    return (
        <>
            <button disabled={props.isDisabled} className={`${styles.button} ${styles[props.color]}`}
                    onClick={ () => { props.onClickHandler(props.modalNumber)}}>
                {props.name}
            </button>
        </>
    );
})

export default Button;