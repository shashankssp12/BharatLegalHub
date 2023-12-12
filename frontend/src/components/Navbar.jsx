import React, { useState, useContext } from 'react'
import stateContext from '../context/StateContext'
import "./styles/Navbar.css"
import { AiFillCaretDown } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const context = useContext(stateContext)
    const [showDrop, setShowDrop] = useState(false)
    const { currentUser, handleLogout } = context;

    return (
        <>

            <nav className="bg-white fixed navbar mb-10 w-full z-20 top-0 left-0 border-b border-gray-200 ">
                <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto ">
                    <Link to={"/"} className="flex items-center">
                        <img src="/images/BharatLegalHub.png" className="logo mr-3" alt="Logo" />
                        <img src="/images/ministry_logo.png" className="ministryLogo mr-3" alt="Logo" />
                    </Link>
                    <div className="flex gap-2 md:order-2">
                        <Link to={"http://localhost:3001"} target='_blank' type="button" className="text-white bg-violet-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:hover:bg-violet-700 ">Dashboard</Link>
                        {
                            !currentUser ?
                                <Link to={"/login"} type="button" className="text-white bg-[#f97316] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:hover:bg-[#f97316] ">Login</Link> : <button onClick={handleLogout} type="button" className="text-white bg-[#f97316]  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:hover:bg-[#f97316]">Logout</button>
                        }
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
                            <li>
                                <Link to={"/lawyers"} className="block py-2 pl-3 pr-4 text-gray-900 md:hover:text-[#f97316] rounded md:bg-transparent  md:p-0 ">Talk To Advocates</Link>
                            </li>
                            <li>
                                <Link to={"/doc-writers"} className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:text-[#f97316] md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Document Writers</Link>
                            </li>
                            <li className='relative'>
                                <a onClick={() => { setShowDrop(!showDrop) }} href="#" className=" py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:text-[#f97316] md:p-0 inline-flex items-center gap-1 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Other Services <AiFillCaretDown /></a>
                                <div className={`${showDrop ? "flex" : "hidden"} dropDown`}>
                                    <div className="otherDrops">
                                        <div>
                                            <span>
                                                <a href={"/"}>
                                                    Notaries
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="otherDrops">
                                        <div>
                                            <span>
                                                <a href={"/"}>
                                                    Mediators
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="otherDrops">
                                        <div>
                                            <span>
                                                <a href={"/"}>
                                                    Arbitrators
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:text-[#f97316] md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ask Query</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:text-[#f97316] md:p-0  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar