var message = "Hello, World!";
const condition = false;
const option1 = 'option1';
const option2 = 'option2';

function greet(name) {
  console.log("Greetings, " + name);
  if (name == null) {
    return;
  }
  if (name) {
    return;
    console.log("This will never run");
  }
  if (name === undefined) {
    console.log("Name is undefined");
  }
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

greet("Alice");

function unusedFunction(param1, param2) {
  var unusedVar = 42;
}

const obj = { a: 1, b: 2 };

if (true) console.log("No braces");

let multiLine = condition ?
  option1 :
  option2;

console.log(multiLine);
