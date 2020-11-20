import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ name, avatar, logout }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.greeting}>Nice to see you, {name}!</div>
      <img className={styles.avatar} src={avatar} alt="Avatar" />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
