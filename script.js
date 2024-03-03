const studentCardsContainer = document.getElementById("studentCards");

const students = [
    {name: "Garima Verma", marks: 85, class: "10th", address: "123 Chowk" },
    {name: "Rahul Shukla", marks: 90, class: "10th", address: "456 Hyderabad" },
    {name: "Abhay Yadav", marks: 18, class: "6th", address: "789 Chennai" },
    {name: "Seema Gupta", marks: 48, class: "12th", address: "789 Street" },
    {name: "Shipra Raj", marks: 90, class: "3th", address: "23/23 sector g" },
    {name: "Ridhi Gupta", marks: 23, class: "12th", address: "3/12 Near cafe" },
  
];

function renderStudents(studentList) {
    studentCardsContainer.innerHTML = ""; 
    studentList.forEach(student => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>Marks: ${student.marks}</p>
            <p>Class: ${student.class}</p>
            <p>Address: ${student.address}</p>
        `;
        studentCardsContainer.appendChild(card);
    });
}

function filterStudents(searchText) {
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText.toLowerCase())
    );
    renderStudents(filteredStudents);
}
function searchStudents() {
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    filterStudents(this.value);
});

renderStudents(students);
}

  





