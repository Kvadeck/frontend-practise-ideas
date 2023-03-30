import './App.css'
import Button from "./components/UI/Button";
import {useState} from "react";
import Wrapper from "./components/UI/Wrapper";
import Popover from "./components/Popover/Index";
import {popoverData} from "./store/Index"

// TODO:
//  Create popover with styles and adaptive. Click open popover
//  Create popper with styles and adaptive. Click open popper
//  Create popover and popper with two different animations. Slide and FadeIn
//  Create popper and popper with two different animations. Slide and FadeIn
//  Use context for to prevent props drilling

// DONE:
//  Styles for buttons

function App() {

  const {popoverSlide} = popoverData;

  const [isOpenPopoverSlide, setIsOpenPopoverSlide] = useState(false);

  const IsOpenPopoverSlideHandler = () => {
    setIsOpenPopoverSlide(!isOpenPopoverSlide);
  }


  return (
    <div className="App">
      <Popover title={popoverSlide.title} text={popoverSlide.text} image={popoverSlide.image} onConfirm={()=>{}} />
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
