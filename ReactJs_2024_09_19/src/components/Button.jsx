
// state--> Data that may change with user interacts
//Hooks-->it is a special function which is used change in state management

import { useEffect, useReducer, useRef, useState } from "react";

// hooks --> started from use...
//useState, useReducer, useEffect, useRef

const Button = (props) => {

    const [label, setlabel] = useState("Click");

    function changeLabel() {
        setlabel("Clicked")
    }

    return (
        <button className="mx-3 border px-3 py-1 bg-red-500 rounded-xl text-white" onClick={changeLabel}>{label}</button>
    )

}

export default Button
