const express = require("express");
const app = express()
const PORT = 8000
const date = new Date()

const options = {weekday: 'long'};
let currentDay = date.toLocaleDateString('en-US', options);

app.get('/', (req, res) => {
    res.send("Usage Endpoint: https://hngx-backend1.onrender.com/api/api?slack_name=example_name&track=backend")
}) 
app.get('/api', (req, res) => {
    res.json({
        slack_name: req.query.slack_name,
        currentDay: currentDay,
        utc_time: date.toISOString(),
        track: req.query.track,
        github_file_url: 'https://github.com/Precious-c/hngx-backend/blob/main/stage-one/server.js',
        github_repo_url: 'https://github.com/Precious-c/hngx-backend/tree/main/stage-one',
        status_code: 200
    })
}) 

app.listen(process.env.PORT || PORT, () => {
    console.log('Listening on port ' + PORT)
})