import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import classes from './Scoresubmit.module.css';
import axios from '../../axios';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name Required'),
});

type Props = {
  time: number;
  score: () => void;
};

interface IFormInputs {
  name: string;
}

function Landpage(props: Props) {
  const { time, score } = props;

  const { register, handleSubmit, formState, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (data: IFormInputs) => {
    try {
      await axios.post('/times.json', {
        name: data.name,
        time: +time.toFixed(2),
      });
    } catch (error) {
      console.error(error);
    }
    score();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
        <TextField
          inputRef={register}
          label='Name'
          name='name'
          type='text'
          variant='outlined'
          size='small'
          error={!!errors.name}
          style={{ margin: 8 }}
        />
        <Button
          variant='outlined'
          type='submit'
          size='small'
          disabled={!formState.isValid}
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}

export default Landpage;
