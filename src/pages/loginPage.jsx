import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate =useNavigate()

    function handleLogin() {
        console.log("Email:", email)
        console.log("password:", password)

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user/login", {
            email: email,
            password: password
        }).then((response) => {
            console.log("Login successful", response.data)
            toast.success("Login successful")
            localStorage.setItem("token", response.data.token)

            const user = response.data.user
            if(user.role=="admin"){
                //goto the admin page
                navigate("/admin")
            }else{
                //goto the home page
               navigate("/")
            }

        }).catch((err) => {
            console.log("Login failed", err.response.data)
            toast.error(err.response.data.message || "Login failed")
        })
    }
    return (
        <div className="w-full h-screen bg-[url(/bg-login.jpg)] bg-cover bg-center flex ">
            <div className=" w-[50%] h-full">

            </div>
            <div className=" w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px]  backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center flex-col ">
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]" type="email" placeholder="Email" />
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]" type="password" placeholder="Password" />
                    <button onClick={handleLogin} className="w-[400px] h-[50px] bg-green-500 rounded-xl text-white cursor-pointer">Login</button>

                </div>

            </div>

        </div>
    )
}