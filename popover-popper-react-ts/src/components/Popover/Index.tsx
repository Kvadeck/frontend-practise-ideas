import React from 'react';
import Backdrop from "./Backdrop";
import Modal from './Modal'
import ReactDOM from 'react-dom';

type Props = {
    title:string;
    text:string;
    image:string;
    onConfirm: () => void;
}

function Popover(props:Props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClickHandler={props.onConfirm}/>,  document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(<Modal title={props.title} text={props.text} image={props.image}/>,  document.getElementById('modal-root') as HTMLElement)}
        </>
    );
}

export default Popover;