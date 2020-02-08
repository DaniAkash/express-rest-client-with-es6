/**
 * - Property
 * - Method
 */
class Human {

  static someMethod () {
    console.log("has nothing to do with the instance");
  }

  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._spokenWords = [];
  }

  get name() {
    return this._firstName + " " + this._lastName;
  }

  set name(humanName) {
    const [firstName = "", lastName = ""] = humanName.split(" ");
    this._firstName = firstName;
    this._lastName = lastName;
  }

  speak(word) {
    this._spokenWords.push(word);
    console.log(word)
  };

}

const imran = new Human("MD", "Imran");

console.log(imran);
imran.speak("hello");
imran.name = "New Name";
console.log(imran.name);

Human.someMethod();