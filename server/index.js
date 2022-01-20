const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());


app.get("/api", (req, res) => {
    res.send("welcome to local app");
})

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
        subject: "Subject",
        html: `<h1>Hello SMTP Email ${text}</h1>`
    }

    transporter.sendMail(message, function(err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log('sent',info);
        }
      });

    res.send('success!');
});

app.listen(process.env.PORT || 4000, () => {
    console.log("port listning on port number 4000", process.env.PORT);
})