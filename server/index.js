//import express into our file
const express = require('express')

//create a new express application
const app = express();

//define part our server will run on
const port = 3000


// allow static assests in public folder
app.use(express.static('public'))

const root = require('path').join(_dirname, '../client', 'dist')
app.use(express.static(root))

app.get('/',(req, res)=>{
    res.sendFile('index.html', { root })
})


//define our server routes

app.get('/test', (req, res)=>{
//do something when the server processer this request

//send back a response to the clinet 
res.send("Server is operational");

})


// run our server to listen at the port we defined

app.listen(port, ()=>{
    console.log('Server is running on port 3000' )
})

