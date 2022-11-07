import React, {useState} from 'react'
import LoginForm from './components/LoginForm';
import GameForm from './components/GameForm';
import axios from 'axios';

const boardArray = [
    'A','B','C','A',
    'C','A','B','A',
    'A','C','C','B'
]


function App(){

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    const [board, setGameBoard] = useState([]);
    const [width, setWidth] = useState(0);
    let token;
    let gameStart = false; 


    const login = details => {
        axios.post('http://localhost:9090/login',{
            password: details.password,
            username: details.name
        }).then(function(response){
            setGameBoard(boardArray);
            setWidth(4);
            console.log(response)
            token = response.data.token
            setUser({
                name: details.name,
                email: details.email
            })
        }).catch(function(error){
            console.log(error);
            console.log("Failed to login")
            setError("Failed to login");
        })
    }

    const register = details => {
        axios.post('http://localhost:9090/users',{
            username: details.name,
            email: details.email, 
            password: details.password
        }).then(function(response){
            setGameBoard(boardArray);
            setWidth(4);
            setUser({
                name: details.name,
                email: details.email
            })
        }).catch(function(error) {
            setError("Register failed due to existing user");
        })
    }

    const logout = () => {
        axios.post("http://localhost:9090/logout?" + token).then(function(response){
            setUser({name: "", email: ""});
        }).catch(function(error){
            console.log(error);
        })
    }

    const startGame = () => {
        const gameID = Math.floor(Math.random() * 1000);
        axios.post('http://localhost:9090/games',{
            id: gameID,
            user: user.name,
            score: 0,
            completed: false
        }).then(function(response){
        }).catch(function(error) {
        })
    }

    return ( 
        <div className='App'>
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={logout}>Logout</button>
                    <div>{gameStart ? <p>Game started</p> : <p></p>}</div>
                    <button onClick={startGame()}>Start Game</button>
                    <GameForm board={boardArray} width={width} user={user}/>
                </div>
            ) : (
                <LoginForm login={login} error={error} register={register}/>
            )}
        </div>
    );
}

export default App;