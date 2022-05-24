import Head from "next/head";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counter/counterSlice";
import IncrementByAmount from "../features/counter/IncrementByAmount";
import IncrementOrDecrementByOne from "../features/counter/IncrementOrDecrementByOne";

import styles from "../styles/Home.module.css";

export default function Home() {
  const count = useSelector(selectCount);

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Counter Example</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Redux Counter Example</h1>

        <p className={styles.description}>
          Global counter value:
          <code className={styles.code}>{count}</code>
        </p>

        <div className={styles.grid}>
          <IncrementOrDecrementByOne />

          <IncrementByAmount />
        </div>
      </main>
    </div>
  );
}
