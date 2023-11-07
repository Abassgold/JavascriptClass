let studentArray = [
    {
        id: 1,
        name: "Akin",
        faveFood: "Pawpaw",
        school: "FUNAAB"
    },
    {
        id: 2,
        name: "Kunle",
        faveFood: "Rice",
        school: "Lautech"
    },
    {
        id: 3,
        name: "Kola",
        faveFood: "Beans",
        school: "OAU"
    },
    {
        id: 4,
        name: "Alabi",
        faveFood: "Eba",
        school: "Uniabuja"
    },
    {
        id: 5,
        name: "Tunji",
        faveFood: "Semo",
        school: "Uniosun"
    },
    {
        id: 6,
        name: "Abass",
        faveFood: "Fufu",
        school: "Unilorin"
    }
]

for(index = 0; index < studentArray.length; index++){
    const serialNumber = index + 1;
    const element = studentArray[index].id;
    const element1 = studentArray[index].name;
    const element2 = studentArray[index].faveFood;
    const element3 = studentArray[index].school;

    document.getElementById("show").innerHTML +=`
    <h3>
       <small>${serialNumber}</small> I am student ${element} and my name is ${element1} and my favorite food is ${element2} while my school is ${element3}
    </h3>
    `
}

  