require ('dotenv').config();

const express = require('express')
const app = express()

// Color Page
app.get('/:places', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>404 NOT here!!!!</h1>
        </body>
    `)
})

app.get('*', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
                <h1>404 NOT FOUND</h1>
            </div>
        </body>
    `)
})

app.listen(process.env.PORT)
