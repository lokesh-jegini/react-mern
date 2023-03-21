import './task2.css';
import { React, useState, useEffect } from "react";

export function Ex1() {
    const [yet, setyet] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count, '- Has changed')
    }, [count])
    const handleChange = (e) => setCount(e.target.value);
    const increment = (e) => {
        setyet(Number(yet) + Number(count))
        console.log(yet);

    }
    const decremnent = (e) => {

        setyet(Number(yet) - Number(count))
    }
    return (
        <>

            <div class="delfex">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <h2>Counter Limit</h2>    &nbsp;&nbsp;   &nbsp;&nbsp; <input type="text" value={count}
                    onChange={handleChange} />
            </div>
            <h1>Increment count</h1>
            <div class="delfex">
            <div className="">
                <button  onClick={increment} >increment</button> &nbsp;&nbsp;
                    <h1><b> increment </b>{yet} </h1>
                    &nbsp;&nbsp;
                <button  onClick={decremnent} >Decremnent</button>
            </div>
            <div>
            </div>
          
            </div>
            <br />
        </>
    )
}



