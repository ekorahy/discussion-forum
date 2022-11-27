import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({ threads }) {
  return (
    <div>
      {
        threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadList;
