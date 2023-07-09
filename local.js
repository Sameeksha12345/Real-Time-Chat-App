//set up socket.io in clent.js 
//now we have a variable io we used now before in index.html write this line <script src="/socket.io/socket.io.js"></script>
//use io variable
//and ye io aa raha hai client library se
const socket=io() 
//terminal pr connected bata raha toh koi bhi browser connect ho sakta hai 

//client send message logic in clent.js below:
//eak prompt open hokr aayega aur fir usme user name daal denge and message type jo bhi krenge toh usko send
//bhi krpayyenge 
let name1;
let textarea=document.querySelector('#textarea')
let messageArea=document.querySelector('.message_area')

do{//prompt k liye lgaya 
   name1 = prompt('please enter your name')
}while(!name1)//jb tk user  name n d de prompt dete rehne hai
//message type jo bhi krenge aur jb enter kre toh send ho message  toh uske liye get krenge text
//area ko line likhege and humne id di thi textarea k liye #textarea let textarea=document.querySelector('#textarea')
//eske baad likhege below:
textarea.addEventListener('keyup',(e)=>{
    //yaha pr recieve ho ajyegi event keyup ka mtlb koi bhi key press
    //krenge keyboard ki toh event trigger hoga 
if(e.key==='Enter'){//agr enter key tb hi send krna message 
    sendMessage(e.target.value)//jo bhi textarea k andr function hai wo pass ho jayega esko 
}
})
//now we have to create the functon sendMessage and message ko send kaise krna hsi logic rehaga eske andr
function sendMessage(message){
    let msg={//object banaya hai 
        user:name1,
        //jb server pr message bhejege aurtbbi user bhi bhejege aur usse ye bhi pta chlega ki 
        // kisne likha hai 
        messsage:message
    }
    console.log(msg);
    //aur  append krne ka mtlb hai sabse phele message likhe toh screen pe dikhe aur fir server pr jaye 
    //aur append krne k liye apne dom mae krte hai 
    appendMessage(msg,'outgoing')//esasi k saath saath batana hai message ka type kya hoga 
    //toh hamare pass do type hai incoming aur outgoing 
    //aur hum enter krne k baad bhej rehe hai toh outgoing hoga type 
}
function appendMessage(msg,type){
//firstly import the message area and message area div hai hamara toh humne import kiya client.js mae
//message_area ko 
//<div class="message_area">
//let messageArea=document.querySelector('.message_area')
//message area k andr div aa gya 
let mainDiv=document.createElement('div')
//        <div class="incoming message"> ye div create kr rehe hai hum and incoming ya fir outgoing dynamicaaly
//pass krna hai
let className=type
//yaha pr class add kr rehe div k upr below:
mainDiv.classList.add(className,'message')//classnmae ye hai jo pass hua hai dynamic create ho ajyega aur 
//dusra class messsage haui
//ayr haar eak div ko message class diya hua hai 

//aab hum genretae krenge esko
//<h4>samii</h4>
//<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium similique provident,
   //  laborum alias eligendi consectetur debitis consequatur corporis suscipit eaque fuga
    // exercitationem minus hic officiis quidem. Repellendus, nostrum consequatur.</p>

let markup=`
<h4>${msg.user}}</h4>
<p>${msg.message}</p>
`
console.log(markup);

//message dikha sakte hai 
//html markup hai toh humko esko maindiv k andr krna pedega 
mainDiv.innerHTML=markup//aab hm append krenge neeche messagearea ko

messageArea.appendChild(mainDiv)
}
//aur aab jo messages likhe the delete kr diye

//aur aab messsage dom k andr send ho raha

//append kr diya aab server pe 










































