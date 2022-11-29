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
      <div className='w-3/4 bg-white mx-auto py-4 px-8'>
        <h1 className='font-Philosopher font-bold text-3xl text-primary'>Active user leaderboard</h1>
        <LeaderboardList leaderboards={leaderboardsList} />
      </div>
    </section>
  );
}

export default LeaderboardsPage;
