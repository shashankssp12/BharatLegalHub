import React, { useEffect, useState, useContext } from 'react'
import "./styles/Signup.css"
import stateContext from '../context/StateContext';
import Advocate from './Advocate.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { MdPassword } from "react-icons/md"
import UserSignup from './UserSignup.jsx';

const SignUp = () => {
  const context = useContext(stateContext)
  const [phone, setPhone] = useState("")
  const [otp, setOTP] = useState("")
  const navigate = useNavigate();
  const [showAdvocate, setShowAdvocate] = useState(false)
  const [currentServices, setCurrentServices] = useState("Advocates");
  const [showModal, setShowModal] = useState(false);
  const { currentUser, sendCode, showOtp, verifyCode, showSignupForm } = context;

  useEffect(() => {
    if (currentUser) {
      navigate("/")
    }
  }, []);



  const handleChoose = (e) => {
    let services = document.querySelectorAll(".services")
    services.forEach(service => {
      service.classList.remove("active")
    })
    e.target.classList.add("active");
    setCurrentServices(e.target.innerText);
  }

  const handleServiceRegister = () => {
    setShowModal(false);
    navigate(`/signup?service=${currentServices}`)
    if (currentServices === "Advocates") {
      setShowAdvocate(true)
    }
  }

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
    verifyCode(phone, otp, e)
  }


  return (
    <>
      {
        showAdvocate ? <Advocate /> : !showSignupForm ?
          <div className="h-screen md:flex relative overflow-hidden">
            <div className={`floatingModal ${showModal ? "" : "hidden"}`}>
              <div className="z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-orange-600 ">
                        Select Your Service Type
                      </h3>
                      <button onClick={() => { setShowModal(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-orange-700 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-orange-600 dark:hover:text-white" data-modal-hide="defaultModal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="flex gap-10 items-center flex-col ">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <span onClick={handleChoose} className="text-gray-900 services active font-medium">Advocates</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <span onClick={handleChoose} className="text-gray-900 services font-medium">Document Writers</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <span onClick={handleChoose} className="text-gray-900 services font-medium">Arbitrators</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <span onClick={handleChoose} className="text-gray-900 services font-medium">Mediators</span>
                        </label>
                      </div>

                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button onClick={handleServiceRegister} data-modal-hide="defaultModal" type="button" className="text-white bg-[#f97316] hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Next</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr i justify-around items-center hidden">
              <img style={{
                position: "absolute", left: "0", top: "-10%"
              }} src="/images/loginbanner.jpg" alt="" />
              <div>
                <h1 className="text-white font-bold text-4xl font-sans">BharatLegalHub</h1>
                <p className="text-white mt-1">The most popular peer to peer emarket for legal services</p>
              </div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white relative">
              {
                !showOtp ?
                  <div onClick={() => { setShowModal(true); }} className="upperBtn bg-gradient-to-tr from-[#f97316] text-white cursor-pointer to-[#f97316]">Click Here to Create a Service Account</div> : ""
              }
              <form className="bg-white">
                <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello</h1>
                <p className="text-sm font-normal text-gray-600 mb-7">Welcome To Bharat Legal Hub</p>
                {
                  !showOtp &&
                  <div className="flex items-center border-2 py-2 px-3 w-[25rem] rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd" />
                    </svg>
                    <input onChange={(e) => { setPhone(e.target.value) }} value={phone} className="pl-2 outline-none w-full border-none" type="text" placeholder="Enter a Mobile Number" />
                  </div>
                }
                {
                  !showOtp &&
                  <button onClick={showVerifyOtp} className="block w-full bg-[#f97316] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Send Otp</button>
                }
                {
                  showOtp &&
                  <div className="flex items-center border-2 py-2 px-3 w-[25rem] rounded-2xl mb-4">
                    <MdPassword />
                    <input onChange={(e) => { setOTP(e.target.value) }} value={otp} className="pl-2 outline-none w-full border-none" type="text" name="" id="" placeholder="Enter otp sent to your number" />
                  </div>
                }{
                  showOtp &&
                  <button onClick={verifyOtp} className="block w-full bg-[#f97316] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Verify</button>
                }
                <Link to={"/login"} className="text-sm text-center ml-2 hover:text-orange-500 cursor-pointer">Already Have an account? Login</Link>
              </form>
            </div>
          </div> : <UserSignup />
      }

    </>
  )
}

export default SignUp