import React, { useEffect, useState } from "react";
import StateContext from "./StateContext";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom"

const StateProvider = ({ children }) => {
    const navigate = useNavigate();
    const [showOtp, setShowOtp] = useState(false)
    const host = "http://localhost:1000"
    const [currentUser, setCurrentUser] = useState("");
    const [showSignupForm, setShowSignupForm] = useState(false)
    const [badges, setBadges] = useState([])
    const [verified, setVerified] = useState(false)
    const [advocates, setAdvocates] = useState([])
    const [RegisteredPhone, setRegisteredPhone] = useState("")

    useEffect(() => {
        let data = Cookie.get("RegisteredPhone");
        let authToken = localStorage.getItem("authToken");

        if (authToken) {
            setCurrentUser(authToken)
        }
        if (data) {
            setRegisteredPhone(data)
            setShowSignupForm(true)
        }

    }, []);

    const getBadges = async () => {
        const getData = await fetch("emblem.json");
        const result = await getData.json();
        setBadges(result);
    }
    const getAdvocates = async () => {
        const getData = await fetch(`${host}/api/auth/get-advocates`);
        const result = await getData.json();
        if (result.success) {
            setAdvocates(result.advocates);
        }
    }

    const sendCode = async (phone, e) => {
        e.target.innerText = "Sending..."
        const response = await fetch(`${host}/api/otp/send-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone }),
        });
        const json = await response.json();
        if (json.result.ok) {
            setShowOtp(true)
            e.target.innerText = "Send Otp"
        }
    }

    const verifyCode = async (phone, code, e, opt) => {
        e.target.innerText = "Verifying..."
        const response = await fetch(`${host}/api/otp/verify-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone, code }),
        });
        const json = await response.json();
        if (json.result.ok) {
            Cookie.set("RegisteredPhone", phone)
            if (opt !== "Advocate") {
                setShowSignupForm(true)
            }
            e.target.innerText = "Verified"
            e.target.disabled = true;
            setVerified(true);
            setShowOtp(false)
        }
    }

    const SignUp = async (allData, e) => {
        e.target.innerText = "Signing Up..."
        const response = await fetch(`${host}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allData),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("authToken", json.authToken)
            setCurrentUser(json.authToken)
            navigate("/")
        }
    }

    const LoginUser = async (allData, e) => {
        e.target.innerText = "Logging In..."
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allData),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("authToken", json.authToken)
            setCurrentUser(json.authToken)
            navigate("/")
        }
    }

    const RegisterAdvocate = async (allData, e) => {
        let experience = allData.year;
        let year = new Date().getFullYear();
        let exp = year - experience;
        allData.experience = exp;
        const response = await fetch(`${host}/api/auth/register-advocate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allData),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("authToken", json.authToken)
            setCurrentUser(json.authToken)
            navigate("/")
        }
    }

    const scheduleCall = async (time, lawyer) => {
        const response = await fetch(`${host}/api/auth/schedule-call`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorize': localStorage.getItem("authToken")
            },
            body: JSON.stringify({ time, lawyer }),
        });
        const json = await response.json();
        if (json.success) {
            alert("Call Scheduled")
            navigate("/")
        }
    }

    const handleCall = async (from, to) => {
        const response = await fetch("http://localhost:3500/run", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorize': localStorage.getItem("authToken")
            },
            body: JSON.stringify({ from, to }),
        });
        const json = await response.json();
        if (json.success) {

        }
    }


    const handleLogout = () => {
        Cookie.remove("RegisteredPhone");
        localStorage.removeItem("authToken")
        setCurrentUser(null);
    }

    return (
        <StateContext.Provider value={{ handleLogout, currentUser, sendCode, verifyCode, showOtp, showSignupForm, SignUp, getBadges, badges, LoginUser, verified, RegisterAdvocate, advocates, getAdvocates, scheduleCall, handleCall, RegisteredPhone }} >
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;
