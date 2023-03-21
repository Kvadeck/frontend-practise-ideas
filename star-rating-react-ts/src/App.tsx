import React from 'react';
import './App.css';
import Stars from "./components/Stars/Stars";

// TODO:
//  Create star rating with ajax and preloader ability.
//  You can check stars from zero to five.
//  Save checked stars rating in Firebase
//  You can select few themes for stars.
//  Add animation when click on the star.

//  Cursor pointer shows only on star.

const App: React.FC = () => {
  return (
    <div className="App">
      <Stars/>
    </div>
  );
}

export default App;
