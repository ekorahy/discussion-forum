import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import ThreadCommentItem, { threadCommentItemShape } from './ThreadCommentItem';
import { postedAt } from '../utils';
import ThreadCommentInput from './ThreadCommentInput';

function ThreadDetail({
  id, title, body, category, createdAt, owner, upVotesBy,
  downVotesBy, comments, authUser, like, dislike, neutralLike, neutralDislike,
  addCommentThread,
}) {
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      like(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
      like(id);
    } else if (isThreadLiked) {
      neutralLike(id);
    }
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      dislike(id);
    } else if (isThreadLiked) {
      neutralLike(id);
      dislike(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
    }
  };

  return (
    <section>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <img src={owner.avatar} alt={owner.name} className='h-10 w-10 rounded-full' />
          <div>
            <h2 className='font-bold text-lg text-primary'>{owner.name}</h2>
            <p className='font-thin text-sm'>{`Created ${postedAt(createdAt)}`}</p>
          </div>
        </div>
        <div>
          <p className='text-sm border p-2 rounded-lg text-primary'>{`# ${category}`}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='font-semibold text-primary text-2xl'>{title}</h2>
        <p className='text-ellipsis overflow-hidden mt-3'>{parse(body)}</p>
      </div>
      <div className='flex justify-start gap-6 mt-4'>
        <p className='flex items-center gap-1'>
          <button type="button" onClick={onLikeClick}>
            { isThreadLiked ? <AiOutlineLike className=' text-green-500' />
              : <AiOutlineLike />}
          </button>
          {' '}
          {upVotesBy.length}
        </p>
        <p className='flex items-center gap-1'>
          <button type="button" onClick={onDislikeClick}>
            { isThreadDisliked ? <AiOutlineDislike className=' text-rose-700' />
              : <AiOutlineDislike />}
          </button>
          {' '}
          {downVotesBy.length}
        </p>
      </div>
      <ThreadCommentInput commentThread={addCommentThread} />
      <div className='mt-4'>
        <h2 className='font-bold text-primary text-lg'>{`Comments (${comments.length})`}</h2>
        {
        comments.length > 0
          ? comments.map((comment) => (
            <ThreadCommentItem
              key={comment.id}
              {...comment}
            />
          ))
          : <div className='text-red-700 text-sm text-center'>- No Comment -</div>
      }
      </div>
    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(threadCommentItemShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func,
  addCommentThread: PropTypes.func,
};

ThreadDetail.defaultProps = {
  like: null,
  dislike: null,
  neutralLike: null,
  neutralDislike: null,
  addCommentThread: null,
};

export { userShape };

export default ThreadDetail;
