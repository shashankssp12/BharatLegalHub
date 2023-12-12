import React, { useEffect, useState, useContext } from 'react'
import stateContext from '../context/StateContext'
import "./styles/Profile.css"
import { RiStarSFill } from "react-icons/ri"
import { IoCallOutline } from "react-icons/io5"
import { AiOutlineCalendar } from "react-icons/ai"
import {BsCameraVideo} from "react-icons/bs"

const Profile = () => {
    const [data, setData] = useState([])
    const [timing, setTiming] = useState("11:00 AM")
    const context = useContext(stateContext);
    const { scheduleCall, handleCall, RegisteredPhone } = context;

    useEffect(() => {
        let link = window.location.href
        let id = link.split("=")[1]
        // fetchProfile(id)
    }, [])

    const fetchProfile = async (id) => {
        try {
            const res = await fetch(`http://localhost:1000/api/auth/get-advocate?advocate_id=${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await res.json()
            if (data.success) {
                setData(data.call)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="profileBox mt-40 mx-auto">
                <div className="left relative">
                    <div className="upper">
                        <div className="profilePic">
                            <img src="/images/5.jpg" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                    </div>
                    <div className="middle">
                        <h4>Kasish Singh</h4>
                        <div className="rating">
                            <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill />
                        </div>
                    </div>
                    <div className="middleLower">
                        <div className="rate">
                            <span>
                                ₹ 30
                            </span>/min
                        </div>
                        <button onClick={() => { scheduleCall(timing, data._id) }} className="scheduleBtn"><AiOutlineCalendar /> Schedule Call</button>
                    </div>
                    <div className="lower actionBtn">
                        <button onClick={() => { handleCall(data.phone, RegisteredPhone) }} className="call"><IoCallOutline /> Call</button>
                        <button className="call internetCall"><BsCameraVideo />Internet Call</button>
                    </div>
                    {/* <div className="modal modalProfile">
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap justify-center -mx-3 mb-2">
                                <div className="inline-block relative w-30">
                                    <select onChange={(e) => { setTiming(e.target.value) }} className="block appearance-none w-full bg-white p-5 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8">
                                        <option>11:00 AM</option>
                                        <option>12:00 PM</option>
                                        <option>01:00 PM</option>
                                        <option>02:00 PM</option>
                                        <option>03:00 PM</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div> */}
                </div>
                <div className="right">
                    <h3>Professional summary</h3>
                    <p></p>
                    <hr />
                    <h3>Basic Details</h3>
                    <div className="rightDetails">
                        <div>
                            <span>Experience</span>
                            <span>4 Years</span>
                        </div>
                        <div>
                            <span>Languages</span>
                            <span>Hindi, English</span>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <div>
                            <span>Location</span>
                            <span>Mathura, Uttar Pradesh</span>
                        </div>
                        <div>
                            <span className='text-right'>Specialities</span>
                            <span>Criminal Matter</span>
                            <span>Property Matter</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile