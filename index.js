
// function otp(c){


// var a=''
// for(i=0;i<c;i++){
//     var b=Math.floor(Math.random()*10)
//     a=a+b
// }
// return a
// }

// module.exports={
//     otp
// }



var http=require("http");

var server=http.createServer((req,res)=>{

if(req.method=="GET"){
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    h1{
        color:blue;
    }
</style>
<body>
    <h1 id="hh"> </h1>
</body>

<script>
    var obj={
        name:"Suresh Alakuntla ",
    }
    var d=document.getElementById("hh");
    d.textContent=obj.name;
</script>
</html>
        `)
    
}

else if(req.method=="POST"){
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    h1{
        color:rgb(15, 189, 35);
    }
</style>
<body>
    <h1>THIS IS HTTP MODULE POST METHOD </h1>
</body>
</html>`)
    
}

else if(req.method=="PUT"){
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    h1{
        color:rgb(204, 255, 0);
    }
    BODY{
        background-color: black;
    }
</style>
<body>
    <h1>THIS IS HTTP MODULE PUT METHOD </h1>
</body>
</html>`)
   
}

else if(req.method=="DELETE"){
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    h1{
        color:RED;
    }
</style>
<body>
    <h1>THIS IS HTTP MODULE DELETE METHOD </h1>
</body>
</html>`)
    
}
res.end();

})
server.listen(3000,()=>{
    console.log("hello Node-js")
})