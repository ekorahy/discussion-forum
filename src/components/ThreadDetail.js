import React from 'react';
import Proptypes from 'prop-types';
import parse from 'html-react-parser';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { postedAt } from '../utils';

function ThreadDetail({
  id, title, body, category, createdAt, owner, upVotesBy,
  downVotesBy, comments, authUser, like, dislike,
}) {
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (isThreadLiked || isThreadDisliked) {
      dislike(id);
      like(id);
    } else {
      like(id);
    }
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (isThreadLiked || isThreadDisliked) {
      like(id);
      dislike(id);
    } else {
      dislike(id);
    }
  };

  return (
    <section>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <img src={owner.avatar} alt={owner.name} className='h-10 w-10 rounded-full' />
          <div>
            <h2 className='font-Quicksand font-bold text-lg text-primary'>{owner.name}</h2>
            <p className='font-Quicksand font-thin text-sm'>{`Created ${postedAt(createdAt)}`}</p>
          </div>
        </div>
        <div>
          <p className='font-Quicksand text-sm border p-2 rounded-lg text-primary'>{`# ${category}`}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='font-semibold font-Quicksand text-2xl'>{title}</h2>
        <p className='font-Quicksand mt-1'>{parse(body)}</p>
      </div>
      <div className='flex justify-start gap-4 mt-2'>
        <p className='flex items-center gap-1'>
          <button type="button" onClick={onLikeClick}>
            { isThreadLiked ? <AiOutlineLike className=' text-rose-700' />
              : <AiOutlineLike />}
          </button>
          {' '}
          {upVotesBy.length}
        </p>
        <p className='flex items-center'>
          <button type="button" onClick={onDislikeClick}>
            { isThreadDisliked ? <AiOutlineDislike className=' text-rose-700' />
              : <AiOutlineDislike />}
          </button>
          {' '}
          {downVotesBy.length}
        </p>
      </div>
    </section>
  );
}

const userShape = {
  id: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  avatar: Proptypes.string.isRequired,
};

const commentShape = {
  id: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
  createdAt: Proptypes.string.isRequired,
  owner: Proptypes.shape(userShape).isRequired,
  upVotesBy: Proptypes.arrayOf(Proptypes.string).isRequired,
  downVotesBy: Proptypes.arrayOf(Proptypes.string).isRequired,
};

ThreadDetail.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
  createdAt: Proptypes.string.isRequired,
  owner: Proptypes.shape(userShape).isRequired,
  upVotesBy: Proptypes.arrayOf(Proptypes.string).isRequired,
  downVotesBy: Proptypes.arrayOf(Proptypes.string).isRequired,
  comments: Proptypes.shape(commentShape).isRequired,
  authUser: Proptypes.string.isRequired,
  like: Proptypes.func,
  dislike: Proptypes.func,
};

ThreadDetail.defaultProps = {
  like: null,
  dislike: null,
};

export { userShape, commentShape };

export default ThreadDetail;
