import React, {memo, useContext} from 'react';
import PopperInner from "./PopperInner";
import PopoverPopperContext from "../../store/popover-popper-context";


type Props = {
    animation: string;
}

const Popper: React.FC<Props> = memo((props) => {

    const windowCtx = useContext(PopoverPopperContext);

    const {
        dataSlide,
        dataFadeIn,
        popperScale,
        popperFadeIn
    } = windowCtx

    let content;

    if (props.animation === 'scale') {
        content =
            <PopperInner animation={props.animation} image={dataSlide.image} onClose={popperScale} text={dataSlide.text}
                         title={dataSlide.title}/>
    }

    if (props.animation === 'fadeIn') {
        content = <PopperInner animation={props.animation} image={dataFadeIn.image} onClose={popperFadeIn}
                               text={dataFadeIn.text} title={dataFadeIn.title}/>
    }

    return (
        <>
            {content}
        </>
    );
})

export default Popper;