import React from "react";
import { ReactDOM } from "react";

function Form(){
    const[count,setcount]=React.useState(0);

    function increment(){
        setcount(count + 1);
    }

    function decrement(){
        setcount(count - 1);
        }

    function reset(){
        setcount(0);
    }

return(
    <div>
        <button onClick={increment}> + </button>
        <h1>{count}</h1>
        <button onClick={decrement}> - </button>
        <button onClick={reset}> reset</button>
    </div>
);
}

export{Form};