import Button from "./components/UI/Button";
import React, {useContext} from "react";
import Wrapper from "./components/UI/Wrapper";
import Popover from "./components/Popover/Index";
import Popper from "./components/Popper/Index";
import ModalContext from "./store/modal-context";

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

const App = ():JSX.Element => {

    const modalCtx = useContext(ModalContext);

    const {
        isBtnDisabled,
        modalOpen,
        whichModalIsOpen
    } = modalCtx

    const [,isScale,,isFadeIn] = whichModalIsOpen;

    return (
        <div className="App">

            <Popover/>

            <Wrapper wrapperName={'buttons-wrapper'}>
                <Button isDisabled={isBtnDisabled} modalNumber={0} onClickHandler={modalOpen} color={'primary'}
                        name={'Popover Slide'}/>

                <Wrapper wrapperName={'popper-wrapper'}>
                  {isScale && <Popper animation={'scale'} />}
                  <Button modalNumber={1} isDisabled={isBtnDisabled} color={'secondary'} name={'Popper Scale'} onClickHandler={modalOpen}/>
                </Wrapper>

                <Button isDisabled={isBtnDisabled} modalNumber={2} onClickHandler={modalOpen} color={'primary'}
                        name={'Popover FadeIn'}/>

                <Wrapper wrapperName={'popper-wrapper'}>
                    {isFadeIn && <Popper animation={'fadeIn'} />}
                    <Button modalNumber={3} isDisabled={isBtnDisabled} color={'secondary'} name={'Popper FadeIn'} onClickHandler={modalOpen}/>
                </Wrapper>

            </Wrapper>
        </div>
    )
}

export default App
