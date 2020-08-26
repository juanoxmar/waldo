import React from 'react';
import classes from './Waldo.module.css';
import waldoPhoto from '../../assets/waldo.jpg';
import CharMenu from '../CharMenu/CharMenu';

type Props = {
  found: (who: string) => void;
};

export default function Waldo(props: Props) {
  const { found } = props;

  const who = (who: string) => {
    found(who);
  };

  return (
    <div className={classes.container}>
      <div className={classes.pic}>
        <img src={waldoPhoto} alt='' draggable='false' />
        <div className={classes.waldoGrid}>
          <CharMenu character='waldo' who={() => who('waldo')} />
        </div>
        <div className={classes.odlawGrid}>
          <CharMenu character='odlaw' who={() => who('odlaw')} />
        </div>
        <div className={classes.wizardGrid}>
          <CharMenu character='wizard' who={() => who('wizard')} />
        </div>
      </div>
    </div>
  );
}
