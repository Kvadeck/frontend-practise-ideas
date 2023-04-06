import React from 'react';

interface Data {
    title: string;
    text: string;
    image: string;
}

interface ContextProps {
    whichModalIsOpen: boolean[],
    isBtnDisabled: boolean,
    modalOpen: (id: number | undefined) => void,
    modalOnConfirm: () => void,
    Joyce: Data;
    Heartbreaker: Data;
}

const ModalContext = React.createContext<ContextProps>({
    whichModalIsOpen: [],
    isBtnDisabled: false,
    modalOpen: (id) => {},
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