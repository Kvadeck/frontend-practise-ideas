import React, {useState, useEffect} from "react";
import {windowsMockups} from "./windowsMockups"
import PopoverPopperContext from "./popover-popper-context";

type Props = {
    children: React.ReactNode;
}

const PopoverPopperProvider = (props:Props) => {

    const {Joyce, Headbreaker} = windowsMockups;

    const [isOpenPopoverSlide, setIsOpenPopoverSlide] = useState(false);
    const [isOpenPopoverFadeIn, setIsOpenPopoverFadeIn] = useState(false);

    const [isOpenPopperScale, setIsOpenPopperScale] = useState(false);
    const [isOpenPopperFadeIn, setIsOpenPopperFadeIn] = useState(false);

    const [isBtnDisabled, setIsBtnDisabled] = useState(false)

    const PopoverSlideHandler = () => {
        setIsOpenPopoverSlide(!isOpenPopoverSlide);
    }

    const PopoverFadeInHandler = () => {
        setIsOpenPopoverFadeIn(!isOpenPopoverFadeIn);
    }

    const PopperScaleHandler = () => {
        setIsOpenPopperScale(!isOpenPopperScale);
    }

    const PopperFadeInHandler = () => {
        setIsOpenPopperFadeIn(!isOpenPopperFadeIn);
    }

    useEffect(() => {

      if(isOpenPopoverSlide || isOpenPopoverFadeIn || isOpenPopperScale || isOpenPopperFadeIn) {
        setIsBtnDisabled(true)
      } else {
        setIsBtnDisabled(false)
      }

    }, [isOpenPopoverSlide, isOpenPopoverFadeIn, isOpenPopperScale, isOpenPopperFadeIn])

    const popoverPopperContext = {

        isOpenPopoverSlide: isOpenPopoverSlide,
        isOpenPopoverFadeIn: isOpenPopoverFadeIn,
        isOpenPopperScale: isOpenPopperScale,
        isOpenPopperFadeIn: isOpenPopperFadeIn,
        isBtnDisabled: isBtnDisabled,

        popoverSlide: PopoverSlideHandler,
        popoverFadeIn: PopoverFadeInHandler,
        popperScale: PopperScaleHandler,
        popperFadeIn: PopperFadeInHandler,

        dataSlide: Joyce,
        dataFadeIn: Headbreaker,

    };

    return (
        <PopoverPopperContext.Provider value={popoverPopperContext}>
            {props.children}
        </PopoverPopperContext.Provider>
    );
};

export default PopoverPopperProvider;