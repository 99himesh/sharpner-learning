const http=require("http");


const server=http.createServer((req,res)=>{
    res.setHeader('content-Type',"text/html");

    if(req.url=="/home"){
    res.write('<html>')
    res.write('<head><title>Welcome home</title></head>')
    res.write('<body>Welcome home</body>')
    res.write('<html>')
    res.end();
    }else if(req.url=="/about"){
    res.write('<html>')
    res.write('<head><title>Welcome to About Us page</title></head>')
    res.write('<body>Welcome to About Us page </body>')
    res.write('<html>')
    res.end();
    }else if(req.url=="/node"){
    res.write('<html>')
    res.write('<head><title>Welcome to my Node Js project</title></head>')
    res.write('<body>Welcome to my Node Js project</body>')
    res.write('<html>')
    res.end();
    }

    
    
})

server.listen(3000)