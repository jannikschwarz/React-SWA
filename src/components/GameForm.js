import React, {useEffect, useState} from 'react'
import '../table.css'
import axios from 'axios'

let position = {
    row: "",
    col: ""
}

function GameForm({board, width, id, user}){
    let rows = board.length / width;
    let repeats = board.slice(0, rows);
    let curretRow = 0;
    let pos1 = undefined;
    let pos2 = undefined;
    let gameStart = false; 

    const getRow = () => {
        let toReturn = board.slice(curretRow, curretRow + width);
        curretRow += width
        return toReturn
    }

    const onValueClick = (position) => {
        if(pos1 == undefined){
            pos1 = position
        }else{
            pos2 = position
        }

        move();
        pos1 = undefined;
        pos2 = undefined;
    }

    const move = () => {
        console.log("Position clicked");
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
        <table cellPadding="0" style ={{padding: '5px 10px'}}>
            <tbody>
                {repeats.map((value, index) => (
                    <tr key={index}>
                        {getRow().map((value2, index2) => (
                            <td key={index2}>
                                <button onClick={onValueClick(position = {row: index, col: index2})}>{value2}</button>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default GameForm