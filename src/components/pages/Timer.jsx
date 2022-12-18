import React, {useEffect, useState} from "react"


export default function Timer(){
    // const [seconds, setSeconds] = useState(0)
    // const [isRunning, setIsRunning] = useState(true)

    const [alarmTime, setAlarmTime] = useState(null)
    const [inputTime, setInputTime] = useState('')

    const handleChange = e => {
        setInputTime(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const date = new Date()
        date.setHours(inputTime.split(':')[0])
        date.setMinutes(inputTime.split(':')[1])
        setAlarmTime(date.toLocaleTimeString())
    }
    // useEffect(() => {
    // if(isRunning) {
    //     const interval = setInterval(() => {
    //         setSeconds(seconds => seconds + 1)
    //     }, 1000)
    //     return() => clearInterval(interval)
    // }
    //     }, [isRunning])
    return(
        <div>
            {/*
            <div> 
                <p>{seconds}, seconds</p>
                <button className="bg-sky-500" onClick={() => setIsRunning(false)}>Stop Timer</button> 
            </div>
            */}
            <div>
                {alarmTime ? (
                    <p>Study for {alarmTime}</p>
                ) : (
                    <p>You're done!</p>
                )}
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder="HH:MM"
                        value={inputTime}
                        onChange={handleChange}
                    >
                    </input>
                    <button type='submit'>Set alarm</button>
                </form>
            </div>
            
        </div>
    )
}