const fs=require("fs");
 



    const requestHandler=(req,res)=>{
     const url=req.url;
    const method=req.method;
    let msg="dscds"

if(url=="/home"){
    res.setHeader('content-Type',"text/html");

    res.write('<html>')
    res.write('<head><title>Welcome home</title></head>')
    res.write('<body> <p>'+msg+'</p><form action="/message" method="POST"><input name="message" type="text"/><button type="Submit">Submit</button></form></body>')
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
            fs.writeFile("message.tsx",message,(err)=>{
            // const msg = err ? "No message" : data.toString();
             msg = message;
            res.statusCode=302;
            res.setHeader('Location',"/");
            return res.end();
            })
        });
        
    }
    }



    module.exports=requestHandler



    // module.exports={
    //     request:requestHandler,
    //     someText:'Some hard coded text'
    // }



    // exports.handler=requestHandler;