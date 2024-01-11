const mongoose = require("mongoose");
const chat = require("./models/chat");


main()
.then( () => {
    console.log("connection successfull");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


// let chat1 = new chat({
//     from: "neha",
//     to: "priya",
//     msg: "hii priya, how are you!!",
//     created_at: new Date()
// });
// chat1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

let allChats = [{
  from: "sudhir",
  to: "lakshmi",
  msg:"Hello lakshmi!",
  created_at: new Date()
},
{
    from: "aman",
    to: "anushka",
    msg:"Hello anushka",
    created_at: new Date() 
},
{
    from: "ashish",
    to: "bharat",
    msg:"Hello bharat",
    created_at: new Date() 
},
{
    from: "kirti",
    to: "aman",
    msg:"Hello aman",
    created_at: new Date() 
}];

chat.insertMany(allChats);