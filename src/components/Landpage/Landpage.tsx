import React from 'react';
import { Button } from '@material-ui/core';
import classes from './Landpage.module.css';

type Props = {
  start: () => void;
};

function Landpage(props: Props) {
  const { start } = props;
  return (
    <div className={classes.container}>
      <span className={classes.text}>Find the three Characters!</span>
      <Button variant='outlined' onClick={start}>
        START
      </Button>
    </div>
  );
}

export default Landpage;
