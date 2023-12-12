import React, { useEffect, useState, useContext } from 'react'
import stateContext from "../context/StateContext"
import "./styles/Signup.css"
import { Link } from 'react-router-dom'

const Login = () => {
    const context = useContext(stateContext);
    const [info, setInfo] = useState({ phone: "", password: "" });
    const {LoginUser} = context

    const handleChange = (e)=>{
        setInfo({...info, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        LoginUser(info, e)
    }
    

    return (
        <>
            {
                <div className="h-screen md:flex relative overflow-hidden">

                    <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr  i justify-around items-center hidden">
                        <img style={{
                            position: "absolute", left: "0", top: "-10%"
                        }} src="/images/loginbanner.jpg" alt="" />
                        <div>
                            <h1 className="text-white font-bold text-4xl font-sans">BharatLegalHub</h1>
                            <p className="text-white mt-1">The most popular peer to peer emarket for legal services</p>
                        </div>
                    </div>
                    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white relative">
                        <form className="bg-white">
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back To Bharat Legal Hub</p>
                            <div className="flex items-center border-2 py-2 px-3 w-[25rem] rounded-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input onChange={handleChange} className="pl-2 outline-none w-full border-none" type="text" name="phone" value={info.phone} id="" placeholder="Enter Your Registered Mobile Number" />
                            </div>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input className="pl-2 outline-none border-none" type="text" name="password" value={info.password} id="" placeholder="Password" />
                            </div>
                            <button onClick={handleSubmit} className="block w-full bg-[#f97316] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                            <Link to={"/signup"} className="text-sm text-center ml-2 hover:text-orange-500 cursor-pointer">Don't Have an account? Signup</Link>
                        </form>
                    </div>
                </div>
            }

        </>
    )
}

export default Login