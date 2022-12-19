import React, { useState } from "react";
function Comp1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [title, setTitle] = useState("");
  const [money, setMoney] = useState("");

  const handleMoney = (event) => setMoney(event.target.value);

  const handleSubmit = () => {
    console.log(name);
    console.log(age);
    console.log(title);
    console.log(money);
  };
  return (
    <>
      <input
        type="text"
        className="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        className="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Age"
      />

      <input
        type="text"
        className="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
      />

      <input
        type="money"
        className="money"
        value={money}
        onChange={handleMoney}
        placeholder="Money"
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default Comp1;
