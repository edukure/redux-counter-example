import { useDispatch } from "react-redux";

import styles from "./styles.module.css";
import { decrement, increment } from "../counterSlice";

const IncrementOrDecrementByOne = () => {
  const dispatch = useDispatch();

  const handleIncrementByOne = () => {
    dispatch(increment());
  };

  const handleDecrementByOne = () => {
    dispatch(decrement());
  };

  return (
    <div className={styles.card}>
      <h2>Change by 1</h2>
      <div>
        <button onClick={handleDecrementByOne}>-</button>
        <button onClick={handleIncrementByOne}>+</button>
      </div>
    </div>
  );
};

export default IncrementOrDecrementByOne;
