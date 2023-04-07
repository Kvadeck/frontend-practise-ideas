import React, {useEffect, useState} from "react";
import {windowsMockups} from "./windowsMockups"
import ModalContext from "./modal-context";
import ContextObj from "../models/Context";

interface Props {
    children: React.ReactNode;
}

const PopoverPopperProvider = (props: Props) => {

    const {Joyce, Headbreaker} = windowsMockups;

    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [whichModalIsOpen, setWhichModalIsOpen] = useState<boolean[]>([]);

    const modalOpenHandler = (id?: number) => {
        const modalOpen: boolean[] = [];

        if (id !== undefined) {
            modalOpen[id] = true;
        }
        setWhichModalIsOpen(modalOpen);
    }

    const modalOnConfirm = () => {
        setWhichModalIsOpen([])
        setIsBtnDisabled(false)
    }

    useEffect(() => {
        if (whichModalIsOpen.includes(true)) {
            setIsBtnDisabled(true)
        }
    }, [whichModalIsOpen, isBtnDisabled])

    const modalContext: ContextObj = {
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