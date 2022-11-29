import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div className='font-Quicksand mt-3'>
      <div className='font-bold text-primary text-lg flex items-center justify-between'>
        <p>Users</p>
        <p>Scores</p>
      </div>
      {
        leaderboards.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.id} {...leaderboard} />
        ))
      }
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
