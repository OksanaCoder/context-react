import React, { useState } from "react";
import styles from "./StopWatch.module.css";

const StopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [idInterval, setIdInterval] = useState(null);

  const tick = () => {
    setTime((state) => {
      const newTime = new Date(time); //new copy time
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };

  const start = () => {
    if (idInterval === null) {
      setIdInterval(setInterval(tick, 1000));
    }
  };

  const stop = () => {
    clearInterval(idInterval);
    setIdInterval(null);
  };

  const reset = () => {
    stop();
    setTime(new Date(0, 0, 0, 0, 0, 0));
  };

  return (
    <article className={styles.container}>
      <h2>{time.toLocaleTimeString("en-GB")}</h2>
      <div>
        <button className={styles.btn} onClick={start}>
          start
        </button>
        <button className={styles.btn} onClick={reset}>
          reset
        </button>
        <button className={styles.btn} onClick={stop}>
          stop
        </button>
      </div>
    </article>
  );
};

export default StopWatch;
