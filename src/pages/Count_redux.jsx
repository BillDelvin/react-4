import { useDispatch, useSelector } from "react-redux";
import {
  // decrease,
  // increase,
  // reset,
  handleCount,
} from "../store/slice/counterSlice";

import HOC from "../components/HOC";

const CountRedux = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <HOC headerTitle="Count Redux">
      <h1>Counting using Redux</h1>
      <section style={{ textAlign: "center" }}>
        <h2>Count: {count}</h2>
        {/* <button type="button" onClick={() => dispatch(increase())}>
          Increase
        </button>
        &nbsp;
        <button type="button" onClick={() => dispatch(decrease())}>
          Decrease
        </button>
        &nbsp;
        <button type="button" onClick={() => dispatch(reset())}>
          Reset
        </button> */}
        <button type="button" onClick={() => dispatch(handleCount("+"))}>
          Increase
        </button>
        &nbsp;
        <button type="button" onClick={() => dispatch(handleCount("-"))}>
          Decrease
        </button>
        &nbsp;
        <button type="button" onClick={() => dispatch(handleCount("reset"))}>
          Reset
        </button>
      </section>
    </HOC>
  );
};

export default CountRedux;
