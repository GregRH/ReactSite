
import { useState, useEffect } from "react";
const Login=(props)=> {
  const initialValues = { username: "", password:""};
  const [formValues, setFormValues]= useState(initialValues);
  const[formErrors, setFormErrors]= useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const handleChange = (e)=>{
    const { name, value }=e.target;
    setFormValues({... formValues,[name]:value});
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
      props.signin(formValues);
    }
  },[formErrors]);
  const validate = (values)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
      errors.username="Username is required";
    }
    
    if(!values.password){
      errors.password="Password is required";
    }else if(values.password.length<4){
      errors.password="Password must be more than 4 characters";
    }else if(values.password.length>10){
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return(
    <div className="container">
    {
      Object.keys(formErrors).length===0&&isSubmit ? (
        <div className="ui message success" >Signed in
        successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        )}

        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="ui divider"> </div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
                />
                </div>
                <p>{formErrors.username}</p>
                <div className="field">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.password}</p>
                <button className="fluid ui button blue">Submit</button>
              </div>
            </form>
          </div>
    );

}

export default Login;
