import React from "react";

export default function Color(props) {
  process();
  return (
    <div>
      <br></br>
    </div>
  );
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("안녕하세요!");
  await sleep(1000); // 1초쉬고
  console.log("반갑습니다!");
  await sleep(1000); // 1초쉬고
  console.log("소통해요");
}

process().then(() => {
  console.log("작업이 끝났어요!");
});
