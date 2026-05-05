const http=require("http");
const  routes = require("./route");

const server=http.createServer(routes)

server.listen(3000)




// const describe=(name,age=25,...hobbies)=>{
//     console.log(hobbies.map((item)=>item));
    
//     return `${name} is ${age} ${hobbies.map((item)=>item)} .`
// }

// const res=describe("himesh",28,"Atcing", "art","music");
// console.log(res);
