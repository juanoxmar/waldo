import React from 'react';
import classes from './Headshot.module.css';

type Props = {
  image: string;
  name: string;
  found: boolean;
};

function Headshot(props: Props) {
  const { image, name, found } = props;
  return (
    <div>
      <img src={image} alt={name} className={classes.heads} />
      <span className={classes.name}>{name}</span>
      <span className={found ? classes.stamp : ''}>FOUND</span>
    </div>
  );
}

export default Headshot;
