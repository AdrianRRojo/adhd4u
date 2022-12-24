import React from "react"


export default function Home(){

    const c = console.log.bind(document)
    c('Hello!')
    return(
        <div className="bg-cyan-700/75 bg-cover">
            <p>Home</p>
            
        </div>
    )
}