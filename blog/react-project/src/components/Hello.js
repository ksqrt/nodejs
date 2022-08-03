import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Hello() {
  // 데이터를 받을 스테이트
  const [user, setUser] = useState({
    id: 0,
    email: "",
    department: "",
  });
  // if 문을통해 데이터를 한번만 받을수 있게 리랜더링 방지
  useEffect(() => {
    if (user.id === 0) {
      axios.get("http://111.111.1.247:3001/serverSide").then((response) => {
        setUser(response.data);
      });
    }
  }, [user]);

  console.log(user);

  var db = JSON.stringify(user);
  console.log(typeof db);
  return <div>{JSON.stringify(user)}</div>;
}
