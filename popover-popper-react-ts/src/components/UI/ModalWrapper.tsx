import React, {useEffect, useRef} from "react";
import {preloadImage} from "../../api/image";

interface Props {
    styles:any;
    image:string;
    title:string;
    text:string;
}

const ModalWrapper = (props:Props):JSX.Element => {

    const {isLoaded, error, checkImageIsLoaded} = preloadImage();
    const image = useRef(null);

    const styles:any = props.styles;

    useEffect(() => {
        checkImageIsLoaded(props.image, image).then(() =>{})
    }, [])

    return (
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
    );
}

export default ModalWrapper;