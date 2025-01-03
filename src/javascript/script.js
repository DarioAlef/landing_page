// https://youtu.be/8V3mw1w6h0U?si=XY6CFdQvsxrKZ0rV

// Import Parse SDK
const Parse = require('parse/node');

// Initialize with your Back4app keys
Parse.initialize("V4igAuo1eG96xFdcdPev68oL9Z0IXAbYbjPOpNa8",
     "77uXiddHdFVAJ29GErTFTMoaPSv4IFiKZHw1JTgM");  // Replace with your App ID and JS Key
Parse.serverURL = 'http://127.0.0.1:5500/index.html';



// Create and save a test object
const Person = new Parse.Object("Person");
Person.set("name", "Jon Snow");
Person.set("age", 30);

Person.save()
  .then(() => console.log("Successfully connected to Back4app!"))
  .catch((error) => console.error("Connection error:", error.message));