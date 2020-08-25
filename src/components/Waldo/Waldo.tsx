import React from 'react';
import classes from './Waldo.module.css';
import waldoPhoto from '../../assets/waldo.jpg';
import CharMenu from '../CharMenu/CharMenu';

export default function Waldo() {
  // const [foundWaldo, setFoundWaldo] = useState(false);
  // const [foundOdlaw, setFoundOdlaw] = useState(false);
  // const [foundWizard, setFoundWizard] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.waldo}>
        <div className={classes.pic}>
          <img src={waldoPhoto} alt='' />
        </div>
        <div className={classes.waldoGrid}>
          <CharMenu character='waldo' />
        </div>
        <div className={classes.odlawGrid}>
          <CharMenu character='odlaw' />
        </div>
        <div className={classes.wizardGrid}>
          <CharMenu character='wizard' />
        </div>
      </div>
    </div>
  );
}
