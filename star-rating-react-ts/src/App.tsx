import React, {useState} from 'react';
import './App.css';
import Stars from "./components/Stars/Stars";
import Selector from "./components/themeSelect/Selector";
import {getStarThemeFromLocalStorage} from "./helpers";

// TODO:

//  You can check stars from zero to five
//  Cursor pointer shows only on star.
//  Add animation when click on the star
//  Make preloader with animation
//  Hover works on outer square for star (sometimes its reproduced again)
//  Create star rating with ajax
//  Save checked stars rating in Firebase
//  Don't send request if previous state for stars aren't changed
//  Add animation for stars outer when stars appear after select it and loaded
//  Refactor the stars component
//  You can select few themes for stars and preloader
//  When page loads keep selected theme in localstorage
//  Deploy to Vercel

const App: React.FC = () => {

    const [themeToggle, setThemeToggle] = useState(getStarThemeFromLocalStorage());

    const setThemeToLocalStorageHandler = (value) => {
        localStorage.setItem("star-theme", value);
    }

    const changeThemeHandler = (state:number) => {
        setThemeToggle(state)
    }

    return (
        <div className="App">
            <div className="wrapper">
                <h1 className='title'>Star rating component</h1>
                <Selector setThemeToLocalStorage={setThemeToLocalStorageHandler} changeTheme={changeThemeHandler} />
                <Stars themeToggle={themeToggle}/>
            </div>
        </div>
    );
}

export default App;
