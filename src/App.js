import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetUser } from './states/authUser/action';
import AppBar from './components/AppBar';
import Hero from './components/Hero';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <main>
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }

  return (
    <>
      <header className='sticky top-0 bg-white'>
        <AppBar authUser={authUser} signOut={onSignOut} />
      </header>
      <main className=''>
        <Hero />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
