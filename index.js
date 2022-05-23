let express = require('express')
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'
const path = require('path');
let app = express();


const users = require('./db/example_users.json')
const featuresInfo = require('./db/features.json')

let featuresToogle = []
let userDetails = []
const pickRandomUser = () => {
    userDetails = []
    let userRandomized = users[Math.floor(Math.random() * users.length)]
    userDetails.push(userRandomized)
}

const gettingFeatures = () => {
featuresToogle=[]
pickRandomUser()
for (let i=0; i < featuresInfo.length; i++){
    let randomNumber = Math.random()
    if (randomNumber < featuresInfo[i].ratio){
    if (featuresInfo[i].includedCountries.includes(userDetails[0].location) || featuresInfo[i].enabledEmails.includes(userDetails[0].email)){
        featuresToogle.push(featuresInfo[i].name)
    } else if (featuresInfo[i].excludedCountries.includes(userDetails[0].location)) {
    }
}
}}

    
const startServer = async () => {
    try {
        app.use(express.json())
    
        app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'))
        }),

        app.get('/result', function (_req, res) {
        gettingFeatures()
        return res.send({"user":userDetails,featuresToogle})
    }),

        app.use((req, _res, next) => {
            console.log(`Request received: ${req.method} - ${req.url}`)
            next()
            })
    
        app.use((_req, res) => {
        return res.status(404).json({ message: 'Path not found' })
        })
    
        const server = app.listen(PORT, HOST, () => console.log(`🚀 Server up and running on PORT ${PORT}`))
        server.timeout = 1000
    
    } catch (err) {
        console.log('Something went wrong - couldnt connect')
        console.log(err)
    }
    }
    
    startServer()

module.exports = app;
