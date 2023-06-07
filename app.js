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
  let randomStudents = [];
  const handleGenerateGroups = () => {
    // Randomize the students array
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
    students = [...randomStudents];
    console.log(students);
    console.log(randomStudents);

    // Grab group size from user input
    let groupSize = parseInt($("#groupSize").val());
    // remove any existing containers (previous random groups)
    $(".groupsContainer").remove();
    // create new container
    const $groupsContainer = $("<div>").addClass("groupsContainer");
    $(".flexContainer").append($groupsContainer);

    // declare variable for stable loop
    let groupNumber = students.length / groupSize;

    // Loop that makes cards for each group
    for (let i = 0; i < groupNumber; i++) {
      const $group = $("<div>").addClass("group");
      const $groupHeader = $(`<h3>`).text(`Group ${i + 1}`);
      const $groupUl = $(`<ul>`);
      const groupArray = students.splice(0, groupSize);
      $group.append($groupHeader);
      $group.append($groupUl);
      $groupsContainer.append($group);
      for (let i = 0; i < groupArray.length; i++) {
        const $li = $("<li>").text(groupArray[i]);
        $groupUl.append($li);
      }
    }
    students = randomStudents;
    console.log(students);
    console.log(randomStudents);
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
