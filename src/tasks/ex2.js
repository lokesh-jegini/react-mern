
import './task2.css';
import { React, useState, useEffect } from "react";

export function Ex2() {
    const [changeIncount, setchangeIncount] = useState(1);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setCounter(prevCount => prevCount -  Number(changeIncount) ); 
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, [changeIncount]);
    
    const handleChange = (e) => setchangeIncount(e.target.value);

    return (
        <>  
     
         <h2> increment  <input type="text" value={changeIncount}
                    onChange={handleChange} /></h2> 
                    <button>Start</button>
        <div>
          <h1> Count: {counter}</h1>
        </div>
        </>
       
      );
   
}
