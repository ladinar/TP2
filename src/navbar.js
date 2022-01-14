import React from "react";
import { useLocation } from 'react-router-dom';

// custom hook to get the current pathname in React

function NavBar({ handleLoginClick}) {
  const handleClick = () => {
    handleLoginClick();
  };

  const location = useLocation();

  var isLogedIn = false
  if (location.pathname === "/dashboard") {
    isLogedIn = !isLogedIn
  } 

  const title = "Ladinar's Gallery"

  const dashboard = "Dashboard"

  return (
    <div className="navbar">
      <div>
        <h5 style={divStyle}>
          {`${isLogedIn ? dashboard : title}`}
        </h5>
        {isLogedIn
          ? <span className="loginicon"><i className="fa fa-user"></i> Guest</span>
          : <span onClick={handleClick} className='loginicon'>Sign In</span>
        }
      </div>
    </div>
  );
}

const divStyle = {
  color: 'white',
  alignItems: 'center',
};

export default NavBar;