import React from "react";
import PropTypes from "prop-types";

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
const stylespan ={color:'blue' , fontFamily:'fantasy', fontSize: '30px'  }

const stylediv ={fontFamily:'sans-cerif' , fontSize:'25px' , alignText:'10px' ,borderStyle:'solid' , width:'60%'}

const stylebutton ={boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}

const Profile=(props)=>{
    function handleName (e){
        e.preventDefault()
        alert(props.fullName)
    }
return  <>
<div    >
    <img style={styleimg} src={props.children} alt=""  />
</div>
<div style={stylediv}>
   <span style={stylespan} >fullName:</span> {props.fullName}
</div>
<div  style={stylediv}>
   <span style={stylespan}>bio:</span> {props.bio} 
</div>
<div  style={stylediv}>
   <span style={stylespan}>profession:</span> {props.profession}
</div>
<div >
    <button  onClick={handleName} style={stylebutton} >Click Me </button>
</div>



 </>
}

Profile.propTypes = {
 fullName : PropTypes.string.isRequired,
 bio : PropTypes.string.isRequired,
 profession : PropTypes.string.isRequired,
}


Profile.defaultProps = {
fullName : "write your full name",
bio :"write your bio",
profession : "write your proffession",
}

export default Profile