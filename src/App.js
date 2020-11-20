import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AuthForm from './components/AuthForm/AuthForm';
import Profile from './components/Profile/Profile';
import NewsItem from './components/NewsItem/NewsItem';
import cn from 'classnames';
import { getFetchData } from './utils/getFetchData';

function App() {
  const [userData, setUserData] = useState(null);
  const [news, setNews] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const { token } = localStorage;

  const userDataFetchHeaders = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (typeof token === 'string') {
      getFetchData('/private/me', setUserData, logout, userDataFetchHeaders);
      getFetchData('/private/news', setNews, logout, userDataFetchHeaders);
    }
  }, [userToken, token]);

  const fetchAuth = (formData) => {
    getFetchData(
      '/auth',
      ({ token }) => {
        localStorage.setItem('token', token);
        setUserToken(token);
      },
      logout,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserToken(null);
    setUserData(null);
    setNews(null);
  };

  const headerContent = userData ? (
    <Profile {...userData} logout={() => logout()} />
  ) : (
    <AuthForm getFormData={fetchAuth} />
  );

  const mainContent = news ? (
    <>
      {news.map((item => (
        <div key={item.id} className={styles.newsItemWrapper}>
          <NewsItem {...item} />
        </div>
      )))}
    </>
  ) : (
    <div>
      <h2>Neto Social</h2>
      <p>Facebook and VK killer</p>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h3 className={styles.logo}>Neto Social</h3>
        {headerContent}
      </header>
      <section className={cn(styles.content, { [styles.full]: news })}>
        {mainContent}
      </section>
    </div>
  );
}

export default App;
