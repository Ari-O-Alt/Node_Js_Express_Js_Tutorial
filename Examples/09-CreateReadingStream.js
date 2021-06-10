// we require createReadStream from fs
const { createReadStream } = require("fs");

// we create a stream
// if we want to control the side of the buffer, we need to pass a second parameter highWaterMark
// if we want to receive the content of the file in a readable manner, we need to pass an encoding parameter
const stream = createReadStream("./BigTextFile.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

// on the "data" event, the result will be printed to the console in chunks/ buffers of 64 kilobytes
stream.on("data", (result) => {
  console.log(result);
});

// on the error event, we print an error if the case
stream.on("error", (err) => {
  console.log(err);
});
