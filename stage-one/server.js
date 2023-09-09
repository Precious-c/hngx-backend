const express = require("express");
const app = express()
const PORT = 8000
const date = new Date()

const options = {weekday: 'long'};
let currentDay = date.toLocaleDateString('en-US', options);

app.get('/api', (req, res) => {
    res.json({
        slack_name: req.query.slack_name,
        currentDay: currentDay,
        utc_time: date.toISOString(),
        track: req.query.track,
        github_file_url: '',
        github_repo_url: '',
        status_code: 200
    })
}) 

app.listen(process.env.PORT || PORT, () => {
    console.log('Listening on port ' + PORT)
})