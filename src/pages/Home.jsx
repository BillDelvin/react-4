import HOC from "../components/HOC";

import { useSelector } from "react-redux";

const Home = () => {
  // calling value from Redux
  const { count } = useSelector((state) => state.counter);

  return (
    <HOC headerTitle="Home">
      <h2>Home</h2>
      <h3>Count from another component : {count}</h3>
    </HOC>
  );
};

export default Home;
