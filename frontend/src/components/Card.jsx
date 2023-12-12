import React, { useState, useContext, useEffect } from 'react'
import stateContext from '../context/StateContext'
import "./styles/Card.css"
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci"
import { BsHandbag, BsChatDots, BsCameraVideo } from "react-icons/bs"
import { IoCallOutline } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'


const Card = () => {
    const navigate = useNavigate()
    // const [timing, setTiming] = useState("11:00 AM")
    // const context = useContext(stateContext);
    // const { scheduleCall, handleCall, RegisteredPhone } = context;

    // const handleProfile = (id) => {
    //     navigate(`/profile?id=${id}`)
    // }



    return (
        <>
            <div className="card">
                <div className="cardTop">
                    <div className="profilePic">
                        <img src="images/5.jpg" alt="" />
                        <div className="availBadge">Available</div>
                    </div>
                    <div className="details">
                        <h4 className='cursor-pointer' onClick={()=>{navigate("/profile?id=kasish01")}} >Kasish Singh</h4>
                        <div className="moreDetails">
                            <span><CiLocationOn />Mathura, Uttar Pradesh</span>
                            <span><BsHandbag />4 Years of Experience</span>
                            <span><BsChatDots />Hindi, English</span>
                        </div>
                    </div>
                    <div className="options">
                        <div className="reviewBox">
                            <span>4.4 <AiFillStar /></span>
                            <span>100+ Reviews</span>
                        </div>
                        <div className="scheduleBtn"><AiOutlineCalendar />Schedule Call</div>
                    </div>
                </div>
                <div className="cardMiddle">
                    <div className="practiceAreas">
                        <span>
                            Practice Areas:
                        </span>
                        <div className="practiceAreaList">
                            <span>Criminal Matter</span>
                            <span>Property Matter</span>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="cardBottom">
                    <div className="rates">
                        <span>
                            ₹ 30
                        </span>/min
                        <p>Call charges</p>
                    </div>
                    <div className="actionBtn">
                        <button className="call"><IoCallOutline />Call</button>
                        <button className="call internetCall"><BsCameraVideo />Internet Call</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="cardTop">
                    <div className="profilePic">
                        <img src="images/e.jpg" alt="" />
                        <div className="availBadge">Available</div>
                    </div>
                    <div className="details">
                        <h4 className='cursor-pointer' >Ronit Sharma</h4>
                        <div className="moreDetails">
                            <span><CiLocationOn />New Delhi, India</span>
                            <span><BsHandbag />6 Years of Experience</span>
                            <span><BsChatDots />Hindi, English</span>
                        </div>
                    </div>
                    <div className="options">
                        <div className="reviewBox">
                            <span>4.2 <AiFillStar /></span>
                            <span>500+ Reviews</span>
                        </div>
                        <div className="scheduleBtn"><AiOutlineCalendar />Schedule Call</div>
                    </div>
                </div>
                <div className="cardMiddle">
                    <div className="practiceAreas">
                        <span>
                            Practice Areas:
                        </span>
                        <div className="practiceAreaList">
                            <span>Civil Matter</span>
                            <span>Business / Corporate Issue</span>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="cardBottom">
                    <div className="rates">
                        <span>
                            ₹ 35
                        </span>/min
                        <p>Call charges</p>
                    </div>
                    <div className="actionBtn">
                        <button className="call"><IoCallOutline />Call</button>
                        <button className="call internetCall"><BsCameraVideo />Internet Call</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="cardTop">
                    <div className="profilePic">
                        <img src="images/v.jpg" alt="" />
                        <div className="availBadge">Available</div>
                    </div>
                    <div className="details">
                        <h4 className='cursor-pointer' >Shyam Sundar Singh</h4>
                        <div className="moreDetails">
                            <span><CiLocationOn />Patna, Bihar</span>
                            <span><BsHandbag />10 Years of Experience</span>
                            <span><BsChatDots />Hindi, English</span>
                        </div>
                    </div>
                    <div className="options">
                        <div className="reviewBox">
                            <span>4.5 <AiFillStar /></span>
                            <span>1200+ Reviews</span>
                        </div>
                        <div className="scheduleBtn"><AiOutlineCalendar />Schedule Call</div>
                    </div>
                </div>
                <div className="cardMiddle">
                    <div className="practiceAreas">
                        <span>
                            Practice Areas:
                        </span>
                        <div className="practiceAreaList">
                            <span>Property Issue</span>
                            <span>Criminal Issue</span>
                            <span>Civil Matter</span>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="cardBottom">
                    <div className="rates">
                        <span>
                            ₹ 40
                        </span>/min
                        <p>Call charges</p>
                    </div>
                    <div className="actionBtn">
                        <button className="call"><IoCallOutline />Call</button>
                        <button className="call internetCall"><BsCameraVideo />Internet Call</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="cardTop">
                    <div className="profilePic">
                        <img src="images/4.jpg" alt="" />
                        <div className="availBadge">Available</div>
                    </div>
                    <div className="details">
                        <h4 className='cursor-pointer' >Rahul Pandey</h4>
                        <div className="moreDetails">
                            <span><CiLocationOn />Jhansi, Madhya Pradesh</span>
                            <span><BsHandbag />5 Years of Experience</span>
                            <span><BsChatDots />Hindi, English</span>
                        </div>
                    </div>
                    <div className="options">
                        <div className="reviewBox">
                            <span>4.7 <AiFillStar /></span>
                            <span>200+ Reviews</span>
                        </div>
                        <div className="scheduleBtn"><AiOutlineCalendar />Schedule Call</div>
                    </div>
                </div>
                <div className="cardMiddle">
                    <div className="practiceAreas">
                        <span>
                            Practice Areas:
                        </span>
                        <div className="practiceAreaList">
                            <span>Immigration Issue</span>
                            <span>Accident & Insurance Issue</span>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="cardBottom">
                    <div className="rates">
                        <span>
                            ₹ 35
                        </span>/min
                        <p>Call charges</p>
                    </div>
                    <div className="actionBtn">
                        <button className="call"><IoCallOutline />Call</button>
                        <button className="call internetCall"><BsCameraVideo />Internet Call</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="cardTop">
                    <div className="profilePic">
                        <img src="images/12.jpg" alt="" />
                        <div className="availBadge">Available</div>
                    </div>
                    <div className="details">
                        <h4 className='cursor-pointer' >Shiv Shankar Bharadwaj</h4>
                        <div className="moreDetails">
                            <span><CiLocationOn />Delhi, India</span>
                            <span><BsHandbag />8 Years of Experience</span>
                            <span><BsChatDots />Hindi, English</span>
                        </div>
                    </div>
                    <div className="options">
                        <div className="reviewBox">
                            <span>4.7 <AiFillStar /></span>
                            <span>1500+ Reviews</span>
                        </div>
                        <div className="scheduleBtn"><AiOutlineCalendar />Schedule Call</div>
                    </div>
                </div>
                <div className="cardMiddle">
                    <div className="practiceAreas">
                        <span>
                            Practice Areas:
                        </span>
                        <div className="practiceAreaList">
                            <span>Supreme Court Issue</span>
                            <span>Armed Force Tribunal Issue</span>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="cardBottom">
                    <div className="rates">
                        <span>
                            ₹ 60
                        </span>/min
                        <p>Call charges</p>
                    </div>
                    <div className="actionBtn">
                        <button className="call"><IoCallOutline />Call</button>
                        <button className="call internetCall"><BsCameraVideo />Internet Call</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="cardTop">
                    <div className="profilePic">
                        <img src="images/7.jpg" alt="" />
                        <div className="availBadge">Available</div>
                    </div>
                    <div className="details">
                        <h4 className='cursor-pointer' >Uttkarsh Gautam</h4>
                        <div className="moreDetails">
                            <span><CiLocationOn />Agra, Uttar Pradesh</span>
                            <span><BsHandbag />7 Years of Experience</span>
                            <span><BsChatDots />Hindi, English</span>
                        </div>
                    </div>
                    <div className="options">
                        <div className="reviewBox">
                            <span>4.3 <AiFillStar /></span>
                            <span>800+ Reviews</span>
                        </div>
                        <div className="scheduleBtn"><AiOutlineCalendar />Schedule Call</div>
                    </div>
                </div>
                <div className="cardMiddle">
                    <div className="practiceAreas">
                        <span>
                            Practice Areas:
                        </span>
                        <div className="practiceAreaList">
                            <span>Consumer Court Issue</span>
                            <span>Accident & Insurance Issue</span>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="cardBottom">
                    <div className="rates">
                        <span>
                            ₹ 30
                        </span>/min
                        <p>Call charges</p>
                    </div>
                    <div className="actionBtn">
                        <button className="call"><IoCallOutline />Call</button>
                        <button className="call internetCall"><BsCameraVideo />Internet Call</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="cardTop">
                    <div className="profilePic">
                        <img src="images/6.jpg" alt="" />
                        <div className="availBadge">Available</div>
                    </div>
                    <div className="details">
                        <h4 className='cursor-pointer' >Himanshi Patel</h4>
                        <div className="moreDetails">
                            <span><CiLocationOn />Kanpur, Uttar Pradesh</span>
                            <span><BsHandbag />3 Years of Experience</span>
                            <span><BsChatDots />Hindi, English</span>
                        </div>
                    </div>
                    <div className="options">
                        <div className="reviewBox">
                            <span>4.1 <AiFillStar /></span>
                            <span>83 Reviews</span>
                        </div>
                        <div className="scheduleBtn"><AiOutlineCalendar />Schedule Call</div>
                    </div>
                </div>
                <div className="cardMiddle">
                    <div className="practiceAreas">
                        <span>
                            Practice Areas:
                        </span>
                        <div className="practiceAreaList">
                            <span>Divorce/Matrimonial Issue</span>
                            <span>Family & Inheritance Issue</span>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="cardBottom">
                    <div className="rates">
                        <span>
                            ₹ 25
                        </span>/min
                        <p>Call charges</p>
                    </div>
                    <div className="actionBtn">
                        <button className="call"><IoCallOutline />Call</button>
                        <button className="call internetCall"><BsCameraVideo />Internet Call</button>
                    </div>
                </div>
            </div>
            {/* <div className="card">
                <div className="cardTop">
                    <div className="profilePic">
                        <img src="images/robot.png" alt="" />
                        <div className="availBadge">Available</div>
                    </div>
                    <div className="details">
                        <h4 className='cursor-pointer' onClick={() => { handleProfile(data._id) }}>{data.fullname}</h4>
                        <div className="moreDetails">
                            <span><CiLocationOn />{data.address}</span>
                            <span><BsHandbag />{data.experience} Years of Experience</span>
                            <span><BsChatDots />{data.language ? data.language : "Hindi"}</span>
                        </div>
                    </div>
                    <div className="options">
                        <div className="reviewBox">
                            <span>{data.ratings} <AiFillStar /></span>
                            <span>{data.reviews} Reviews</span>
                        </div>
                        <div onClick={() => { scheduleCall(timing, data._id) }} className="scheduleBtn"><AiOutlineCalendar />Schedule Call</div>
                    </div>
                </div>
                <div className="cardMiddle">
                    <div className="practiceAreas">
                        <span>
                            Practice Areas:
                        </span>
                        <div className="practiceAreaList">
                            <span>{data.practiceArea}</span>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="cardBottom">
                    <div className="rates">
                        <span>
                            ₹ {data.ratepercall}
                        </span>/min
                        <p>Call charges</p>
                    </div>
                    <div className="actionBtn">
                        <button onClick={() => { handleCall(data.phone, RegisteredPhone) }} className="call"><IoCallOutline />Call</button>
                        {/* <button className="call internetCall"><BsCameraVideo />Internet Call</button> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="modal">
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
        </>
    )
}

export default Card