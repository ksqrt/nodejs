// import { response } from "express";
import React, { useState } from "react";
import axios from "axios";
// import { use } from "../../router";

export default function Hello() {
  const [user, setUser] = useState(null);
  async function getData(url) {
    axios
      .get(url)
      .then(function (response) {
        console.log("성공");
        // console.log(response.data[0]);
        setUser(response.data[0]);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  getData("http://111.111.1.247:3001/serverSide/2");
  // console.log(user);

  return (
    <div>
      <h1>Users</h1>
      <h1>user : {user["id"]}</h1>
    </div>
  );
}
