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
  id, title, body, category, createdAt, ownerId, upVotesBy, downVotesBy, totalComments,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === '') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div className='px-2'>
      <div className='border rounded-lg mt-4 p-4'>
        <div className='flex justify-between'>
          <p className='border font-Quicksand inline-block px-4 rounded-md bg-slate-100 font-light'>{`# ${category}`}</p>
          <p className='font-Roboto font-light'>{postedAt(createdAt)}</p>
        </div>
        <button type="button" className='font-Quicksand font-semibold text-lg mt-2' onClick={onThreadClick} onKeyDown={onThreadPress}>{title}</button>
        <p className='font-Quicksand font-light'>{parse(body, options)}</p>
        <div className='flex justify-start gap-4 mt-2'>
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
            {totalComments}
          </p>
        </div>
      </div>
    </div>
  );
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy:
  PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
