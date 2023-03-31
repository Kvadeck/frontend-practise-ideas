import React, {memo} from 'react';
import Backdrop from "./Backdrop";
import Modal from './Modal'
import ReactDOM from 'react-dom';

type Props = {
    title:string;
    text:string;
    image:string;
    onConfirm: () => void;
    animation:string;
}

const Popover: React.FC<Props> = memo((props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClickHandler={props.onConfirm}/>,  document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(<Modal animation={props.animation} title={props.title} text={props.text} onConfirm={props.onConfirm} image={props.image}/>,  document.getElementById('modal-root') as HTMLElement)}
        </>
    );
})

export default Popover;