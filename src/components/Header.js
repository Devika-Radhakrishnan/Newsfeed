import React from 'react';

import '../styles/headerStyles.css';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar expand='lg' variant='dark' bg='dark' fixed='top'>
        <Navbar.Brand href='#'>Navbar</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;

// return(
//     <div>
// <h1 style={myStyles.H1Style}>
//     PostHeader
// </h1>
// <h2 style={myStyles.SubtitleStyle}>Subtitle</h2>
// </div>)
// }

// const myStyles = {
// H1Style :    {color:"green", fontSize:"18px", fontWeight:"bold"},
// SubtitleStyle : {color:"red", fontSize:"60px"}
// }
