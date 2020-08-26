import React, { useState } from 'react';
import { Dialog, DialogTitle, Button } from '@material-ui/core';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SimpleModal(props: Props) {
  const { children, title } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>{title}</Button>
      <Dialog open={open} onClose={handleClose} maxWidth='sm'>
        <DialogTitle>{title}</DialogTitle>
        {children}
      </Dialog>
    </>
  );
}
