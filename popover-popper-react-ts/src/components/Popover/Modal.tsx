import React from 'react';
import styles from './Modal.module.css'
import {preloadImage} from "../../api/image";
import ModalWrapper from "../UI/ModalWrapper";

interface Props {
    title:string;
    text:string;
    image:string;
    onClose: () => void;
    animation:string;
}

const Modal = (props:Props):JSX.Element => {

    const {isLoaded} = preloadImage();

    return (
        <div className={`${styles.modal} ${'modal-'+props.animation} `}>

            <ModalWrapper styles={styles} image={props.image} title={props.title} text={props.text} />

        </div>
    );
}

export default Modal;