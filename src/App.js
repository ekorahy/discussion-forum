import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetUser } from './states/authUser/action';
import AppBar from './components/AppBar';
import DetailPage from './pages/DetailPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import CreateDiscussion from './pages/CreateDiscussion';
import Loading from './components/Loading';
import Footer from './components/Footer';

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
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <header className='sticky top-0 bg-white z-10'>
        <AppBar authUser={authUser} signOut={onSignOut} />
      </header>
      <main className='h-full pb-10 bg-slate-50'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/create-new-thread" element={<CreateDiscussion />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
