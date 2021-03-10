const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require("@sendgrid/mail");

require('dotenv').config();


sgMail.setApiKey(process.env.API_KEY)

const templateID = process.env.TEMPLATE_ID

// allow cors
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/booking', (req, res) => {
    const data = req.body
    const msg = {
        personalizations: [
            {
                to: [
                    {
                        email: data.emailaddress
                    }
                ],
                bcc: [
                    {
                        email: "thankgodegbo@gmail.com"
                    }
                ]
            }
        ],
        from: "book@packmyload.com",
        templateId: templateID,
        dynamic_template_data: data
    };
    sgMail.send(msg, (error, _) => {
        if (error) {
            res.status(error.code).send(error.response.body)
        } else {
            res.status(200).send("Mail sent successfully")
        }
    });
})

//Running the server on Port 3000 default
let PORT = process.env.PORT || 3002;
app.listen(PORT, () => { console.log(`App is running on Port ${PORT}`) });
