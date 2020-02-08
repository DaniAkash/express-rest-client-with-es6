/**
 * Arrays & Arrow functions
 */
const marks = [20, 50, 60, 20];

const increaseMarks = marks.map(function(mark) {
  return mark + 5;
});

/**
 * Array methods are treated as expressions
 */
console.log("Increased Marks", increaseMarks);

const simplifiedIncrease = marks.map(mark => mark + 5);

const filteredMarks = marks.filter(mark => {
  if (mark > 30) {
    return true;
  }
  return false;
});

const simplifiedFilter = marks.filter(mark => mark > 30);

console.log("Filtered Marks", simplifiedFilter);

/**
 * Trying to find if 22 is present in the array
 */
const findMark = marks.find(mark => {
  if (mark === 22) {
    return true;
  }
  return false;
});

/**
 * Trying to find 20
 */
const simplifiedFind = marks.find(mark => mark === 20);

console.log("Found Mark", simplifiedFind);

const reducer = (accumulator, mark) => {
  return accumulator + mark;
};

const totalMarks = marks.reduce(reducer, 0);

const simplifiedTotal = marks.reduce((acc, mark) => acc + mark, 0);

console.log("Total Marks", simplifiedTotal);

/**
 * Template literals
 */

console.log(`Total marks is ${marks.reduce((acc, mark) => acc + mark, 0)}`);

/**
 * Multiline strings
 */
const myHtmlGenerator = text =>
  "\
<div> \
  <p> \
    <span>i</span>" + text + "\n" + "\
  </p>\
</div>";

const myTemplateHtml = text => `
<div>
  <p>
    <span>i</span>
    ${text}
  </p>
</div>
`;

console.log("normal string", myHtmlGenerator("Hello world"));
console.log("Template string", myTemplateHtml("Hello world"));

/**
 * Destructuring Assignments
 */

// const english = marks[0];
// const tamil = marks[1];

const [
  english = 30,
  tamil = 30,
  maths = 30,
  science = 30,
  physics = 30
] = marks;

console.log(english, tamil, maths, science, physics);

const myObject = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
};

const {
  one,
  two,
  three,
  ...otherProps
} = myObject;

console.log(one, two, three, otherProps);

/**
 * Enhanced object literals
 */
console.log({ one: one, two: two, three: three });

console.log({ one, two, three });

/**
 * Block Scoped & Function scoped variables
 */

/**
 * var - function scoped (ES5)
 * let, const - block scoped (ES6)
 */
function useLessFuntion() {
  // function scope
  var myVariable = "Some Text";
}

if (true) {
  // block scope
  var myVariable = "Some Text";
  let mySecondVariable = "Some Text";
  const myThirdVariable = "Some Text";
}

console.log(myVariable);
// console.log(mySecondVariable);
// console.log(myThirdVariable);