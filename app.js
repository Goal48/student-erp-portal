// Array to hold student data (this is temporary, ideally fetched from a database)
const students = [
    { name: "John Doe", id: 101 },
    { name: "Jane Smith", id: 102 },
  ];
  
  // Function to display students dynamically
  function displayStudents() {
    const studentList = document.getElementById('students-list');
    studentList.innerHTML = ''; // Clear the list before updating it
    students.forEach(student => {
      const studentDiv = document.createElement('div');
      studentDiv.classList.add('student-item');
      studentDiv.innerHTML = `
        <div class="student-info">
          <span>ID:</span> ${student.id} <br>
          <span>Name:</span> ${student.name}
        </div>
        <button onclick="removeStudent(${student.id})">Remove</button>
      `;
      studentList.appendChild(studentDiv);
    });
  }
  
  // Function to add a new student
  function addStudent() {
    const studentName = prompt("Enter student's name:");
    const studentId = prompt("Enter student's ID:");
    if (studentName && studentId) {
      students.push({ name: studentName, id: studentId });
      displayStudents();
    } else {
      alert("Please provide both name and ID.");
    }
  }
  
  // Function to remove a student
  function removeStudent(studentId) {
    const index = students.findIndex(student => student.id === studentId);
    if (index !== -1) {
      students.splice(index, 1);
      displayStudents();
    }
  }
  
  // Initialize the display
  displayStudents();
  