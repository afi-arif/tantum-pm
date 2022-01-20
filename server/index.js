const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.post("/send_mail", cors(), async (req, res) => {
    let {text} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "3gwebtrain@gmail.com",
            pass: "sugnfmdrdmnzkgzg"
        }
    });

    let message = {
        from: "from@email.com",
        to: "3gwebtrain@gmail.com",
        subject: "Enquiry from Deane Project Management",
        html: `
        <hr />
            <h1>Request for: ${text.option||"No title"}</h1>
            <span>Name: ${text.username}</span><br/>
            <span>Email: ${text.email}</span><br/>
            <span>Phone: ${text.phone||"No phone"}</span><br/>
            <span>Message:</span><br/>
            <p>${text.message||"No message"}</p>
        <hr />
        `
    }

    transporter.sendMail(message, function(err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log('sent',info);
        }
      });

    res.send(200);
});

app.listen(process.env.PORT || 4000, () => {
    console.log("port listning on port number 4000", process.env.PORT);
})