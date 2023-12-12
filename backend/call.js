
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');



const app = express();
const port = process.env.PORT || 3500;

app.use(bodyParser.urlencoded({ extended: false }));

// Twilio credentials
const accountSid = 'ACca27f09d0e07e7f11445eaa3afc07daf';
const authToken = 'd9998ff26eb8d5ecca694daa2a7d8fce';
const client = new twilio(accountSid, authToken);

// Create a conference room

app.get

app.post('/create-conference', (req, res) => {
    const twilioResponse = new twilio.twiml.VoiceResponse();
    twilioResponse.say('You are being connected to a conference call.');

    const dial = twilioResponse.dial();
    dial.conference('anonymous-conference-room');

    res.type('text/xml');
    res.send(twilioResponse.toString());
});
async function initiateCallToConferenceRoom(from, to) {
    try {
        await client.calls.create({
            url: 'https://a8a8-45-127-226-86.ngrok-free.app/create-conference', // This should be the endpoint you created in step 3
            to: "+919430566516",
            from: '+18162565131',
        });

        await client.calls.create({
            url: 'https://a8a8-45-127-226-86.ngrok-free.app/create-conference', // This should be the endpoint you created in step 3
            to: "+919068566454",
            from: '+18162565131',
        });
    } catch (error) {
        console.error(error);
    }
}
app.get("/run", (req, res) => { 
    const {from,to} = req.body
    initiateCallToConferenceRoom(from, to);
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Function to initiate a call to the conference room


// Call the function to initiate the calls

