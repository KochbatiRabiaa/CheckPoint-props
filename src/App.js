
import React  from 'react';
import Profile from "./profile/Profile"
import Photo1 from "./profile/photo1.jpg"


const styleimg= { opacite:'2' ,
                  width:'400PX',
                  float:'center' ,
                  border:'2px solid #fff',
                  mozBoxShadow: '10px 10px 5px #ccc',
                  webkitBoxShadow:' 10px 10px 5px #ccc',
                  boxShadow: '10px 10px 5px #ccc',
                  mozBorderRadius:'25px',
                  webkitBorderRadius:'25px',
                  borderRadius:'25px' }


function App() {
 return (
    <div className="App">
      <Profile fullName="Kochbati Rabiaa"
        bio="A master degree in analytical chemistry from the University of Tunis: Faculty of Sciences of Tunis.A wife and a mother of a beautiful twin"
       profession=" chemistry teacher">
          <img  style={styleimg}  src={Photo1} alt=""/> 
   </Profile>
    </div>
  );
}
export default App;
