const fileSystemWrite = text => {
  return new Promise((resolve, reject) => {
    // code goes here...
    console.log("File is Being written!");
    console.log(text);
    // any exception will be automatically rejected -> invoking catch
    // undefined(); 
    reject("Failed!"); // manually calling reject will also invoke catch
    resolve("Success!");
  });
};

fileSystemWrite("My Text")
  .then(status => {
    console.log(`File write operation: ${status}!`);
  })
  .catch(error => {
    console.error("Error happened: ", error);
  });
