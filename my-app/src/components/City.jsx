import React, { useState } from "react";
import axios from "axios";
import "./City.css";
// TODO: Add an input box and send search query accordingly.
const City = () => {
  // City State
  const [cities, setCities] = useState([]);
  const loadCities = (event) => {
    const url = `http://localhost:5000/viewCity`;
    // Promise
    axios
      .post(url, { city: event.target.value })
      .then((res) => {
        // Handle Success case
        // console.log(res.data.result);
        // We are setting data into city variale/state
        setCities(res.data.result);
      })
      .catch((err) => {
        // Handle failure Case
        console.log(err);
      });
  };
  return (
    <div>
      <input type="text" onChange={loadCities} />
      <div>Total Cities: {cities.length}</div>
      {/* <button onClick={loadCities}>Load Cities!</button> */}
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country Code</th>
            <th>District</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((value) => {
            const { ID, Name, CountryCode, District, Population } = value;
            return (
              <tr key={ID}>
                <td>{Name}</td>
                <td>{CountryCode}</td>
                <td>{District}</td>
                <td>{Population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default City;
