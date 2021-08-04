
import React  from 'react';
import Profile from "./profile/Profile"
import Photo1 from "./profile/photo1.jpg"


function App() {
  return (
    <div className="App">
      <Profile fullName="Kochbati Rabiaa"
        bio="A master degree in analytical chemistry from the University of Tunis: Faculty of Sciences of Tunis.
      A wife and a mother of a beautiful twin"
       profession=" chemistry teacher"
       children={Photo1} / >
      
    </div>
  );
}

export default App;
