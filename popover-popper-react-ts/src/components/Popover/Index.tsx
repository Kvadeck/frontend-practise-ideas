import React, {memo, useContext} from 'react';
import ModalContext from "../../store/modal-context";
import PopoverInner from "./PopoverInner";

const Popover = memo(():JSX.Element => {

    const modalCtx = useContext(ModalContext);

    const {
        Joyce,
        Heartbreaker,
        modalOnConfirm,
        whichModalIsOpen
    } = modalCtx

    const [isSlide,,isFadeIn] = whichModalIsOpen;

    return (
        <>
            {isSlide &&
            <PopoverInner animation={'slide'} image={Joyce.image} onClose={modalOnConfirm}
                          text={Joyce.text} title={Joyce.title}/>}

            {isFadeIn &&
            <PopoverInner animation={'fadeIn'} image={Heartbreaker.image} onClose={modalOnConfirm} text={Heartbreaker.text}
                          title={Heartbreaker.title}/>}

        </>
    );
})

export default Popover;