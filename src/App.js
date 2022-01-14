import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import './App.css'
import './styles.css'
import LoginForm from "./login/loginform";
import NavBar from "./navbar";
import PropTypes from 'prop-types';
import Layout from './Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

var Recaptcha = require('react-recaptcha');

function App(props){
  // const [profileState, setProfileState] = useState(props);
  const [isShowLogin, setIsShowLogin] = useState(true);

  
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return(
    <Router>
    <div className="App">
      <NavBar handleLoginClick={handleLoginClick}/>
      <Switch>  
        <LoginForm exact path="/" component={LoginForm} isShowLogin={isShowLogin} /> 
        <Route path='/' render={(props) => <Layout {...props} /> } />     
      </Switch>
                
    </div>
    </Router>
    
            
  );
 
};

export default App;