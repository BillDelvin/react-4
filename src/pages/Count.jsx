import { useState } from "react";
import HOC from "../components/HOC";

const List = () => {
  const [count, setCount] = useState(0);

  // Logic gabung UI
  const handleCount = (type) => {
    // cara orang baru ketemu
    // if (type === "+") {
    //   setCount((prevState) => prevState + 1);
    //   return;
    // }

    // if (type === "-") {
    //   if (count === 0) return; // optional
    //   setCount((prevState) => prevState - 1);
    //   return;
    // }

    // setCount((prevState) => (prevState = 0));

    // cara experiment
    setCount((prevState) =>
      type === "+"
        ? prevState + 5
        : type === "-"
        ? prevState === 0
          ? prevState
          : prevState - 5
        : (prevState = 0)
    );
  };

  return (
    <HOC headerTitle="Count">
      <section style={{ textAlign: "center" }}>
        <h2>Count: {count}</h2>
        <button type="button" onClick={() => handleCount("+")}>
          Increase
        </button>
        &nbsp;
        <button type="button" onClick={() => handleCount("-")}>
          Decrease
        </button>
        &nbsp;
        <button type="button" onClick={() => handleCount("reset")}>
          Reset
        </button>
      </section>
    </HOC>
  );
};

export default List;
