import React from 'react';
import ContextObj from "../models/Context";

const ModalContext = React.createContext<ContextObj>({
    whichModalIsOpen: [],
    isBtnDisabled: false,
    modalOpen: (id:number | undefined) => {},
    modalOnConfirm: () => {},
    Joyce: {
        title: '',
        text: '',
        image: '',
    },
    Heartbreaker: {
        title: '',
        text: '',
        image: '',
    },
});

export default ModalContext;