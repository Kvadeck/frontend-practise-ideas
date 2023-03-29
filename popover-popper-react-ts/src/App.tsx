import './App.css'
import Button from "./components/UI/Button";
import {useState} from "react";
import Wrapper from "./components/UI/Wrapper";

// TODO:
//  Create popover with styles and adaptive. Click open popover.
//  Create popper with styles and adaptive. Click open popper.
//  Create popover and popper with two different animations. Slide and FadeIn.

// DONE:
//  Styles for buttons

function App() {

  const [isOpenPopoverSlide, setIsOpenPopoverSlide] = useState(false)

  const IsOpenPopoverSlideHandler = () => {
    setIsOpenPopoverSlide(!isOpenPopoverSlide)
  }

  return (
    <div className="App">
      <Wrapper wrapperName={'buttons-wrapper'}>
        <Button color={'primary'} name={'Popover Slide'} onClickHandler={IsOpenPopoverSlideHandler} />
        <Button color={'secondary'} name={'Popper Slide'} onClickHandler={IsOpenPopoverSlideHandler} />
        <Button color={'primary'} name={'Popover FadeIn'} onClickHandler={IsOpenPopoverSlideHandler} />
        <Button color={'secondary'} name={'Popper FadeIn'} onClickHandler={IsOpenPopoverSlideHandler} />
      </Wrapper>
    </div>
  )
}

export default App
