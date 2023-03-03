import React, { useEffect, useRef, useState } from "react";

function App() {
  const idRef = useRef("");
  const pwRef = useRef("");

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id]);

  return (
    <>
      <div>
        ID :{" "}
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          ref={idRef}
        />
      </div>
      <div>
        PASSWORD :{" "}
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          ref={pwRef}
        />
      </div>
    </>
  );
}

export default App;
