const fs = require("fs")

const data =  {users : [{
    contactName:"Jon", contactUserName : "jon562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Jon I am good"}]
},{
    contactName:"Krishna", contactUserName : "krishna562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Krishan I am good"}]
},{
    contactName:"Abdul", contactUserName : "abdul562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Abdul I am good"}]
},{
    contactName:"Swami", contactUserName : "swami562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Swami I am good"}]
},{
    contactName:"Albert", contactUserName : "albert562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Albert I am good"}]
},{
    contactName:"Faisal", contactUserName : "fasal562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Faisal I am good"}]
},{
    contactName:"Sachin", contactUserName : "sachin562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Sachin I am good"}]
}], logedInUser : { name:"Vishal", userName:"vishal562", contacts:[{
    contactName:"Ayush", contactUserName : "ayush562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Ayush I am good"},{messageReciever:"Can you pass me the books?"},{messageReciever:"It's urgent"},{messageReciever:"living for Jaipur"},{messageReciever:"Will come after 5 days"},{messageSender:"Sure coming to your place in no time."}]
},{
    contactName:"Deepak", contactUserName : "deepak562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Deepak I am good"}]
},{
    contactName:"Prashant", contactUserName : "prashant562",
    chatStream:[{messageReciever:"Hi Vishal, how are you"},{messageSender:"Hi, Prashant I am good"}]
}]}}

let maindata = JSON.stringify(data)

fs.writeFile("db.json",maindata,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("success");
    }
})