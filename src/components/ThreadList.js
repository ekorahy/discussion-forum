import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({
  threads, like, dislike,
}) {
  return (
    <div>
      {
        threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            {...thread}
            like={like}
            dislike={dislike}
          />
        ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
};

export default ThreadList;
