const express=require('express');
const ProductData=require('./src/model/productdata');
const cors=require('cors');
const bodyparser=require('body-parser');
var app=new express();
app.use(cors());
app.use(bodyparser.json());
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    ProductData.find()
        .then(function(products){
            res.send(products);
        });
});

app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var product={
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl
    }
    var product=new ProductData(product);
    product.save();
})

app.post('/remove',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    var prod=req.body.product;
    console.log("delete"+prod);
    ProductData.deleteOne({_id:prod})
    .then(function(){console.log("deleted")})
})
app.listen(2222,function(){
    console.log("listen to port : 2222");
});