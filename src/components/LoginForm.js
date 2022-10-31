import React, {useState} from 'react'
import '../index.css'


function LoginForm({ login, error, register}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const [buttonType, setType] = useState("")

    const submitHandler = e => {
        e.preventDefault()
        if(buttonType == "Login"){
            login(details)
        }else if(buttonType == "Register"){
            register(details)
        }
    }

  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOGIN" onClick={() => setType("Login")}/>
            <input type="submit" value="REGISTER" onClick={() => setType("Register")}/>
        </div>
    </form>
  )
}

const Checkbox = ({ label, checked }) => {
    const defaultChecked = checked ? checked: false 
    const [regCheck, setChecked] = useState(false);

    const handleCheckChange = () => {
        setChecked(!regCheck)
    };

    return (
      <div className="checkbox-wrapper">
        <label>
            <input type="checkbox" checked={defaultChecked} onChange={handleCheckChange} label="Register"/>
        </label>
      </div>
    );
  };
export default LoginForm
