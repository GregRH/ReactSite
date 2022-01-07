import React from 'react';
import axios from "axios";
const Home = (props) => {
  function openServer(){
      
        const response = axios
        .get("https://jubt10fyl0.execute-api.us-east-1.amazonaws.com/start")
        .catch((err)=>{
          console.log("Err",err);
        });
        console.log(response);
      //}
  }
  function closeServer(){
        const response = axios
        .get("https://jubt10fyl0.execute-api.us-east-1.amazonaws.com/end")
        .catch((err)=>{
          console.log("Err",err);
        });
        console.log(response);
  }
  return(
  <div className="container">
    <h2>Home</h2>
    My Home page!
    <div>
      <h3>Server Controls</h3>
      <p>With great power comes <b>GREAT</b> responsibility.</p>
      <p>AKA dont fuck with this unnecissarily</p>
      <h2>Rules</h2>
      <p>Be sure to check that no one is playing before closing the server</p>
      <p>Please close the server if you are the last to leave</p>
    </div>

    {props.username!=="" ? (
      <div>
        <div className="button">
          <button onClick={openServer}>Start Server</button>
        </div>
        <div className="button">
          <button onClick={closeServer}>Close Server</button>
        </div>
      </div>
     ) : (<div className="container">Must Sign-in to access server controlls</div>)
    }
    </div>
    
);
}
export default Home;