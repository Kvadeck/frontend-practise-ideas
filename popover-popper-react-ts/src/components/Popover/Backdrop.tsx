import React, {memo} from 'react';
import styles from './Backdrop.module.css'

type Props = {
    onClickHandler: ()=>void;
}

const Backdrop: React.FC<Props> = memo((props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClickHandler}/>
    );
})

export default Backdrop;