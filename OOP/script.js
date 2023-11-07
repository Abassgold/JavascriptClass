let stud = new Array("Abass", true, 1)
console.log(stud);

class Student {
    constructor(named, color, id) {
        this.name = named;
        this.color = color;
        this.id = id;
    }
    detail(){
        show.innerHTML = `The name of the student is ${this.name} and their color is ${this.color} ehilr their id is ${this.id}`
    }
    error(){
        show.innerHTML = `Name not`
    }
}

let ab = "abass"
let studentOne = new Student(ab, "yellow", 1)
let studentTwo = new Student("Kola", false, 2)
// studentOne.detail();
// show.innerHTML = `${studentOne.name}`
studentTwo.detail();
studentTwo.error();

const Check = function() {
    if(Input.value == studentOne.name){
        studentOne.detail();
    }
    else if(Input.value == studentTwo.name){
        studentTwo.detail();
    }
}
class Country {
    constructor(){
        this.name = Name;
        this.capital = cap;
        this.flag = flag;
        this.funFact = fact;
    }
}