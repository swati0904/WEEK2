

function logResponse(jsonBody)
{
    console.log(jsonBody);
}

function callbackFn(result)
{
     result.json().then(logResponse)
}

var sendObj={
    method:"GET"
};

fetch("http://localhost:3000/?counter=100", sendObj).then(callbackFn)