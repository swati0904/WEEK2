


const express = require('express')
var bodyParser=require('body-parser')
const app = express()
const port = 3000
function calculatesum(counter)
{
    var sum=0;
    for(var i=0;i<counter;i++)
    {
        sum=sum+i;
    }
    return sum;
}
function mul(counter)
{
    var sum=1;
    for(var i=1;i<counter;i++)
    {
        sum=sum&i;
    }
    return sum;
}

// mainly use for user authentication
// function middlewar1(req, res, next)
// {
//     console.log("the log statement is from middlewar"+ req.headers.counter);
//     if(req.headers.counter==4)// here basically we write the authentication condition , if the user is authenticated then only he sould be able to make the request to the url otherwise not 
//     {
//         next();// on this call the controls reaches to handleFirstreq function
//     }
//     else{
//         console.log("Error msg from inside the middleware");
//     }
    

//     // if next was nver called then sending request will be there on loop as next was not called 
// }
// app.use(middlewar1);
app.use(bodyParser.json())
 
 console.log(calculatesum(100))

function HandleFirstreq(req, res)
{
    //var counter=req.headers.counter;
    //console.log(req.body)
    var counter=req.query.counter;
    if(counter<1000)
    {
        var calculatedsum=calculatesum(counter);
        var calculatemul=mul(counter);
        console.log(calculatedsum)
        // response from server is simpletext type
       // var ans="the sum is "+ calculatedsum;
       //response from server is json object type
        var answer={
            sum:calculatedsum,
            mul:calculatemul
        }
       res.send(answer);
       //sending the html file
       //res.send('index.html')
    }
    else{
        // this where we learn about staus code any thing between 400-499 is defined for error at client side so we are handling it accordingly 
        res.status(411).send("the length of input is too big ")
    }
   
}
function givePage(req, res){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>hello there</h1>
    </body>
    </html>`)
}
function postmethod(req, res)
{
    res.send('hello world');
}
function putmethod(req, res)
{
    res.send('putmethod');
}
function deletemethod(req, res)
{
    res.send('deletemethod');

}
app.get('/', HandleFirstreq)
app.get('/page', givePage)
app.get('/page1', (req, res)=>{
    res.send('this is msg from the server');
})
app.post('/test', postmethod)
app.put('/test2', putmethod)
app.delete('/test3', deletemethod)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// function calculatesum(counter)
// {
//     var sum=0;
//     for(var i=0;i<counter;i++)
//     {
//         sum=sum+i;
//     }
//     return sum;
// }
 
//  console.log(calculatesum(100))