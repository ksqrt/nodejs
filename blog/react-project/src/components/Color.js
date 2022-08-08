import React, { useEffect } from "react";

export default function Color(props) {
  useEffect(() => {
    return () => {
      console.log("함수사용");
    };
  }, []);
  // let 은 변수임 선언후 값 바꾸기 가능
  const array = [1, 2, 3, 4, 5];
  array.push(222);

  for (var i = 0; i < array.length; i++) {
    if (i === 0) continue;
    if (array[i] === 222) break;
    console.log(array[i]);
  }

  const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

  const a = superheroes.map((i) => <div>안녕하세요 {i} 입니다</div>);

  console.log(superheroes);

  return (
    <div style={{ color: props.color }}>
      안녕하세요 {props.name}
      <div>{a}</div>
    </div>
  );
}

Color.defaultProps = {
  name: "이름없음",
  color: "gray",
};
