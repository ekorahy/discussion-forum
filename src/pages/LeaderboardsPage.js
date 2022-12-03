import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncPopulateLeaderboards } from '../states/shared/action';

function LeaderboardsPage() {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <section>
      <div className='w-full bg-white mx-auto py-8 px-8 lg:w-4/5'>
        <h1 className='font-Philosopher font-bold text-2xl md:text-3xl text-primary'>Active user leaderboard</h1>
        <LeaderboardList leaderboards={leaderboardsList} />
      </div>
    </section>
  );
}

export default LeaderboardsPage;
