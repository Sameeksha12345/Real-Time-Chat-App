const express=require('express')
const path=require('path')
const app= express()
const http=require('http').createServer(app)

const PORT=process.env.PORT || 3000

http.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
app.use(express.static(path.join(__dirname, "publicfolder")));

//app.use(express.static(__dirname + "/publicfolder"))

//now create an rout and get request if url requesting 
app.get('/',(req,res)=>{
//res.send("hello word")
res.sendFile(__dirname + '/index.html')
})

//socket and which i defined the abave http is a server and we can pass into  the socket function
const io=require('socket.io')(http)//setup socket.io in server.js
//socket server ko bhi pta chlega ki hame kaun se server pr kaam krn hai 
io.on('connection',(socket)=>{
console.log('connected')
//client side se jo event emit kraya tha aab listten krna hai toh below:
socket.on('message',(msg)=>{
    socket.broadcast.emit('message',msg)
    //ye dega message hme jo client ki taraf se aa raha hai aur jo user ka naame hai
   // console.log(msg)//output aa raha terminal pr samii username and message :hii ye server se ho raha hai 
})
})

//dom is a screen 

//console.log(msg);
//server pr show krega toh ye user name aur message diikhega terminal pr

//eas line ka mtlb hai ki mtlb ki server saare users ko message eak hi send
//krega siwae usko chodkr jisne send kiya ho aur eske liye do tab pe click kiya localhost:3000 alg alg naam 
//daala fir message send kiya 


//io.on(connection) se koi bhi browser connect ho jayega ya client connect ho jayega 
//toh ye function call ho jayegi

//output aa raha terminal pr samii username and message :hii ye server se ho raha hai 






















