import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { TfiComment } from 'react-icons/tfi';
import { postedAt } from '../utils';

const options = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.attribs.class === 'remove') {
      return <></>;
    }
  },
};

function ThreadItem({
  id, title, body, category, createdAt, upVotesBy, downVotesBy,
  totalComments, user, authUser, like, dislike, neutralLike, neutralDislike,
}) {
  const navigate = useNavigate();
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

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  return (
    <div className='px-2 font-Quicksand '>
      <div className='border rounded-lg mt-4 p-4'>
        <div className='flex justify-between'>
          <p className='border inline-block px-4 rounded-md bg-slate-100 font-light'>{`# ${category}`}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
          <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full mr-1" />
          <div>
            <h2 className='text-lg font-bold text-primary text-ellipsis overflow-hidden'>{user.name}</h2>
            <p className='font-light text-sm md:text-base'>{`Created ${postedAt(createdAt)}`}</p>
          </div>
        </div>
        <button type="button" className='font-Quicksand font-semibold text-left text-xl mt-4 text-primary hover:text-purple-700 hover:underline' onClick={onThreadClick}>{title}</button>
        <p className='font-Quicksand font-light text-ellipsis overflow-hidden mt-2'>{parse(body, options)}</p>
        <div className='flex justify-start gap-3 mt-4'>
          <p className='flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-lg'>
            <button type="button" onClick={onLikeClick}>
              { isThreadLiked ? <AiOutlineLike className=' text-green-500' />
                : <AiOutlineLike />}
            </button>
            {' '}
            {isThreadLiked ? <span className='text-green-500'>{upVotesBy.length}</span> : <span>{upVotesBy.length}</span>}
          </p>
          <p className='flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-lg'>
            <button type="button" onClick={onDislikeClick}>
              { isThreadDisliked ? <AiOutlineDislike className=' text-rose-700' />
                : <AiOutlineDislike />}
            </button>
            {' '}
            {isThreadDisliked ? <span className='text-rose-700'>{downVotesBy.length}</span> : <span>{downVotesBy.length}</span>}
          </p>
          <p className='flex items-center gap-1 px-3 py-1'>
            <TfiComment className='mr-1 mt-1' />
            {' '}
            {totalComments}
          </p>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy:
  PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func,
};

ThreadItem.defaultProps = {
  like: null,
  dislike: null,
  neutralLike: null,
  neutralDislike: null,
};

export { threadItemShape };

export default ThreadItem;
