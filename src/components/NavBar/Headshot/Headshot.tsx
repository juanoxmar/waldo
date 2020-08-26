import React from 'react';
import classes from './Headshot.module.css';

type Props = {
  image: string;
  name: string;
  found: boolean;
};

function Headshot(props: Props) {
  const { image, name, found } = props;

  let foundText = null;
  let headClass = classes.heads;
  if (found) {
    foundText = <span className={classes.stamp}>FOUND</span>;
    headClass = `${classes.heads} ${classes.absolute}`;
  }

  return (
    <div className={classes.width}>
      <img src={image} alt={name} className={headClass} />
      <span className={found ? classes.name : ''}>{name}</span>
      {foundText}
    </div>
  );
}

export default Headshot;
