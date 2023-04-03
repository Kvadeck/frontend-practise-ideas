import React, {memo, useContext} from 'react';
import PopoverPopperContext from "../../store/popover-popper-context";
import PopoverInner from "./PopoverInner";

const Popover: React.FC = memo(() => {

    const windowCtx = useContext(PopoverPopperContext);

    const {
        isOpenPopoverSlide,
        isOpenPopoverFadeIn,
        dataSlide,
        dataFadeIn,
        popoverSlide,
        popoverFadeIn
    } = windowCtx

    return (
        <>
            {isOpenPopoverSlide &&
            <PopoverInner animation={'slide'} image={dataSlide.image} onClose={popoverSlide}
                          text={dataSlide.text} title={dataSlide.title}/>}
            {isOpenPopoverFadeIn &&
            <PopoverInner animation={'fadeIn'} image={dataFadeIn.image} onClose={popoverFadeIn} text={dataFadeIn.text}
                          title={dataFadeIn.title}/>}
        </>
    );
})

export default Popover;