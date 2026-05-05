const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=="/home"){
    res.setHeader('content-Type',"text/html");

    res.write('<html>')
    res.write('<head><title>Welcome home</title></head>')
    res.write('<body><form action="/message" method="POST"><input name="message" type="text"/><button type="Submit">Submit</button></form></body>')
    res.write('<html>')
    res.end();
    }else if(url=="/about"){
    res.setHeader('content-Type',"text/html");

    res.write('<html>')
    res.write('<head><title>Welcome to About Us page</title></head>')
    res.write('<body>Welcome to About Us page </body>')
    res.write('<html>')
    res.end();
    }else if(url=="/node"){
    res.setHeader('content-Type',"text/html");

    res.write('<html>')
    res.write('<head><title>Welcome to my Node Js project</title></head>')
    res.write('<body>Welcome to my Node Js project</body>')
    res.write('<html>')
    res.end();
    }else if(url=="/message" && method=="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(body,"body");
            
            body.push(chunk)
        });
        return req.on("end",()=>{
            const parsebody=Buffer.concat(body).toString();
            const message=parsebody.split("=")[1];
            console.log(parsebody,"parsebody");
            fs.writeFile("message.tsx",message,(error)=>{
            res.statusCode=302
            res.setHeader('Location',"/");
            return res.end();
            })
            
        });
        
    }
    res.setHeader('content-Type',"text/html");

        res.write('<html>')
        res.write('<head><title>Welcome to my Node Js project</title></head>')
        res.write('<body>Welcome to my Node Js project</body>')
        res.write('<html>')

    
    
})

server.listen(3000)




// const describe=(name,age=25,...hobbies)=>{
//     console.log(hobbies.map((item)=>item));
    
//     return `${name} is ${age} ${hobbies.map((item)=>item)} .`
// }

// const res=describe("himesh",28,"Atcing", "art","music");
// console.log(res);
