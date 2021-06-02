const { readFile } = require("fs");

console.log("Started the first task!");

// read file is async so the event loop will offload this function to the kernel
readFile("./Text.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Completed first task!");
});

console.log("Started next task!");
