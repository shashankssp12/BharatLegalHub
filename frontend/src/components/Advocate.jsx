import React, { useEffect, useState, useContext, useRef } from 'react'
import StateContext from '../context/StateContext'

const Advocate = () => {
    const ref = useRef(null)
    const ref2 = useRef(null)
    const [info, setInfo] = useState({ fullname: "", email: "", password: "", address: "", desc: "", barCouncilId: "", practiceArea: "", year: "" })
    const context = useContext(StateContext)
    const [otp, setOtp] = useState("");
    const [phone, setPhone] = useState("")
    const [files, setFiles] = useState([])
    const [gender, setGender] = useState("")
    // const [viewCities, setViewCities] = useState(false)

    const { showCities, sendCode, verifyCode, showOtp, verified, currentUser, RegisterAdvocate } = context


    const showVerifyOtp = (e) => {
        e.preventDefault();
        if (phone.length !== 10) {
            alert("Please Enter a Valid Phone Number")
            return
        }
        sendCode(phone, e)
    }
    const verifyOtp = (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            alert("Please Enter a Valid OTP")
            return
        }
        verifyCode(phone, otp, e, "Advocate")
    }

    const handleFileChange = (e) => {
        ref2.current.src = URL.createObjectURL(e.target.files[0]);
        setFiles(e.target.files);
    }


    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.innerText = "Registering..."
        let profilePic;
        if (files.length !== 0) {
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("upload_preset", "platform");
            formData.append("cloud_name", "dfn0nvt6t");
            const response = await fetch(`https://api.cloudinary.com/v1_1/dfn0nvt6t/image/upload`, {
                method: "post",
                body: formData
            });
            const data = await response.json();
            profilePic = data.secure_url;
        }
        if (profilePic === null) {
            profilePic = "/images/user.png"
        }
        let allData = { ...info, gender, profilePic, phone }
        RegisterAdvocate(allData, e)
    }


    return (
        <>
            <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
                <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
                    <div className="block lg:hidden sticky inset-0">
                        <button id="menu-toggle" className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-yellow-600 appearance-none focus:outline-none">
                            <svg className="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style={{ top: "6em" }} id="menu-content">
                        <ul className="list-reset py-2 md:py-0">
                            <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent font-bold border-yellow-600">
                                <a href='#section1' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                    <span className="pb-1 md:pb-0 text-sm">Register With Phone Number</span>
                                </a>
                            </li>
                            <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
                                <a href='#section2' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                    <span className="pb-1 md:pb-0 text-sm">Personal Details</span>
                                </a>
                            </li>
                            <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
                                <a href='#section3' className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                    <span className="pb-1 md:pb-0 text-sm">Professional Details</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <section className="w-full lg:w-4/5">

                    <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
                        Register Yourself as an Advocate
                    </h1>

                    <hr className="bg-gray-300 my-12" />

                    <h2 id='section1' className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">SignUp with Mobile Number</h2>

                    <div className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
                        {!showOtp ? <div className="flex flex-col">
                            <label htmlFor="mobile" className="text-sm font-semibold text-gray-700">Mobile Number</label>
                            <input type="number" disabled={verified ? true : false} onChange={(e) => { setPhone(e.target.value) }} name="mobile" id="mobile" placeholder='Enter Your Phone Number' className="border border-gray-300 w-1/3 rounded-md px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                        </div> : ""}
                        {
                            verified &&
                            <input type="number" value={phone} name="mobile" id="mobile" placeholder='Enter Your Phone Number' className="border border-gray-300 w-1/3 rounded-md px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                        }
                        {
                            showOtp ?
                                <div className="flex flex-col">
                                    <label htmlFor="mobile" className="text-sm font-semibold text-gray-700">OTP</label>
                                    <input onChange={(e) => { setOtp(e.target.value) }} type="text" name="otp" id="otp" placeholder='Enter OTP sent to your number' className="border border-gray-300 w-1/3 rounded-md px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                                </div> : ""
                        }
                        {
                            !showOtp ?
                                <button onClick={showVerifyOtp} className="getOtp">Get OTP</button> : ""
                        }
                        {
                            showOtp ?
                                <button onClick={verifyOtp} className="getOtp">Verify OTP</button> : ""
                        }

                    </div>

                    <hr className="bg-gray-300 my-12" />

                    <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Personal Details</h2>

                    <div id='section2' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                        <form>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                        Profile Picture
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input onChange={handleFileChange} ref={ref} accept='image/*' className="form-input hidden border-2 w-1/2 p-2 focus:bg-white" id="my-textfield" type="file" placeholder='Enter your full name' />
                                    <img ref={ref2} onClick={() => { ref.current.click() }} className='cursor-pointer userProfile' src="/images/user.png" alt="" />
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                        Short Bio
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <textarea onChange={handleChange} name='desc' value={info.desc} className="form-input border-2 w-1/2 p-2 block focus:bg-white" id="my-textfield" type="text" placeholder='Tell us about yourself' />
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                        Full Name
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input onChange={handleChange} name='fullname' value={info.fullname} className="form-input border-2 w-1/2 p-2 block focus:bg-white" id="my-textfield" type="text" placeholder='Enter your full name' />
                                </div>
                            </div>

                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                        Email
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input onChange={handleChange} name='email' value={info.email} className="form-input border-2 w-1/2 p-2 block  focus:bg-white" id="my-textfield" type="text" placeholder='Enter your email address' />
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                        Password
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input onChange={handleChange} value={info.password} name='password' className="form-input border-2 w-1/2 p-2 block  focus:bg-white" id="my-textfield" type="text" placeholder='Create a strong password' />
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                        Gender
                                    </label>
                                </div>
                                <div className="md:w-2/3 genderBox">
                                    <div>
                                        <input onClick={(e) => { setGender(e.target.value) }} type="radio" id='male' name="gender" value={"Male"} />
                                        <label htmlFor='male'>Male</label>
                                    </div>
                                    <div>
                                        <input onClick={(e) => { setGender(e.target.value) }} type="radio" id='female' name="gender" value={"Female"} />
                                        <label htmlFor='female'>Female</label>
                                    </div>
                                    <div>
                                        <input onClick={(e) => { setGender(e.target.value) }} type="radio" id='other' name="gender" value={"Other"} />
                                        <label htmlFor='other'>Others</label>
                                    </div>
                                </div>
                            </div>



                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                        Address
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input onChange={handleChange} name='address' value={info.address} className="form-input border-2 w-1/2 p-2 block  focus:bg-white" id="my-textfield" type="text" placeholder='Enter Your Address' />
                                </div>
                            </div>


                            {/* <div className="md:flex md:items-center">
                                <div className="md:w-1/3"></div>
                                <div className="md:w-2/3">
                                    <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Next
                                    </button>
                                </div>
                            </div> */}
                        </form>

                    </div>

                    <hr className="bg-gray-300 my-12" />

                    <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Professional Details</h2>

                    <div id='section3' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                        <form>

                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                        Bar Council Id
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input onChange={handleChange} value={info.barCouncilId} name='barCouncilId' className="form-input border-2 w-1/2 p-2 block  focus:bg-white" id="my-textfield" type="text" placeholder='Enter Your Bar Council Id' />
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                        Practice Area
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input onChange={handleChange} value={info.practiceArea} name='practiceArea' className="form-input border-2 w-1/2 p-2 block  focus:bg-white" id="my-textfield" type="text" placeholder='Practicing Areas (Sperate using comma,)' />
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                        Year
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input onChange={handleChange} value={info.year} name='year' className="form-input border-2 w-1/2 p-2 block  focus:bg-white" id="my-textfield" type="text" placeholder='Enter Practicing Year' />
                                </div>
                            </div>

                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3"></div>
                                <div className="md:w-2/3">
                                    <button onClick={handleSubmit} className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>



                </section>
            </div>
        </>
    )
}

export default Advocate