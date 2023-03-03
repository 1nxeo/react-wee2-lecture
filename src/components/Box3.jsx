import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#c491be",
  color: "white",
};

function Box3() {
  console.log("Box3 컴포넌트가 렌더링되었습니다 !");
  return <div style={style}>Box3</div>;
}

export default React.memo(Box3);
