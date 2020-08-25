import React from 'react';
import classes from './NavBar.module.css';
import waldo from '../../assets/wally.png';
import odlaw from '../../assets/odlaw.png';
import wizard from '../../assets/wizard.png';
import Headshot from './Headshot/Headshot';

type Props = {
  waldoFound: boolean;
  odlawFound: boolean;
  wizardFound: boolean;
};

function NavBar(props: Props) {
  const { odlawFound, waldoFound, wizardFound } = props;

  return (
    <header className={classes.navBar}>
      <Headshot image={waldo} name='Waldo' found={waldoFound} />
      <Headshot image={odlaw} name='Odlaw' found={odlawFound} />
      <Headshot image={wizard} name='Wizard Whitehead' found={wizardFound} />
    </header>
  );
}

export default NavBar;
