import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Typography, Paper, TextareaAutosize } from '@mui/material';
import PrimaryButton from '../components/Reusables/PrimaryButton';
import { makeStyles } from '@mui/styles';

export const ContactUs = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const classes = useStyles();

  const handleSubmit = () => navigate('/');

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Paper className={classes.form}>
      <Typography variant='h3' component='h5'>
        Contact us!
      </Typography>

      <TextField onChange={(e) => setName(e.target.value)} value={name} label={'Name:'} className={classes.input} />
      <TextField onChange={(e) => setEmail(e.target.value)} value={email} label={'Email:'} className={classes.input} />
      <TextareaAutosize
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        label={'Message:'}
        className={classes.message}
      />

      <PrimaryButton onClick={handleSubmit} className={classes.btn}>
        Submit
      </PrimaryButton>
      <PrimaryButton onClick={handleReset} className={classes.btnDanger}>
        Reset
      </PrimaryButton>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    gap: '1rem',
    boxShadow: 'none',
  },
  message: {
    padding: '0.625rem',
    maxWidth: '20rem',
    width: '100%',
    lineHeight: '1.5rem',
    fontSize: '1rem',
    minHeight: '15rem',
  },
  input: {
    maxWidth: '20rem',
    width: '100%',
  },
  btn: {
    width: '10rem',
    backgroundColor: theme.palette.secondary.main,
    textTransform: 'none',
  },
  btnDanger: {
    width: '10rem',
    backgroundColor: theme.palette.danger.main,
    textTransform: 'none',
  },
}));
