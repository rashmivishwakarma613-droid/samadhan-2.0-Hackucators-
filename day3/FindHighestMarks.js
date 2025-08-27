function findHighestMark(marks) {
  let highest = marks[0];
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i]; 
    }
  }
  return highest;
}
const marksArray = [50, 60,85,44,56,70,33];
console.log("Highest mark is:", findHighestMark(marksArray));
