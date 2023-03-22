import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Stars from "./components/Stars/Stars";
import {checkData} from "./helpers";

// TODO:
//  Create star rating with ajax and preloader ability
//  Save checked stars rating in Firebase
//  Don't send request if stars not changed
//  You can select few themes for stars

//  You can check stars from zero to five
//  Cursor pointer shows only on star.
//  Add animation when click on the star

const App: React.FC = () => {
    return (
        <div className="App">
            <Stars/>
        </div>
    );
}

export default App;
