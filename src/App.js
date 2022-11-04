import React, {useState} from 'react'
import LoginForm from './components/LoginForm';
import GameForm from './components/GameForm';

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

const boardArray = [
    'A','B','C','A','C','A','B','A','A','C','C','B'
]

const adminUser = {
    email: "admin@admin.com",
    password: "admin1234"
}

function App(){

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    const [board, setGameBoard] = useState([]);
    const [width, setWidth] = useState(0);

    const login = details => {
        console.log(details);
        let foundUser = false
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

            setGameBoard(boardArray);
            setWidth(4);
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
                    <GameForm board={board} width={width}/>
                </div>
            ) : (
                <LoginForm login={login} error={error} register={register}/>
            )}
        </div>
    );
}

export default App;