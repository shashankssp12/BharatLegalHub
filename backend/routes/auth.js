const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const authController = require("../controllers/auth/auth.controller");
const getAuthorize = require("../middlewares/getAuthorize");


// Routes to get current logged in user
router.get('/getuser', getAuthorize ,authController.GetUserDetailsRoute);


// Routes to Create a new User
router.post('/signup',[
    body('fullname', 'Enter a valid Name').isLength({min:3}),
    body('email', 'Enter a valid Email').isEmail(),
    body('phone', 'Enter a valid Phone Number').isLength({min:10}),
    body('password', 'Password must contain 8 characters').isLength({min:8}),
], authController.RegisterRoute);


// Routes to Login a User  
router.post('/login',[
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must contain 8 characters').isLength({min:8}),
], authController.LoginRoute);


// Routes to Register a Advocate
router.post('/register-advocate',[
    body('fullname', 'Enter a valid Name').isLength({min:3}),
    body('email', 'Enter a valid Email').isEmail(),
    body('phone', 'Enter a valid Phone Number').isLength({min:10}),
    body('password', 'Password must contain 8 characters').isLength({min:8}),
], authController.RegisterAdvocateRoute);

// Routes to get all advocates
router.get('/get-advocates',authController.GetAdvocatesRoute); 

// Routes to get a single advocate
router.post("/schedule-call", getAuthorize, authController.ScheduleCallRoute)

// Routes to get a schedule call
router.get("/get-schedule-call", getAuthorize, authController.GetScheduleCallRoute)

router.post("/getAllCalls", authController.GetAllCallsRoute)

// Routes to get a specific advocate
router.get("/get-advocate", authController.GetAdvocateRoute)

router.get("/getMyData", authController.GetMyDataRoute)

// Routes for forgot password
router.post('/forgotpassword',[
    body('email', 'Enter a valid Email').isEmail(),
], authController.ForgotPasswordRoute);

// Routes for reset password
router.post('/resetpassword',[
    body('password', 'Enter a valid Password').isLength({min:8}),
], authController.ResetPasswordRoute);



module.exports = router;