var inquirer = require("inquirer");

var q1 = '';
var q2 = '';
var examRaw;
var exam = "";
var semesterGrade = "";

inquirer.prompt([{
  name: "grade1",
  type: "input",
  message: "What was your grade for quarter 1?"
}]).then(function(answer1) {
  inquirer.prompt([{
    name: "grade2",
    type: "input",
    message: "What was your grade for quarter 2?"
  }]).then(function(answer2) {
    q1 = answer1.grade1;
    q2 = answer2.grade2;


    //calc functions here
    calculateA();
    calculateB();
    calculateC();
    calculateD();

  }); //end .then2


}); //end .then1

function calculateD() {

  q = (q1 * '.425') + (q2 * '.425');

  examRaw = (70 - q);

  exam = Math.round((examRaw / '.15'));

  var grade = (q1 * '.425') + (q2 * '.425') + (exam * '.15');

  console.log("To get a 70, you need a " + exam + " on the exam.");
} //end calculateD

function calculateC() {
  q = (q1 * '.425') + (q2 * '.425');
  // console.log("q is", q);

  examRaw = (75 - q);
  // console.log("raw exam is", examRaw);

  exam = Math.round((examRaw / '.15'));
  // console.log("exam is", exam);

  var grade = (q1 * '.425') + (q2 * '.425') + (exam * '.15');
  // console.log("var seventy is", seventy);

  console.log("To get a 75, you need a " + exam + " on the exam.");
} //end calculateC

function calculateB() {
  q = (q1 * '.425') + (q2 * '.425');
  // console.log("q is", q);

  examRaw = (80 - q);
  // console.log("raw exam is", examRaw);

  exam = Math.round((examRaw / '.15'));
  // console.log("exam is", exam);

  var grade = (q1 * '.425') + (q2 * '.425') + (exam * '.15');
  // console.log("var seventy is", seventy);

  console.log("To get an 80, you need a " + exam + " on the exam.");
} //end calculateB

function calculateA() {
  q = (q1 * '.425') + (q2 * '.425');
  // console.log("q is", q);

  examRaw = (90 - q);
  // console.log("raw exam is", examRaw);

  exam = Math.round((examRaw / '.15'));
  // console.log("exam is", exam);

  var grade = (q1 * '.425') + (q2 * '.425') + (exam * '.15');
  // console.log("var seventy is", seventy);

  console.log("To get a 90, you need a " + exam + " on the exam.");
} //end calculateA