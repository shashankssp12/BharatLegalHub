const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { validationResult } = require('express-validator');
const User = require('../../models/Citizen');
const nodemailer = require('nodemailer');
const JWT_TOKEN = process.env.JWT_TOKEN;
dotenv.config();
const Lawyer = require('../../models/Lawyer');
const CallSchedule = require('../../models/CallSchedule');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASS
    }
});


module.exports = {
    // Register Route
    RegisterRoute: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Check if user with this email exists already
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "This email has already existed. Try Login", success: false })
            }
            user = await User.findOne({ phone: req.body.phone });
            if (user) {
                return res.status(400).json({ error: "This phone number has already existed. Try Login", success: false })
            }

            // Encrypting password
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);


            //  Creating a new user
            user = await User.create({ ...req.body, password: secPass });

            const data = {
                user: {
                    id: user.id
                }
            }

            // Creating a token
            const authToken = jwt.sign(data, JWT_TOKEN)

            // Returning the token as response
            res.json({ authToken, success: true })

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    },

    // Login Route
    LoginRoute: async (req, res) => {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Getting email and password from request body
        const { email, password } = req.body;
        try {
            // Finding user with email
            let user = await User.findOne({ email });

            // If no user exists with this email
            if (!user) {
                success = false;
                return res.status(400).json({ error: "Email or password you enter is incorrect." })
            }

            // Comparing password with the encrypted password
            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                success = false
                return res.status(400).json({ error: "Email or password you enter is incorrect." })
            }

            // Creating a token
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_TOKEN)
            success = true;

            // Returning the token as response
            res.json({ success, authToken })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    },
    // Register Advocate Route
    RegisterAdvocateRoute: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Check if user with this email exists already
        try {
            let user = await Lawyer.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "This email has already existed. Try Login", success: false })
            }
            user = await Lawyer.findOne({ phone: req.body.phone });
            if (user) {
                return res.status(400).json({ error: "This phone number has already existed. Try Login", success: false })
            }

            // Encrypting password
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);


            //  Creating a new user
            user = await Lawyer.create({ ...req.body, password: secPass });

            const data = {
                user: {
                    id: user.id
                }
            }

            // Creating a token
            const authToken = jwt.sign(data, JWT_TOKEN)

            // Returning the token as response
            res.json({ authToken, success: true })

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }

    },

    ScheduleCallRoute: async (req, res) => {
        let success = false;
        try {
            const { id } = req.user;
            const { lawyer, time } = req.body;
            let call = await CallSchedule.create({ citizen: id, lawyer, time });
            success = true;
            res.status(200).json({ success, call });
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    },

    GetScheduleCallRoute: async (req, res) => {
        let success = false;
        try {
            const { id } = req.user;
            const { lawyer } = req.body;
            let call = await CallSchedule.find({ citizen: id, lawyer }).populate("lawyer", "-password");
            success = true;
            res.status(200).json({ success, call });
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    },

    GetAllCallsRoute: async (req, res) => {
        let success = false;
        try {
            let call = await CallSchedule.find({ lawyer: "650f1fb85c18f31103e153df" }).populate("citizen", "-password");
            success = true;
            res.status(200).json({ success, call });
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    },

    GetAdvocateRoute: async (req, res) => {
        let success = false;
        try {
            const { advocate_id } = req.query

            let call = await Lawyer.findById(advocate_id).select("-password");
            success = true;
            res.status(200).json({ success, call });
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    },

    GetMyDataRoute: async (req, res) => {
        let success = false;
        try {
            let user = await Lawyer.findById("650f1fb85c18f31103e153df").select("-password");
            success = true;
            res.status(200).json({ success, user });
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    },


    GetAdvocatesRoute: async (req, res) => {
        let success = false;
        try {
            let advocates = await Lawyer.find().select("-password");
            if (!advocates) {
                return res.status(404).json({ success, msg: "No Advocate Found" });
            }
            success = true;
            return res.status(200).json({ success, advocates });

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    },

    // Get User Details Route
    GetUserDetailsRoute: async (req, res) => {
        let success = false;
        try {
            const { id } = req.user;

            let user = await User.findById(id).select("-password");
            if (!user) {
                return res.status(404).json({ success, msg: "User not Found" });
            }
            success = true;
            return res.status(200).json({ success, user });

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    },

    //  Forgot Password Route
    ForgotPasswordRoute: async (req, res) => {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ success, msg: "User not Found" });
        }

        // Generating a token for user with 10 minutes of expiration time
        const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '10m' });

        const mailOptions = {
            from: process.env.MAIL,
            to: user.email,
            subject: 'Reset Password',
            html: `
            <h2>Please click on given link to reset your password</h2>
            <a href="http://localhost:3000/resetpassword/?sessionId=${token}">Reset</a>
            `
        };
    },

    // Reset Password Route
    ResetPasswordRoute: async (req, res) => {
        let success = false;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const sessionId = req.query.sessionId;
        const { password } = req.body;

        if (!sessionId) {
            return res.status(404).json({ success, msg: "User not Found" });
        }
        try {
            const user = await User.findOne({ _id: jwt.verify(sessionId, process.env.RESET_PASSWORD_KEY)._id });
            if (!user) {
                return res.status(404).json({ success, msg: "User not Found" });
            }

            // Encrypting password
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(password, salt);

            user.password = secPass;
            await user.save();
            success = true;
            return res.status(200).json({ success, msg: "Password Updated Successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success, msg: "Internal Server Error" });
        }

    }
}