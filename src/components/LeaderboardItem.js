import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <div className='flex items-center justify-between text-lg mb-4 mt-2'>
      <div className='flex items-center gap-2'>
        <img src={user.avatar} alt={`${user.name} image`} className='w-12 h-12 rounded-full' />
        <div>
          <h2>{user.name}</h2>
          <p className='font-thin text-sm'>{user.email}</p>
        </div>
      </div>
      <p>{score}</p>
    </div>
  );
}

const userLeaderboardItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userLeaderboardItemShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
