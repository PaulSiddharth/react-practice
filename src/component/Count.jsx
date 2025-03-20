import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector(state=>state)
    console.log(count)
    return(
        <div>
            <h2>{count.count}</h2>
        </div>
    )
}

export default Counter