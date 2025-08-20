import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = (value) => {
    setCount1((c) => c + value);
  };

  const increment2 = (value) => {
    setCount2((c) => c + value);
  };

  return (
    <div>
      <div>
        <h2>Count: {count1}</h2>
        <button onClick={() => increment1(1)}>Add 1</button>
      </div>
      <div>
        <h2>Count: {count2}</h2>
        <button onClick={() => increment2(2)}>Add 2</button>
      </div>
    </div>
  );
}
