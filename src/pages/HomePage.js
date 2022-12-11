import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ThreadCategoryList from '../components/ThreadCategoryList';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncToggleThreadLikeThread,
  asyncToggleThreadDislikeThread,
  asyncToggleThreadNeutralLikeThread,
  asyncToggleThreadNeutralDislikeThread,
} from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLike = (id) => {
    dispatch(asyncToggleThreadLikeThread(id));
  };

  const onDislike = (id) => {
    dispatch(asyncToggleThreadDislikeThread(id));
  };

  const onNeutralLike = (id) => {
    dispatch(asyncToggleThreadNeutralLikeThread(id));
  };

  const onNeutralDislike = (id) => {
    dispatch(asyncToggleThreadNeutralDislikeThread(id));
  };

  const threadCategoryList = threads.filter((thread, index) => (
    threads.findIndex((obj) => obj.category === thread.category) === index
  ));

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section id='homePage'>
      <Hero />
      <div className='grid grid-cols-1 gap-2 mx-4 md:mx-12 md:grid-cols-4 lg:gap-4'>
        <div className='h-full mt-6 md:col-span-2 lg:col-span-1'>
          <div className='lg:sticky lg:top-24 mb-4'>
            <Link to="/create-new-thread" className='block font-Quicksand font-bold rounded-sm text-white bg-primary text-center px-2 py-4 hover:bg-primaryHover'>Create New Discussion</Link>
          </div>
          <div className='bg-white overflow-auto lg:sticky lg:top-44 border rounded-sm px-2 py-4'>
            <h1 className='font-bold font-Quicksand font-lg text-center mb-2'>Popular Thread Category</h1>
            <ThreadCategoryList threads={threadCategoryList} />
          </div>
        </div>
        <div className='bg-white border rounded-sm px-2 py-4 mt-6 md:col-span-2 lg:col-span-3'>
          <h1 className='font-bold font-Quicksand font-lg px-2 mb-2'>Recent Discussion</h1>
          <ThreadList
            threads={threadList}
            like={onLike}
            dislike={onDislike}
            neutralLike={onNeutralLike}
            neutralDislike={onNeutralDislike}
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
