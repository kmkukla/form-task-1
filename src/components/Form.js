import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

const Form = () => {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    setMessage(`Thank you for filling this form.`);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.paragraph}>Please enter your first and last name.</p>
      <input
        className={styles.input}
        {...register('firstName', { required: 'This field is required.' })}
        placeholder="First Name"
      />
      <p>{errors.firstName?.message}</p>
      <input
        className={styles.input}
        {...register('lastName', {
          required: 'This field is required.',
          minLength: {
            value: 3,
            message: 'This input field has to be at least 3 characters long.',
          },
        })}
        placeholder="Last Name"
      />
      <p>{errors.lastName?.message}</p>
      <input className={styles.submitBtn} type="submit" value="Submit" />
      <p>{message}</p>
    </form>
  );
};

export default Form;
