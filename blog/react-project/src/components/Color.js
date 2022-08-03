import React from "react";

export default function Color(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
}
Color.defaultProps = {
  name: "이름없음",
  color: "gray",
};
