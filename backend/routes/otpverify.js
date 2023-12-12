const express = require("express");
const router = express.Router();
const textflow = require("textflow.js");

textflow.useKey("VqfmrSGQ9uWeNTqGsevwVQ5UurhLIMyfgD0sBt46BXxrmPSZewyLpl0pN4tW81YM");



router.post("/send-code", async (req, res) => {
    try {
        let {phone} = req.body;
        if(!phone.includes("+91") || !phone.includes("91")){
            phone = "+91" + phone;
        }
        const verificationOptions = {
            service_name: "Signup on Bharat Legal Hub is ",
            seconds: 600
        };
        const result = await textflow.sendVerificationSMS(phone, verificationOptions);   
        return res.status(200).json({message: "OTP sent successfully", result});
    } catch (error) {
        console.log(error);
    }
})

router.post("/verify-code", async (req, res) => {
    try {
        let {phone, code} = req.body;
        if(!phone.includes("+91") || !phone.includes("91")){
            phone = "+91" + phone;
        }
        const result = await textflow.verifyCode(phone, code);   
        if(result.valid){
            return res.status(200).json({message: "OTP verified successfully", result, success: true});
        }
        return res.status(403).json({message: "OTP verification failed", result, success: false});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;