const express = require('express')
const app = express()
const {workinghours}= require('./middl/time')
app.get('/',(req,res)=>{
    res.send('Yassine Web Site')
})



app.use(express.static(__dirname+'./pages'))


app.get('/home',workinghours,(req,res)=>{
    res.sendFile(__dirname+'/pages/Home.html')
    
})


app.get('/about',workinghours,(req,res)=>{
    res.sendFile(__dirname+'/pages/About.html')
})

app.get('/contact',workinghours,(req,res)=>{
    res.sendFile(__dirname+'/pages/Contact.html')
})



















port=3000
app.listen(port,()=>{
    console.log('from index ')
})