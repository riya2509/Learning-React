import React from "react";
import { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    console.log(1);
    return () => {
      console.log(2);
    };
  }, []);

  const [search, setSearch] = useState(``);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const contactsData = [
    {
      name: "Riya Gupta",
      url: `https://robohash.org/1?200x200`,
      contact: 9546007043,
    },
    {
      name: "Ayodhya Prasad",
      url: `https://robohash.org/2?200x200`,
      contact: 9234567602,
    },
    {
      name: "Kiran Gupta",
      url: `https://robohash.org/3?200x200`,
      contact: 9470146924,
    },
    {
      name: "Ajay Kumar",
      url: `https://robohash.org/4?200x200`,
      contact: 7079583248,
    },
    {
      name: "Ashok Prasad",
      url: `https://robohash.org/5?200x200`,
      contact: 8292415660,
    },
    {
      name: "Ajit Kumar",
      url: `https://robohash.org/6?200x200`,
      contact: 9470146921,
    },
    {
      name: "Samir Kumar",
      url: `https://robohash.org/7?200x200`,
      contact: 7749887728,
    },
  ];
  //   for (let i = 0; i < contactsData.length; i++) {
  //     console.log(contactsData[i].name);
  //   }
  //   contactsData.map((value, index) => {
  // console.log(contactsData[index]);
  // console.log(value);
  //   });
  //   console.log(contactsData);
  //   const arr1 = contactsData.map((value, index) => {
  //     return value.name.toUpperCase();
  //   });
  //   console.log(arr1);
  return (
    <div>
      <h2>Phone Book</h2>
      <input
        type="text"
        className="robot"
        placeholder="Search People"
        onChange={handleSearch}
      />

      <div className="outerCard">
        {contactsData.map((value, index) => {
          if (
            value.name.toUpperCase().includes(search.toUpperCase()) ||
            value.contact.toString().includes(search)
          ) {
            return (
              <div className="card" key={index}>
                <div className="image">
                  <img
                    className="innerImage"
                    src={value.url}
                    alt={value.name}
                  />{" "}
                </div>
                <div className="name"> {value.name} </div>
                <div className="number"> {value.contact} </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Contact;
