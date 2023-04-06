import Modal from './Modal'
import ReactDOM from 'react-dom';
import React, {memo} from "react";
import Backdrop from './Backdrop'

interface Props {
    animation:string,
    title:string,
    text: string,
    onClose: () => void
    image: string
}

const PopoverInner = memo((props:Props):JSX.Element => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop
                onClickHandler={props.onClose}/>, document.getElementById('backdrop-root') as HTMLElement)}

            {ReactDOM.createPortal(<Modal animation={props.animation} title={props.title} text={props.text}
                                          onClose={props.onClose}
                                          image={props.image}/>, document.getElementById('modal-root') as HTMLElement)}
        </>
    );
})

export default PopoverInner;