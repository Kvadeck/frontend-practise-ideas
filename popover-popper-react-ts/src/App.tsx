import styles from './App.module.css'
import Button from "./components/UI/Button";
import React, {useState} from "react";
import Wrapper from "./components/UI/Wrapper";
import Popover from "./components/Popover/Index";
import {popoverData} from "./store/Index"
import Popper from "./components/Popper/Index";

// TODO:
//  Create popper with styles and adaptive. Click open popper
//  Create popper and popper with two different animations. Slide and FadeIn
//  Use context for to prevent props drilling

// DONE:
//  Styles for buttons
//  Create popover with styles and adaptive. Click open popover
//  Create popover and popper with two different animations. Slide and FadeIn

const App: React.FC = () => {

  const {popoverSlide, popoverFadeIn, popperSlide, popperFadeIn} = popoverData;

  const [isOpenPopoverSlide, setIsOpenPopoverSlide] = useState(false);
  const [isOpenPopoverFadeIn, setIsOpenPopoverFadeIn] = useState(false);

  const [isOpenPopperSlide, setIsOpenPopperSlide] = useState(false);
  const [isOpenPopperFadeIn, setIsOpenPopperFadeIn] = useState(false);

  const IsOpenPopoverSlideHandler = () => {
    setIsOpenPopoverSlide(!isOpenPopoverSlide);
  }

  const IsOpenPopoverFadeInHandler = () => {
    setIsOpenPopoverFadeIn(!isOpenPopoverFadeIn);
  }

  const IsOpenPopperSlideHandler = () => {
    setIsOpenPopperSlide(!isOpenPopperSlide);
  }

  const IsOpenPopperFadeInHandler = () => {
    setIsOpenPopperFadeIn(!isOpenPopperFadeIn);
  }

  return (
    <div className="App">

      {isOpenPopoverSlide && <Popover animation={'slide'} title={popoverSlide.title} text={popoverSlide.text} image={popoverSlide.image} onConfirm={IsOpenPopoverSlideHandler} />}
      {isOpenPopoverFadeIn && <Popover animation={'fadeIn'} title={popoverFadeIn.title} text={popoverFadeIn.text} image={popoverFadeIn.image} onConfirm={IsOpenPopoverFadeInHandler} />}

      <Wrapper wrapperName={'buttons-wrapper'}>
        <Button color={'primary'} name={'Popover Slide'} onClickHandler={IsOpenPopoverSlideHandler} />

        <div className={styles.popperWrapper}>
          {isOpenPopperSlide && <Popper animation={'slide'} title={popperSlide.title} text={popperSlide.text} image={popperSlide.image} onConfirm={IsOpenPopperSlideHandler} />}
          <Button color={'secondary'} name={'Popper Slide'} onClickHandler={IsOpenPopperSlideHandler} />
        </div>

        <Button color={'primary'} name={'Popover FadeIn'} onClickHandler={IsOpenPopoverFadeInHandler} />

        <div className={styles.popperWrapper}>
          {isOpenPopperFadeIn && <Popper animation={'fade'} title={popperFadeIn.title} text={popperFadeIn.text} image={popperFadeIn.image} onConfirm={IsOpenPopperFadeInHandler} />}
          <Button color={'secondary'} name={'Popper FadeIn'} onClickHandler={IsOpenPopperFadeInHandler} />
        </div>

      </Wrapper>
    </div>
  )
}

export default App
