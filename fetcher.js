// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)

//avoid writeFileSync, considered bad practice

const request = require("request");
const fs = require("fs");
// request ('http://www.example.edu', (error, response, body) => {
//   console.log ('error', error) //print error if one
//   console.log ('statusCode', response && response.statusCode) //print response code if response was recieved
//   console.log ('body', body) //Print the HTML for google homepage
// })
const url = process.argv[2]; //had to go this way couldnt use the const fetcher to grab the things without them being in a ("")
const localFilePath = process.argv[3];

const fetcher = (url, localFilePath) => { //wow I finally kinda understand arrow functions
  
  request(url, (error, response, body) => {
    console.log(body);
    console.log(body.length); //one char = 1 byte
    fs.appendFile('index.html', body, function(err) {
    });
    console.log(`Downloaded and saved ${body.length} to .${localFilePath}`);
  });
};

//module.exports = fetcher;

fetcher(url, localFilePath);


// fetcher("http://www.example.edu/", "/index.html")
