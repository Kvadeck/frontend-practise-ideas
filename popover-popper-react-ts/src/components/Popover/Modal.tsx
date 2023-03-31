import React, {memo} from 'react';
import styles from './Modal.module.css'
import Button from "../UI/Button";

type Props = {
    title:string;
    text:string;
    image:string;
    onConfirm: () => void;
    animation:string;
}

const Modal: React.FC<Props> = memo((props) => {
    return (
        <div className={`${styles.modal} ${styles['modal-'+props.animation]} `}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={styles.right}>
                    <span className={styles.title}>{props.title}&nbsp;&#8212;&nbsp;</span>
                    <div className={styles['text-wrapper']}>
                        <span className={styles.text} >{props.text}</span>
                    </div>
                </div>
            </div>
            <div className={styles['button-wrapper']}>
                <Button name={'Продолжить'} onClickHandler={props.onConfirm} color={'popover-color'} />
            </div>
        </div>
    );
})

export default Modal;