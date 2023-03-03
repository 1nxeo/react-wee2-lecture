import React from "react";
import { FamilyContext } from "../context/FamilyContext";
import Father from "./Father";

function Grandpa() {
  const houseName = "Sparta";
  const pocketMoney = 10000;

  return (
    <FamilyContext.Provider
      value={{
        houseName,
        pocketMoney,
      }}
    >
      <Father />
    </FamilyContext.Provider>
  );
}

export default Grandpa;
