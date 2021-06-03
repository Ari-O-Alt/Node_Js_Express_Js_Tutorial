const { readFile, writeFile } = require("fs");
const util = require("util");

// -------------------------------------------------- VARIANT 1, WITH CALLBACK
/* readFile("./Text.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
}); */

// -------------------------------------------------- VARIANT 2, WITH PROMISE
/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

getText("./Text.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
 */

// -------------------------------------------------- VARIANT 3, WITH ASYNC AWAYT SO WE CAN ALSO WRITE TO THE FILE, NOT JST READ FROM IT
/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const start = async () => {
  try {
    const first = await getText("./Text.txt");
    const second = await getText("./Text2.txt");
    console.log(first);
    console.log(second);
  } catch (err) {
    console.log(err);
  }
};

start(); */

// -------------------------------------------------- VARIANT 4, WITH PROMISIFIED FUNCTIONS
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./Text.txt", "utf8");
    const second = await readFilePromise("./Text2.txt", "utf8");
    await writeFilePromise(
      "./MergeText.txt",
      `This is the new text: ${first} ${second}`
    );

    const third = await readFilePromise("./MergeText.txt", "utf8");
    console.log(third);
  } catch (err) {
    console.log(err);
  }
};

start();
