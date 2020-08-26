import React, { useState } from 'react';
import classes from './Timer.module.css';

type Props = {
  stop: boolean;
};

function Timer(props: Props) {
  const { stop } = props;
  const [seconds, setSeconds] = useState(0);

  let timeColor = classes.timerStop;
  if (!stop) {
    setTimeout(() => {
      setSeconds((prevState) => prevState + 0.01);
    }, 10);
    timeColor = classes.timerOn;
  }

  return (
    <h3 className={`${classes.timer} ${timeColor}`}>{seconds.toFixed(2)}</h3>
  );
}

export default Timer;
