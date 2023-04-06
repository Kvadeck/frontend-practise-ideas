import React, {memo, useContext} from 'react';
import PopperInner from "./PopperInner";
import ModalContext from "../../store/modal-context";


interface Props {
    animation: 'scale' | 'fadeIn';
}

const Popper = memo((props:Props):JSX.Element => {

    const modalCtx = useContext(ModalContext);

    const {
        Joyce,
        Heartbreaker,
        modalOnConfirm,
    } = modalCtx;

    let content;

    if (props.animation === 'scale') {
        content =
            <PopperInner animation={props.animation} image={Joyce.image} onClose={modalOnConfirm} text={Joyce.text}
                         title={Joyce.title}/>
    }

    if (props.animation === 'fadeIn') {
        content = <PopperInner animation={props.animation} image={Heartbreaker.image} onClose={modalOnConfirm}
                               text={Heartbreaker.text} title={Heartbreaker.title}/>
    }

    return (
        <>
            {content}
        </>
    );
})

export default Popper;