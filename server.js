import * as http from "node:http";
console.log('Starting NodeJS Server.');

http.createServer(myServer).listen(5000)

function myServer(request, response){
    response.write(`
        <button id="btn">Generate Joke</button>
    `);
    response.end();
}
fetch("https://official-joke-api.appspot.com/random_joke")
//once na get yung data convert to json
.then(function(result){
    return result.json()
})
//once na convert to json return as result variable
.then(function(result){
    console.log('result: ', result)
})