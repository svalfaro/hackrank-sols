/*
Author: Sheila Alfaro
HackerRank

HackerLand University has the following grading policy:

    -> Every student receives a grade in the inclusive range from 0 to 10. 
    -> Any grade less than  is a failing grade.

Sam is a professor at the university and likes to round each student's  according to these rules:

    -> If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
    -> If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples:

    -> grade = 84 round to 85 (85 - 84 is less than 3)
    -> grade = 29 do not round (result is less than 40)
    -> grade = 57 do not round (60 - 57 is 3 or higher)

Given the initial value of grade for each of Sam's  students, write code to automate the rounding process.

Function Description:

Complete the function gradingStudents in the editor below. gradingStudents has the following parameter(s):

    int grades[n]: the grades before rounding

Returns:

    int[n]: the grades after rounding as appropriate

Input Format

The first line contains a single integer, n, the number of students.
Each line i of the n subsequent lines contains a single integer, grades[i].
*/

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  let temp = 0;
  let tempAnswer = 0;
  let finalGrades = [];

  for (let x = 0; x < grades.length; x++) {
    temp = grades[x] / 5;
    tempAnswer = Math.ceil(temp) * 5 - grades[x];
    if (grades[x] < 38 || tempAnswer >= 3) {
      finalGrades[finalGrades.length] = grades[x];
    } else if (tempAnswer < 3) {
      // finalGrades[x].push(Math.ceil(temp) * 5);
      finalGrades[finalGrades.length] = Math.ceil(temp) * 5;
    }
  }
  return finalGrades;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
