import React, { useEffect, useState, useContext, useRef } from 'react'
import StateContext from '../context/StateContext'
import Cookies from 'js-cookie'

const Advocate = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const [registeredPhoneNum, setRegisteredPhoneNum] = useState("")
    const context = useContext(StateContext)
    const [states, setStates] = useState([])
    const [selectedState, setSelectedState] = useState("")
    const [files, setFiles] = useState([]);
    const [gender, setGender] = useState("");

    const [info, setInfo] = useState({ desc: "", fullname: "", email: "", password: "", address: "" })
    // const [viewCities, setViewCities] = useState(false)

    const { cities, showCities, showSignupForm, SignUp } = context


    useEffect(() => {
        fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
            .then(res => res.json())
            .then(data => {
                setStates(data.states)
            })
            .catch(err => console.log(err))

        if (selectedState) {
            showCities(selectedState)
        }
        let registeredPhone = Cookies.get('RegisteredPhone')
        if (registeredPhone) {
            setRegisteredPhoneNum(registeredPhone);
        }

    }, [selectedState]);

    const handleFileChange = async (e) => {
        ref2.current.src = URL.createObjectURL(e.target.files[0]);
        setFiles(e.target.files);

    }
    const handleSignup = async (e) => {
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
        let allData = { ...info, gender, profilePic, phone: registeredPhoneNum }
        SignUp(allData, e)
    }

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
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
                        </ul>
                    </div>
                </div>
                <section className="w-full lg:w-4/5">

                    <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
                        Register Yourself
                    </h1>

                    <hr className="bg-gray-300 my-12" />

                    <h2 id='section1' className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">SignUp with Mobile Number</h2>

                    <div className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
                        {/* input form with a get otp button */}
                        <div className="flex flex-col">
                            <label htmlFor="mobile" className="text-sm font-semibold text-gray-700">Mobile Number</label>
                            <input type="text" disabled value={registeredPhoneNum} name="mobile" id="mobile" placeholder='Enter Your Phone Number' className="border border-gray-300 w-1/3 rounded-md px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                        </div>
                        <button disabled className="verified">Verified</button>

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
                                    <textarea value={info.desc} onChange={handleChange} className="form-input border-2 w-1/2 p-2 block focus:bg-white" id="my-textfield" type="text" placeholder='Tell us about yourself' name='desc' />
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                        Full Name
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input value={info.fullname} name='fullname' onChange={handleChange} className="form-input border-2 w-1/2 p-2 block focus:bg-white" id="my-textfield" type="text" placeholder='Enter your full name' />
                                </div>
                            </div>

                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                        Email
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input value={info.email} name='email' onChange={handleChange} className="form-input border-2 w-1/2 p-2 block  focus:bg-white" id="my-textfield" type="text" placeholder='Enter your email address' />
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                        Password
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input value={info.password} name='password' onChange={handleChange} className="form-input border-2 w-1/2 p-2 block  focus:bg-white" id="my-textfield" type="password" placeholder='Create a strong password' />
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

                            {/* <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                        State
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <select onChange={(e) => { showCities(e.target.value) }} className="form-select block w-1/2" id="my-select">
                                        {
                                            states && states.map((state, index) => {
                                                return <option key={index} value={state.state_id}>{state.state_name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div> */}
                            {/* <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                        City
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <select className="form-select block w-1/2" id="my-select">
                                        {
                                            cities && cities.map((state, index) => {
                                                return <option key={index} value={state.state_id}>{state.state_name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div> */}

                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                        Address
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input onChange={handleChange} value={info.address} name='address' className="form-input border-2 w-1/2 p-2 block  focus:bg-white" id="my-textfield" type="text" placeholder='Enter Your Address' />
                                </div>
                            </div>


                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3"></div>
                                <div className="md:w-2/3">
                                    <button onClick={handleSignup} className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Next
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