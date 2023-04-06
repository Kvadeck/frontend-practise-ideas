import React, {memo, useEffect, useRef} from 'react';
import styles from './Index.module.css'
import Button from "../UI/Button";
import {preloadImage} from "../../api/image";
import ModalWrapper from "../UI/ModalWrapper";


interface Props {
    title:string;
    text:string;
    image:string;
    onClose: () => void;
    animation:string;
}

const PopperInner = memo((props:Props):JSX.Element => {

    const {isLoaded} = preloadImage();

    return (
        <div className={`${styles.popper} ${'popper-'+props.animation}`}>
            <ModalWrapper styles={styles} image={props.image} title={props.title} text={props.text}/>
            <div style={ !isLoaded ? { visibility:'visible', opacity: "1"} : {}} className={styles['button-wrapper']}>
                <Button name={'Продолжить'} onClickHandler={props.onClose} color={'popover-color'} />
            </div>
        </div>
    );
})

export default PopperInner;