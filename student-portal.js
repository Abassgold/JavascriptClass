var student_Name = [];
var student_Matric = [];
var student_Email = [];
var student_Department = [];


function addStudent(){
    if (studentName.value && matric.value && email.value && department.value) {
        student_Name.push(studentName.value)
        student_Matric.push(matric.value);
        student_Email.push(email.value);
        student_Department.push(department.value);

        email.value = ''
        department.value = ''
        matric.value = ''
        studentName.value = ""
        console.log(student_Name);
        document.getElementById("showEmptyErrorMessage").style.display = "none"
        displayStudents();
    }
    else{
        document.getElementById("showEmptyErrorMessage").style.display = "block"
        console.log("You dey whine me ni");
     } 
}
function addItemsToStart(){
    if (studentName.value && matric.value && email.value && department.value) {
        student_Name.unshift(studentName.value)
        student_Matric.unshift(matric.value);
        student_Email.unshift(email.value);
        student_Department.unshift(department.value);

        email.value = ''
        department.value = ''
        matric.value = ''
        studentName.value = ""
        console.log(student_Name);
        document.getElementById("showEmptyErrorMessage").style.display = "none"
        displayStudents();
    }
    else{
        document.getElementById("showEmptyErrorMessage").style.display = "block"
        console.log("You dey whine me ni");
    }
}

function editStudent() {
    var newIndex = Number(editedIndex.value);
    var itemTodelete = Number(numberOfItemstodelete.value);
    var newName = editedName.value;
    var newMatric = Number(editedMatrics.value);
    newEmail = editedEmails.value;
    newDepartment = editedDepartments.value;
    console.log(newIndex, newStudent);
    if(editedIndex.value && editedName.value && editedMatrics.value && editedEmails.value && editedDepartments.value){
        if(student_Name.length > newIndex-1 && student_Name.length >= itemTodelete){
            student_Name.splice(newIndex-1, 1, newName);
            student_Department.splice(newIndex-1, 1, newDepartment);
            student_Matric.splice(newIndex-1, 1, newMatric);
            student_Email.splice(newIndex-1, 1, newEmail);
            editedIndex.value = ""
            numberOfItemstodelete.value = ''
            editedName.value = ''
            editedEmails.value = ''
        }
        else{
            alert(`Index is only ${studentArr.length} long`)
        }
    }
    else{
        alert("Pls fill in the details")
    }
    displayStudents();
}
function deleteFirstItem(){
    student_Department.shift();
    student_Email.shift();
    student_Matric.shift();
    student_Name.shift();
    displayStudents();
}
function deleteLasttItem(){
    student_Department.pop();
    student_Email.pop();
    student_Matric.pop();
    student_Name.pop();
    displayStudents();
}
function deleteAllItems(){
    var confirmation = confirm("Are you sure you want to delete all?");
    if(confirmation){
     student_Name = [];
     student_Matric = [];
     student_Email = [];
     student_Department = [];
    }
     
     displayStudents();
}

function deletAnyItems(){
    var deletAnyItem = Number(editedItems.value);
    if(student_Name.length > deletAnyItem-1){
    student_Department.slice(deletAnyItem-1);
    student_Email.slice(deletAnyItem-1);
    student_Matric.slice(deletAnyItem-1);
    student_Name.slice(deletAnyItem-1);
    editedItems.value = ''
    }
    else{
        alert(`Index is only ${studentArr.length} long`)
    }
    displayStudents();
}


function displayStudents(){
    document.getElementById("noStudentRegistered").style.display = "none"
    document.getElementById("allButtons").style.display = "block"
    studentTable.innerHTML = ""
    studentTable.innerHTML = `
    <tr>
        <th>S/N</th>
        <th>Student Name</th>
        <th>Matric Number</th>
        <th>Email Address</th>
        <th>Department</th>
    </tr>
    `

    for(i = 0; i < student_Name.length; i++){
        studentTable.innerHTML += `
        <tr>
            <td>${1+i}</td>
            <td>${student_Name[i]}</td>
            <td>${student_Matric[i]}</td>
            <td>${student_Email[i]}</td>
            <td>${student_Department[i]}</td>
            <td>
            <button class="btn btn-warning" onclick="editOne()">Edit<button>
            <button class="btn btn-danger" onclick="deleteOnee()">Delete<button>
            </td>
        </tr>
        `
    }
}

function deletOnee()