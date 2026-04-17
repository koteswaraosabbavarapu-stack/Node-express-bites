const { readFileSync } = require('fs');
const http=require('http');
const homepage=readFileSync('index.html');
const server=http.createServer((req,res)=>{
 if(req.url==='/'){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('<h1>Home page</h1>');
  res.end();
 } 
 else if(req.url==='/about'){
  res.writeHead(200,{ 'Content-Type': 'text/html' });
  res.write(homepage);
  res.end();
 }
 else{
  res.writeHead(404,{'Content-Type':'text/html'});
  res.write('<h1>Page not found</h1>');
  res.end();
 } 
});
const port=3000;
server.listen(port,()=>{
  console.log(`Server is listening on port ${port}`);
});