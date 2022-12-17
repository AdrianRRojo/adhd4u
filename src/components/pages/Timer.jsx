import React, {useState} from "react"


export default function Timer(){
    const [seconds, setSeconds] = useState(0)
    return(
        <div>
            <p>{seconds}, seconds</p>
        </div>
    )
}