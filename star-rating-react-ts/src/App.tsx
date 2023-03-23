import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Stars from "./components/Stars/Stars";
import {checkData} from "./helpers";

// TODO:
//  Don't send request if previous state for stars aren't changed
//  You can select few themes for stars and preloader

//  You can check stars from zero to five
//  Cursor pointer shows only on star.
//  Add animation when click on the star
//  Make preloader with animation
//  Hover works on outer square for star (sometimes its reproduced again)
//  Create star rating with ajax
//  Save checked stars rating in Firebase

const App: React.FC = () => {
    return (
        <div className="App">
            <Stars/>
        </div>
    );
}

export default App;
