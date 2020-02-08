/**
 * Arrays & Arrow functions
 */
const marks = [20, 50, 60, 20];

const increaseMarks = marks.map(function (mark) {
  return mark + 5;
});

/**
 * Array methods are treated as expressions
 */
console.log("Increased Marks", increaseMarks);

const simplifiedIncrease = 
        marks.map(mark => mark + 5);

const filteredMarks = marks.filter((mark) => {
  if(mark > 30) {
    return true;
  }
  return false;
});

const simplifiedFilter = 
     marks.filter(mark => mark > 30);

console.log("Filtered Marks", simplifiedFilter);

/**
 * Trying to find if 22 is present in the array
 */
const findMark = marks.find((mark) => {
  if(mark === 22) {
    return true;
  }
  return false;
});

/**
 * Trying to find 20
 */
const simplifiedFind = 
            marks.find(mark => mark === 20);

console.log("Found Mark", simplifiedFind);


const reducer = (accumulator, mark) => {
  return accumulator + mark;
};

const totalMarks = marks.reduce(reducer, 0);

const simplifiedTotal = 
    marks.reduce((acc, mark) => acc + mark, 0);

console.log("Total Marks", simplifiedTotal);

/**
 * Template literals
 */

console.log(`Total marks is ${
  marks.reduce((acc, mark) => acc + mark, 0)
}`);

/**
 * Multiline strings
 */
const myHtmlGenerator = (text) => "\
<div> \
  <p> \
    <span>i</span>" + text + "\n" + "\
  </p>\
</div>"

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