/**
 * A simple Asynchronous function with a callback
 */
const fileSystemWrite = (text, completedCallback = () => null) => {
  setTimeout(() => {
    console.log("File is Being written!");
    console.log(text);
    completedCallback("success");
  });
};

const textTowrite = "Hello world!";

// fileSystemWrite(textTowrite, status => {
//   console.log(`File write operation: ${status}!`);
// });

// fileSystemWrite(textTowrite);

fileSystemWrite(textTowrite, status => {
  console.log(`File write operation: ${status}!`);
  fileSystemWrite(textTowrite, status => {
    console.log(`File write operation: ${status}!`);
    fileSystemWrite(textTowrite, status => {
      console.log(`File write operation: ${status}!`);
      fileSystemWrite(textTowrite, status => {
        console.log(`File write operation: ${status}!`);
        fileSystemWrite(textTowrite, status => {
          console.log(`File write operation: ${status}!`);
          fileSystemWrite(textTowrite, status => {
            console.log(`File write operation: ${status}!`);
          });
        });
      });
    });
  });
});