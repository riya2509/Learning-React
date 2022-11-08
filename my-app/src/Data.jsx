import React from "react";
function Data() {
    const personList = [{ name: "Riya", Age: 20 },
    { name: "Shalu", Age: 70 },
    { name: "Navya", Age: 25 },
    { name: "Ajay", Age: 28 },
    { name: "Aryan", Age: 15 },
    { name: "Meenakshi", Age: 45 }
    ];
    let arr = personList.name;
    console.log(personList.map)
    return (
        <h2><u>PersonList</u></h2>
    );
}
export default Data;