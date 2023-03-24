import React from 'react';
import './App.css';
import Stars from "./components/Stars/Stars";

// TODO:
//  Add animation for stars outer when stars appear after select it
//  You can select few themes for stars and preloader
//  Add context for stars (optional)

//  You can check stars from zero to five
//  Cursor pointer shows only on star.
//  Add animation when click on the star
//  Make preloader with animation
//  Hover works on outer square for star (sometimes its reproduced again)
//  Create star rating with ajax
//  Save checked stars rating in Firebase
//  Don't send request if previous state for stars aren't changed


const App: React.FC = () => {
    return (
        <div className="App">
            <Stars/>
        </div>
    );
}

export default App;
