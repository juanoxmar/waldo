import React, { useState } from 'react';
import Waldo from './components/Waldo/Waldo';
import NavBar from './components/NavBar/NavBar';
import Timer from './components/Timer/Timer';
import Landpage from './components/Landpage/Landpage';

export default function App() {
  const [waldo, setWaldo] = useState(false);
  const [odlaw, setOdlaw] = useState(false);
  const [wizard, setWizard] = useState(false);
  const [start, setStart] = useState(false);

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

  let Page = <Landpage start={startSearch} />;

  if (start) {
    Page = (
      <React.Fragment>
        <Waldo found={foundHandler} />
        <Timer stop={timerStop} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <NavBar waldoFound={waldo} odlawFound={odlaw} wizardFound={wizard} />
      {Page}
    </React.Fragment>
  );
}
