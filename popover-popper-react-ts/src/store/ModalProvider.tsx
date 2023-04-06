import React, {useState, useEffect} from "react";
import {windowsMockups} from "./windowsMockups"
import ModalContext from "./modal-context";

interface Props {
    children: React.ReactNode;
}

const PopoverPopperProvider = (props: Props) => {

    const {Joyce, Headbreaker} = windowsMockups;

    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [whichModalIsOpen, setWhichModalIsOpen] = useState([]);

    const modalOpenHandler = (id: number) => {
        // TODO: Refactor modalOpen:any
        const modalOpen:any = [];
        modalOpen[id] = true;
        setWhichModalIsOpen(modalOpen);
    }

    const modalOnConfirm = () => {
        setWhichModalIsOpen([])
    }

    // useEffect(() => {
    //
    //   if(isOpenPopoverSlide || isOpenPopoverFadeIn || isOpenPopperScale || isOpenPopperFadeIn) {
    //     setIsBtnDisabled(true)
    //   } else {
    //     setIsBtnDisabled(false)
    //   }
    //
    // }, [isOpenPopoverSlide, isOpenPopoverFadeIn, isOpenPopperScale, isOpenPopperFadeIn])

    const modalContext = {
        whichModalIsOpen: whichModalIsOpen,
        isBtnDisabled: isBtnDisabled,
        modalOpen: modalOpenHandler,
        modalOnConfirm: modalOnConfirm,
        Joyce: Joyce,
        Heartbreaker: Headbreaker,
    };

    return (
        <ModalContext.Provider value={modalContext}>
            {props.children}
        </ModalContext.Provider>
    );
};

export default PopoverPopperProvider;