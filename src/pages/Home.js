import React,{useState,useEffect} from 'react';
import axios from "axios";
const Home = (props) => {
  const [online,setOnline] = useState(false); 
  const [players,setPlayers]=useState(0);
  const fetchServerInfo = async ()=>{
    const response = await axios.get("https://mcapi.us/server/status?ip=54.156.173.183&port=25565")
    .catch((err)=>{
      console.log("Err",err);
    });
    console.log(response);
   console.log(response.data.online);
    console.log(response.data.players.now);
    setPlayers(response.data.players.now);
   setOnline(response.data.online) ;
  } 

  //fetchServerInfo();
  function openServer(props){
      
        const response = axios
        .get("https://jubt10fyl0.execute-api.us-east-1.amazonaws.com/start")
        .catch((err)=>{
          console.log("Err",err);
        });
        console.log(response);
        setOnline(true);
        
      //}
  }
  function closeServer(){
        const response = axios
        .get("https://jubt10fyl0.execute-api.us-east-1.amazonaws.com/end")
        .catch((err)=>{
          console.log("Err",err);
        });
        console.log(response);
        setOnline(false);
  }
  useEffect(()=>{
    fetchServerInfo();
  },[]);
  return(
  <div className="container">
    <h2>Home</h2>
    My Home page!
    <div>
    {online===true ? (<div><h2>Server Status <span className="green">Online</span></h2> <h3>There are {players} player(s) currently online</h3></div>) :
     (<h2>Server Status <span className="red">Offline</span></h2>)}
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