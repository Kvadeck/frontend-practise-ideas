import Button from "./components/UI/Button";
import React, {useContext} from "react";
import Wrapper from "./components/UI/Wrapper";
import Popover from "./components/Popover/Index";
import Popper from "./components/Popper/Index";
import PopoverPopperContext from "./store/popover-popper-context";

// TODO:

// DONE:
//  Deploy to Vercel
//  Use context for to prevent props drilling
//  Create popper and popper with two different animations. Slide and FadeIn
//  Create popper with styles and adaptive. Click open popper
//  If one is open cant open others while one is open
//  Styles for buttons
//  Create popover with styles and adaptive. Click open popover
//  Create popover and popper with two different animations. Slide and FadeIn
//  Image shows with delay. Because when processing dom insert image gets again.

const App: React.FC = () => {

    const windowCtx = useContext(PopoverPopperContext);

    const {
        popoverSlide,
        popoverFadeIn,
        popperScale,
        popperFadeIn,
        isBtnDisabled,
        isOpenPopperScale,
        isOpenPopperFadeIn,
    } = windowCtx

    return (
        <div className="App">

            <Popover/>

            <Wrapper wrapperName={'buttons-wrapper'}>
                <Button isDisabled={isBtnDisabled} onClickHandler={popoverSlide} color={'primary'}
                        name={'Popover Slide'}/>

                <Wrapper wrapperName={'popper-wrapper'}>
                  {isOpenPopperScale && <Popper animation={'scale'} />}
                  <Button isDisabled={isBtnDisabled} color={'secondary'} name={'Popper Scale'} onClickHandler={popperScale}/>
                </Wrapper>

                <Button isDisabled={isBtnDisabled} onClickHandler={popoverFadeIn} color={'primary'}
                        name={'Popover FadeIn'}/>

                <Wrapper wrapperName={'popper-wrapper'}>
                    {isOpenPopperFadeIn && <Popper animation={'fadeIn'} />}
                    <Button isDisabled={isBtnDisabled} color={'secondary'} name={'Popper FadeIn'} onClickHandler={popperFadeIn}/>
                </Wrapper>

            </Wrapper>
        </div>
    )
}

export default App
