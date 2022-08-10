import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Movie() {
  const [inputs, setInputs] = useState({
    status: "NOK",
  });

  useEffect(() => {
    if (inputs.status === "NOK")
      axios.get("https://yts.mx/api/v2/list_movies.json").then((response) => {
        setInputs(response.data);
      });
  }, [inputs]);

  // 데이터를 받을 스테이트
  // if 문을통해 데이터를 한번만 받을수 있게 리랜더링 방지
  return <div>Movie</div>;
}
