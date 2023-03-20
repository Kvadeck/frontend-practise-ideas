import React from 'react';
import './App.css';
import Stars from "./components/Stars/Stars";

// TODO:
//  Create star rating with ajax and preloader ability.
//  You can check stars from zero to ten.
//  Save checked stars rating in session storage.
//  You can select few themes for stars.

function App() {
  return (
    <div className="App">
      <Stars/>
    </div>
  );
}

export default App;
