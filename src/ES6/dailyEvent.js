const cleanRoom = () => {
  return new Promise((resolve, reject) => {
    const isRoomClean = true;
    if (isRoomClean) {
      resolve("Room is clean!");
    } else {
      reject("Room isn't clean...");
    }
  });
};

const goForAWalk = () => {
  return new Promise((resolve, reject) => {
    const isWalkComplete = true;
    if (isWalkComplete) {
      resolve("Walk Complete...");
    } else {
      reject("Didn't go for the walk...");
    }
  });
};

const getAnIceCream = () => {
  return new Promise((resolve, reject) => {
    const hasBoughtTheIce = true;
    if (hasBoughtTheIce) {
      resolve("Got the IceCream!");
    } else {
      reject("I Didn't get the ice cream!");
    }
  })
}

cleanRoom()
  .then(success => {
    console.log(success); // First event
    return goForAWalk(); // return new promise
  })
  .then(success => {
    console.log(success); // second event
    return getAnIceCream(); // return new promise
  })
  .then(success => {
    console.log(success); // third event
  })
  .catch(error => {
    console.error(error);
  });
