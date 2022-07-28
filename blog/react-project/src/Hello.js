// import { response } from "express";
import React from "react";
import axios from "axios";

export default function Hello() {
  async function getData(url) {
    axios
      .get(url)
      .then(function (response) {
        console.log("성공");
        console.log(response.data[0]);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  var a = getData("http://111.111.1.247:3001/serverSide/1");

  return <div> {a} </div>;
}
