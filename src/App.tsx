import React, { useState } from 'react';
import Waldo from './components/Waldo/Waldo';
import NavBar from './components/NavBar/NavBar';
import Timer from './components/Timer/Timer';
import Landpage from './components/Landpage/Landpage';
import classes from './App.module.css';
import Modal from './components/Modal/Modal';
import Scoresubmit from './components/Scoresubmit/Scoresubmit';

export default function App() {
  const [waldo, setWaldo] = useState(false);
  const [odlaw, setOdlaw] = useState(false);
  const [wizard, setWizard] = useState(false);
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [submitScore, setSubmit] = useState(false);

  const timerStop = waldo && odlaw && wizard;

  const foundHandler = (who: string) => {
    switch (who) {
      case 'waldo':
        setWaldo(true);
        break;
      case 'odlaw':
        setOdlaw(true);
        break;
      case 'wizard':
        setWizard(true);
        break;
      default:
        break;
    }
  };

  const startSearch = () => {
    setStart(true);
  };

  const submitScores = () => {
    setTimeout(() => {
      setSubmit(true);
    }, 10);
  };

  let scores = null;

  const getTime = (time: number) => {
    setTimeout(() => {
      setSeconds(time);
    }, 10);
  };

  if (timerStop && seconds !== 0) {
    scores = <Scoresubmit time={seconds} score={submitScores} />;
  }

  if (timerStop && submitScore) {
    scores = (
      <>
        <Modal title='BEST TIMES' />
      </>
    );
  }

  let Page = <Landpage start={startSearch} />;
  if (start) {
    Page = (
      <>
        <Waldo found={foundHandler} />
        <div className={classes.center}>
          <Timer stop={timerStop} time={getTime} />
          {scores}
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar waldoFound={waldo} odlawFound={odlaw} wizardFound={wizard} />
      {Page}
    </>
  );
}
