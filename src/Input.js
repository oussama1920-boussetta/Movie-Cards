import React from "react";

// import  { useState } from "react";




export function Input({setMyInput}) {
    // const [myInput, setMyInput] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder=" Search"
                onChange={(e) => setMyInput(e.target.value)}
            />
        </div>
    )
}


