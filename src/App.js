import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 
"react-router-dom";
import Header from "./containers/header";
import Login from "./containers/login";
import Help from "./containers/help";
import Home from "./pages/Home";
import React,{useState} from "react";
function App() {
  const [test,setTest] = useState(0)
  const initialValues = { username: "", password:""};
  const [user,setUser ]=useState(initialValues);
  function handleSignIn(evt){
    setUser(evt);
    console.log("AppHandleSignin")
    console.log(evt)
  }
  function handleLogout(){
    setUser(initialValues);
  }
  function handleFunc(evt){
   setTest(test+1) 
    console.log(test)
  } 
  function handleRefresh(){
    
  }
  return (
  <div className="App">
    <div className="Header">
      <Header count={test} username={user.username} logout={handleLogout} refresh={handleRefresh}/>
    </div>
    <div className="App-intro">
      <Routes>
        <Route path="/" exact element={<Home username={user.username}/>}/>
        <Route path="/login" exact element={<Login signin={handleSignIn} />}/>
        <Route path="/help" exact element={<Help func={handleFunc} count={test}/>}/>
      </Routes>
    </div>
  </div>
    

  );
}
App.defaultProps={
  count:0
}
export default App;
