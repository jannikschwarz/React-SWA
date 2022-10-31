import React, {useState} from 'react'
import LoginForm from './components/LoginForm';

const users = [
    {
        name: "bob",
        email: "bob@gmail.com",
        password: "bob1234"
    },
    {
        name: "Jannik",
        email: "jannik@gmail.com",
        password: "jannik1234"
    },
    {
        name: "dave",
        email: "dave@gmail.com",
        password: "dave1234"
    }
]

function App(){
    const adminUser = {
        email: "admin@admin.com",
        password: "admin1234"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const login = details => {
        console.log(details);
        const foundUser = false
        users.forEach(user => {
            if(user.email == details.email && user.name == details.name && user.password == details.password){
                foundUser = true;
            }
        });
        if(details.email == adminUser.email && details.password == adminUser.password || foundUser){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }else{
            console.log("Details do not match");
            setError("Details do not match");
        }
    }

    const register = details => {
        let succesful = false;
        users.forEach(user => {
            if(user.email == details.email){
                succesful = false;
                setError("Cannot register, Email already exists");
            }else if(details.name == "" || details.email == "" || details.password == ""){
                succesful = false;
                setError("A input is invald");
            }else{
                succesful = true
            }
        });

        console.log(succesful)
        if(succesful){
            users.push(details.name, details.email, details.password)
            setUser({
                name: details.name,
                email: details.email
            });
        }
    }

    const logout = () => {
        setUser({name: "", email: ""});
    }

    return ( 
        <div className='App'>
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <LoginForm login={login} error={error} register={register}/>
            )}
        </div>
    );
}

export default App;