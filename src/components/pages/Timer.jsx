import React, {useEffect, useState} from "react"


export default function Timer(){
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {
    if(isRunning) {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
        return() => clearInterval(interval)
    }
        }, [isRunning])
    return(
        <div>
            <p>{seconds}, seconds</p>
            <button className="bg-sky-500" onClick={() => setIsRunning(false)}>Stop Timer</button>
        </div>
    )
}