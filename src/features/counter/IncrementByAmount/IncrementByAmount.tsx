import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

import { incrementByAmount } from "../counterSlice";
import styles from "./styles.module.css";

const IncrementByAmount = () => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const handleAmountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAmount(e.target.valueAsNumber);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className={styles.card}>
      <h2>Increment by</h2>
      <form onSubmit={handleSubmit}>
        <input
          min={0}
          type="number"
          onChange={handleAmountChange}
          value={amount}
        />
        <button>increment</button>
      </form>
    </div>
  );
};

export default IncrementByAmount;
