const { readFile } = require("fs");

console.log("Started the first task!");

// read file is async so the event loop will offload this function to the kernel
// the path of the text file is in relation to the root folder NOT with the js file
readFile("./Text.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Completed first task!");
});

readFile("./Examples/Text2.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Completed the second task in the nested file!");
});

console.log("Started next task!");
