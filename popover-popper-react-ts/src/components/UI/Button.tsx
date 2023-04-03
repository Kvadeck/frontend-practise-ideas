import React, {memo} from 'react';
import styles from './Button.module.css'

type Props = {
    name: string;
    onClickHandler: ()=>void;
    color: string;
    isDisabled?: boolean;
}

const Button: React.FC<Props> = memo((props) => {
    return (
        <>
            <button disabled={props.isDisabled} className={`${styles.button} ${styles[props.color]}`} onClick={props.onClickHandler}>
                {props.name}
            </button>
        </>
    );
})

export default Button;

// (props.isDisabled) ? 'disabled' : ''