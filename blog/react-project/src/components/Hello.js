import React, { useState, useEffect } from "react";
import axios from "axios";
import Show from "./Show";

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

  return (
    <div>
      {user.id === 0
        ? "Loading..."
        : user.map((use) => {
            console.log(use);
            return (
              <Show
                key={use.id}
                id={use.id}
                email={use.email}
                department={use.department}
              ></Show>
            );
          })}
    </div>
  );
}
