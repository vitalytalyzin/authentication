import React, { useState } from 'react';
import styles from './AuthForm.module.css';

const AuthForm = ({ getFormData }) => {

  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const onLabelChange = ({ target: { name, value } }) => {
    const dataField = name === 'login' ? 'login' : 'password';
    setFormData({ ...formData, [dataField]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData({
      login: '',
      password: '',
    });
    getFormData(formData);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.input}>
        <input
          type="text"
          name="login"
          placeholder="username"
          onChange={onLabelChange}
          value={formData.login}
        />
      </label>
      <label className={styles.input}>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={onLabelChange}
          value={formData.password}
        />
      </label>
      <button>Login</button>
    </form>
  );
};

export default AuthForm;
