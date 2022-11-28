import React from 'react';
import Proptypes from 'prop-types';
import parse from 'html-react-parser';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { TfiComment } from 'react-icons/tfi';
import { postedAt } from '../utils';

function ThreadDetail({
  id, title, body, category, createdAt, owner, upVotesBy, downVotesBy, comments,
}) {
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
        <h2 className='font-semibold font-Quicksand text-lg'>{title}</h2>
        <p className='font-Quicksand mt-2'>{parse(body)}</p>
      </div>
      <div className='flex justify-start gap-4 mt-4'>
        <p className='flex items-center'>
          <AiOutlineLike className='mr-1 mt-1' />
          {' '}
          {upVotesBy.length}
        </p>
        <p className='flex items-center'>
          <AiOutlineDislike className='mr-1 mt-1' />
          {' '}
          {downVotesBy.length}
        </p>
        <p className='flex items-center'>
          <TfiComment className='mr-1 mt-1' />
          {' '}
          {comments.length}
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
};

export { userShape, commentShape };

export default ThreadDetail;
