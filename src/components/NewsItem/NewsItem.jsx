import React from 'react';
import styles from './NewsItem.module.css';

const NewsItem = ({ content, image, title }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={image} alt="title pic" />
      <div className={styles.textContent}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{content}</p>
      </div>
    </div>
  );
};

export default NewsItem;
