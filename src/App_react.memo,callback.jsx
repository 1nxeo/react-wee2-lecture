import React, { useCallback, useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  console.log("App 컴포넌트가 렌더링되었습니다 !");

  const [count, setCount] = useState(0);

  // 1 증가
  const plusCountHandler = () => {
    setCount(count + 1);
  };

  // 1 감소
  const minusCountHandler = () => {
    setCount(count - 1);
  };

  // count 초기화
  // 바뀐게 있나요 ? => 없음, 근데 왜 리액트는 바뀌었다고 생각할까 ?
  // initCount가 새로운 주소값을 줌... => Callback 사용하자
  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`);
    setCount(0);
  }, [count]);

  return (
    <>
      <h3>카운트 예제입니다.</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={plusCountHandler}>+</button>
      <button onClick={minusCountHandler}>-</button>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
