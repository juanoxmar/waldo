import React, { useState } from 'react';
import classes from './Timer.module.css';

type Props = {
  stop: boolean;
  time: (time: number) => void;
};

function Timer(props: Props) {
  const { stop, time } = props;
  const [seconds, setSeconds] = useState(0);

  let timeColor = classes.timerStop;

  if (!stop) {
    setTimeout(() => {
      setSeconds((prevState) => prevState + 0.01);
    }, 10);
    timeColor = classes.timerOn;
  }

  const sendTime = () => {
    if (stop) {
      time(seconds);
    }
  };

  sendTime();

  return (
    <h3 className={`${classes.timer} ${timeColor}`}>{seconds.toFixed(2)}</h3>
  );
}

export default Timer;
