import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleRegister() {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        setLoading(true);

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user/", {
            firstName,
            lastName,
            email,
            password
        }).then((response) => {
            console.log("Registration successful", response.data);
            toast.success("Registration successful");
            navigate("/login");
            setLoading(false);
        }).catch((err) => {
            console.log("Registration failed", err.response?.data || err.message);
            toast.error(err.response?.data?.message || "Registration failed");
            setLoading(false);
        });
    }

    return (
        <div className="w-full h-screen bg-[url(/bg-login.jpg)] bg-cover bg-center flex">
            <div className="w-[50%] h-full"></div>

            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] min-h-[700px] backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center flex-col p-4">
                    
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="text"
                        placeholder="First Name"
                    />

                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="text"
                        placeholder="Last Name"
                    />

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="password"
                        placeholder="Password"
                    />

                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <button
                        onClick={handleRegister}
                        className="w-[400px] h-[50px] bg-green-500 rounded-xl text-white cursor-pointer mt-4"
                    >
                        {loading ? "Loading..." : "Register"}
                    </button>

                    <p className="text-gray-600 text-center m-[10px]">
                        Already have an account?
                        &nbsp;
                        <span className="text-green-500 cursor-pointer hover:text-green-700">
                            <Link to={"/login"}>Login now</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
