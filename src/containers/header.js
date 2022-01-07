import React,{useState} from "react";
import {Link} from 'react-router-dom';
import Help from "./help"
const Header = (props) => {
	return(
		<div className="ui fixed menu">
			<div className="ui container">
				{props.username!=="" ?

					(<h1>TestReact::{props.count} Logged in as: {props.username}</h1>)
					:(<h1>TestReact::{props.count} Not Signed in</h1>)
				
				}
			</div>
			<div className="ui container">
			{props.username==="" ? (
					<div className="Link"><Link to="login">Login</Link></div>
					) : (<div className="Link" onClick={()=>props.logout()}><Link to="">Logout</Link></div>)
				}
					<div className="Link"><Link to="/"><i className="fa fa-home"></i>Home</Link></div>
					<div className="Link"><Link to="help">Help</Link></div>
			</div>
		</div>
		);
};

export default Header;