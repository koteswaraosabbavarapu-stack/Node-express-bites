const express=require('express'); 
const app=express();
const {products}=require('./products.js');

app.get('/',(req,res)=>{
  res.send('<h1>Home Page</h1>');
})

app.get('/products',(req,res)=>{
  const newProducts=products.map(product=>{
   const {id,name,image}=product;
   return {id,name,image};
  });
  res.json(newProducts);
});

app.get('/products/:id',(req,res)=>{
  const productId=req.params.id;
  const product=products.find(product=>product.id===Number(productId));
  if(product){
  res.json(product);
  }
  else{
    res.status(404).send('product not found');
  }
})
app.get('/api/query',(req,res)=>{
  const {limit,search}=req.query;
  let sortedProducts=[...products];
  if(search){
    sortedProducts=sortedProducts.filter((p)=>p.name.toLowerCase().startsWith(search.toLowerCase()));
  }
  if(limit){
    sortedProducts=sortedProducts.slice(0,parseInt(limit));
  }
  res.json(sortedProducts);
});

app.listen(4500,()=>{
  console.log('Server is listening on port 4500');
});