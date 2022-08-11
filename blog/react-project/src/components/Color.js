import React from "react";

export default function Color(props) {
  const txt = '{"name" : "Rose", "age" : 24, "residence" : "Seoul"}';
  const obj = JSON.parse(txt).name;
  console.log(obj);

  return (
    <div>
      <br></br>
    </div>
  );
}
