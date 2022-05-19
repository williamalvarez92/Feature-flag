let express = require('express')
let mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'
const path = require('path');
let app = express();
const databaseName = "test";


const users = require('./db/example_users.json')
const featuresInfo = require('./db/features.json')


let userDetails = []
const pickRandomUser = () => {
    userDetails = []
    let userRandomized = users[Math.floor(Math.random() * users.length)]
    userDetails.push(userRandomized)
}

let featuresToogle = {
    "SuperCoolFeature": true,
    "MarketingBanner": false,
    "SimplifiedNavBar": false,
    "EnhancedDashboardFeature": false,
    "NewUserOnboardingJourney": false
}
    
const startServer = async () => {

    try {
        const url = `mongodb://127.0.0.1/${databaseName}`;
        mongoose.connect(url, { useNewUrlParser: true });
    
        app.use(express.json())
    
    
        app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'))
        })

        app.use((req, _res, next) => {
        console.log(`Request received: ${req.method} - ${req.url}`)
        next()
        })

        app.get('/result', function (_req, res) {
        pickRandomUser()
        console.log('User =>', userDetails[0].email)
        console.log('Country =>', userDetails[0].location)


        if (userDetails[0].email === "mike@example.com")
        {
            featuresToogle.SuperCoolFeature = false
            res.send({"user":userDetails,featuresToogle})
        }
        else  {
            res.send({"user":userDetails,featuresToogle})
        }
        })
    
        app.use((_req, res) => {
        return res.status(404).json({ message: 'Path not found' })
        })
    
        const server = app.listen(PORT, HOST, () => console.log(`🚀 Server up and running on PORT ${PORT}`)) // app.listen takes the port and starts the server up using express
        server.timeout = 1000
    
    } catch (err) {
        console.log('Something went wrong - couldnt connect')
        console.log(err)
    }
    }
    
    startServer()

module.exports = app;
