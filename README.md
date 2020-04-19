# nodejs_testapi
sample code that creates a node.js server and a webpage that calls an endpoint

> LinkedIn Learning, Learning Node.js

# NOTES from Class

https://nodemon.io/ - monitors your project for changes and restarts your server
npm install -g nodemon

if you type nodemon filename.js it will monitor change to you file and restart the server!


npm install -s express
Node.js Server
https://nodejs.org/es/docs/guides/anatomy-of-an-http-transaction/

# Socket.io - pushes to client

# Jasmine - test framework for Node (could also use Mocha)

> npm install —save-dev jasmine
> to create the config files for jasmine, type 
> ./node_modules/.bin/jasmine init
> create a server.spec.js file in the spec / support folder
> create a test then run npm test

***
NOTES MISC

in a new project, type npm init  (creates package.json file)
npm init —yes (to accept defaults)

if you install node modules AFTER you have a package, then you need to type -s ; example:

* Promises (strings the code along .then())
* async / await

lodash - javascript utility library


* Javascript template literals use a backtick; allows you to inject variables into strings

$()   is shorthand for document.ready

add a callback when the document is ready

$( ()=>{
});


