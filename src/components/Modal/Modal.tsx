import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, Button } from '@material-ui/core';
import axios from '../../axios';
import classes from './Modal.module.css';

type Props = {
  title: string;
};

type timesType = {
  name: string;
  time: number;
  key: string;
};

export default function SimpleModal(props: Props) {
  const { title } = props;
  const [open, setOpen] = useState(false);
  const [times, setTimes] = useState<timesType[]>(null!);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          '/times.json?orderBy="time"&limitToFirst=10&print=pretty'
        );
        const data = response.data;

        const timesArr: timesType[] = [];
        for (const key in data) {
          const obj = { ...data[key], key: key };
          timesArr.push(obj);
        }
        setTimes(timesArr);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let timeTable = null;
  if (times !== null) {
    timeTable = times
      .sort((a, b) => a.time - b.time)
      .map((obj, index) => (
        <li key={obj.key}>
          <div>
            {index + 1}. {obj.name}
          </div>
          <div>{obj.time}</div>
        </li>
      ));
  }

  return (
    <>
      <Button onClick={handleOpen}>{title}</Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogTitle style={{ textAlign: 'center' }}>{title}</DialogTitle>
        <ol className={classes.list}>{timeTable}</ol>
      </Dialog>
    </>
  );
}
