const express = require('express');
const app=express();

app.get('/',(req,res)=>{
  res.status(200).send('<h1>Home Page</h1>');
})
app.get('/about',(req,res)=>{
  res.status(200).sendFile(__dirname+'/index.html' , { headers: { 'Cache-Control': 'no-store' } });
})
app.all(/.*/,(req,res)=>{
  res.status(404).send('<h1>Page not found</h1>');
});
app.listen(8000,()=>{
  console.log('Server is listening on port 8000');
});