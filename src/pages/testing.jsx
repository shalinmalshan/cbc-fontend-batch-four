import { useState } from "react"

export default function Testing(){
    const [number,setNumber]=useState(0)


    function increment(){
        let newNumber=number+1
        setNumber(newNumber)
    }

    function decrement(){
        let newNumber=number-1
        setNumber(newNumber)
    }


    return(
       <div className="w-full h-screen bg-amber-600 flex flex-col justify-center items-center">
        <span className="text-3xl font-bold">{number}</span>
        <div className="w-full flex justify-center items-center">
            <button onClick={increment} className="bg-blue-600 text-white p-2 rounded-2xl">+</button>
            <button onClick={decrement} className="bg-blue-600 text-white p-2 rounded-2xl">-</button>
        </div>

       </div>
       

    )
}