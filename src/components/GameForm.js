import React, {useEffect, useState} from 'react'
import '../table.css'

let currentRow = 0;
let currentCol = 0;
const position = {
    row: "",
    col: ""
}

function GameForm({board, width}){
    const [pos, setPos] = useState(position);

    let currentE = 1;


    const pressedHandler = e => {
        if(currentE == 1){

        }
    }

    return <form onSubmit={pressedHandler}>
        {board.map((element, index) => (
            <div>
                <input type="submit" value={element} onClick={() => 
                    setPos({row:currentRow,col:currentCol})}/>
            </div>
        ))}
    </form>
}

/*const GameForm = ({board, width}) => {


        {board.length > 0 && (
            <table cellSpacing="0" style={{padding: '5px 10px'}}>
                <tbody>
                    {Object.values(board).map((object, index) => (
                        <tr key={index}>
                            {Object.values(object).map((value, index2) => (
                                <td key={index2}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}

    
    boardArray = board;
    return (
        <table>
            <tbody>
                {board.forEach(element => {
                    {console.log(element)}
                    <tr>
                        <td>{element}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

function BoardItem({item, width}){
    if(currentIndex > width){
        currentIndex++;
        return <tr><td>{item}</td></tr>        
    }else{ 
        currentIndex++;
        return <td>{item}</td>
    }
}*/

export default GameForm