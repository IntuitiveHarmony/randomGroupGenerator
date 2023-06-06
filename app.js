const students = [
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
  // Loop that prints list of students to the DOM
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    const $studentLi = $(`<li>`).text(students[i]);
    $("#studentList").append($studentLi);
  }
});
