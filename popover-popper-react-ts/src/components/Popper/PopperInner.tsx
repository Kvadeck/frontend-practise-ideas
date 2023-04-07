import React, {memo} from 'react';
import styles from './Index.module.css'
import ModalWrapper from "../UI/ModalWrapper";


interface Props {
    title: string;
    text: string;
    image: string;
    onClose: () => void;
    animation: string;
}

const PopperInner = memo((props: Props): JSX.Element => {

    return (
        <div className={`${styles.popper} ${'popper-' + props.animation}`}>
            <ModalWrapper styles={styles} image={props.image} title={props.title} text={props.text}/>
        </div>
    );
})

export default PopperInner;