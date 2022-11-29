import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { threadCommentItemShape } from './ThreadCommentItem';

function ThreadCommentList({
  comments,
}) {
  return (
    <div className='mt-4'>
      <h2 className='font-Quicksand font-bold text-primary text-lg'>{`Comments (${comments.length})`}</h2>
      {
        comments.length > 0
          ? comments.map((comment) => (
            <ThreadCommentItem key={comment.id} {...comment} />
          ))
          : <div className='font-Quicksand  text-red-700 text-sm text-center'>- No Comment -</div>
      }
    </div>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.shape(threadCommentItemShape).isRequired,
};

export default ThreadCommentList;
