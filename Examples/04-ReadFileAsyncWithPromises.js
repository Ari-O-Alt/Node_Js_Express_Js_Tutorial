const { readFile, writeFile } = require("fs").promises;

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
/* const util = require("util");
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

start(); */

// -------------------------------------------------- VARIANT 5, WITH PROMISIFIED FUNCTIONS CHANGED IMPORT
const start = async () => {
  try {
    const first = await readFile("./Text.txt", "utf8"); // this is a promise, check the import
    const second = await readFile("./Text2.txt", "utf8"); // this is a promise, check the import
    await writeFile(
      // this is a promise, check the import
      "./MergeText.txt",
      `This is the new text: ${first} ${second}`
    );

    const third = await readFile("./MergeText.txt", "utf8"); // this is a promise, check the import
    console.log(third);
  } catch (err) {
    console.log(err);
  }
};

start();
