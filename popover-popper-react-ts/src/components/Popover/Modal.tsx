import React, {useEffect, useRef} from 'react';
import styles from './Modal.module.css'
import Button from "../UI/Button";
import {preloadImage} from "../../api/image";

type Props = {
    title:string;
    text:string;
    image:string;
    onClose: () => void;
    animation:string;
}

const Modal: React.FC<Props> = (props) => {

    const {isLoaded, error, checkImageIsLoaded} = preloadImage();
    const image = useRef(null);

    useEffect(() => {
        checkImageIsLoaded(props.image, image).then(() =>{})
    }, [])

    return (
        <div className={`${styles.modal} ${'modal-'+props.animation} `}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    {error
                        ? <p className={'text-error'}>Failed to fetch image!</p>
                        : <img style={ !isLoaded ? {visibility:'visible', transform: "scale(1)"} : {}} ref={image} className={'modal-image'} src={props.image} alt={props.text} />
                    }
                </div>
                <div style={ !isLoaded ? { visibility:'visible', opacity: "1"} : {}}  className={styles.right}>
                    <span className={styles.title}>{props.title}&nbsp;&#8212;&nbsp;</span>
                    <div className={styles['text-wrapper']}>
                        <span className={styles.text} >{props.text}</span>
                    </div>
                </div>
            </div>
            <div style={ !isLoaded ? { visibility:'visible', opacity: "1"} : {}} className={styles['button-wrapper']}>
                <Button name={'Продолжить'} onClickHandler={props.onClose} color={'popover-color'} />
            </div>
        </div>
    );
}

export default Modal;