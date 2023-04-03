import React from 'react';

interface Data {
    title: string;
    text: string;
    image: string;
}

interface ContextProps {

    isOpenPopoverSlide: boolean,
    isOpenPopoverFadeIn: boolean,
    isOpenPopperScale: boolean,
    isOpenPopperFadeIn: boolean,
    isBtnDisabled: boolean,

    popoverSlide: () => void,
    popoverFadeIn: () => void,
    popperScale: () => void,
    popperFadeIn: () => void,

    dataSlide: Data;
    dataFadeIn: Data;

}

const PopoverPopperContext = React.createContext<ContextProps>({

    isOpenPopoverSlide: false,
    isOpenPopoverFadeIn: false,
    isOpenPopperScale: false,
    isOpenPopperFadeIn: false,
    isBtnDisabled: false,

    popoverSlide: () => {
    },
    popoverFadeIn: () => {
    },
    popperScale: () => {
    },
    popperFadeIn: () => {
    },

    dataSlide: {
        title: '',
        text: '',
        image: '',
    },

    dataFadeIn: {
        title: '',
        text: '',
        image: '',
    },

});

export default PopoverPopperContext;