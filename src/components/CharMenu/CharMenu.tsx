import React, { useState } from 'react';
import classes from './CharMenu.module.css';
import { Menu, MenuItem } from '@material-ui/core';
import axios from '../../axios';

type Props = {
  character: string;
};

function CharMenu(props: Props) {
  const { character } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLElement>(null!);
  const [found, setFound] = useState(false);
  const [charBoxCheck, setCharBoxCheck] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Set a dynamic class to display border of selection
    setAnchorEl(event.currentTarget);
    setCharBoxCheck(true);
  };

  const checkHandler = async (boxNumber: string) => {
    try {
      const response = await axios.get('/box.json');
      const data = await response.data;
      if (data[+boxNumber] === character) {
        setFound(true);
      } else {
        setCharBoxCheck(false);
      }
    } catch (error) {
      console.error(error);
    }
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null!);
  };

  let charBox = null;
  if (charBoxCheck) {
    charBox = classes.boxTrue;
  }

  return (
    <React.Fragment>
      <button
        disabled={found}
        tabIndex={-1}
        onClick={handleClick}
        aria-controls={character}
        aria-haspopup='true'
        className={`${classes.box} ${charBox}`}
      ></button>
      <Menu
        id={character}
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={() => checkHandler('0')}>Waldo</MenuItem>
        <MenuItem onClick={() => checkHandler('1')}>Odlaw</MenuItem>
        <MenuItem onClick={() => checkHandler('2')}>Wizard Whitehead</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default CharMenu;
