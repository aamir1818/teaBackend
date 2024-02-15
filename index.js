require('dotenv').config()
//using the env file here
const express=require('express') //importing
const app=express()
const port=3000

app.get('/',(req,res)=>{    //if you get req then in response send Hello to the world
    res.send('Hello to the world')
})

app.get('/gmail',(req,res)=>{
    res.send('aamir.ansari641993@gmail.com')
})
app.get('/login',(req,res)=>{
    res.send('<h1 style=color:lime>Login Tea with coding</h1>')
})
app.listen(process.env.Port,()=>{
    console.log(`Example app listening on port ${port}`);
})