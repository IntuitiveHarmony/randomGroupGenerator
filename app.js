let students = [
  "Aleksandr",
  "Bryan",
  "Daniyal",
  "David",
  "Gabrielle",
  "Joseph",
  "Joshua",
  "Justin",
  "Mamadou",
  "Nic",
  "Veronica",
  "Wilson",
  "Connor",
  "Mark",
  "Kam",
  "Anish",
];

$(() => {
  // Generate Groups
  const handleGenerateGroups = () => {
    // Randomize the students array
    let randomStudents = [];
    // loop through the students
    for (let i = students.length; i > 0; i--) {
      // generate a random number to use as index
      let randomIndex = Math.floor(Math.random() * students.length);
      // push random student into randomStudent array
      randomStudents.push(students[randomIndex]);
      // remove random student from student array so they won't be counted twice
      students.splice(randomIndex, 1);
    }
    // reasign the student array so we can do it again!
    students = randomStudents;
    console.log(students);
  };

  // Loop that prints list of students to the DOM
  for (let i = 0; i < students.length; i++) {
    const $studentLi = $(`<li>`).text(students[i]);
    // put inside the <ol> in the DOM
    $("#studentList").append($studentLi);
  }
  // Grab the generate button
  $("#generateBtn").on("click", handleGenerateGroups);
});
