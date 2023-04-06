import React, {memo} from 'react';
import styles from './Backdrop.module.css'

interface Props {
    onClickHandler: () => void;
}

const Backdrop= memo((props:Props): JSX.Element => {
    return (
        <div className={styles.backdrop} onClick={props.onClickHandler}/>
    );
})

export default Backdrop;