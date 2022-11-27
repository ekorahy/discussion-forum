import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { TfiComment } from 'react-icons/tfi';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, category, createdAt, ownerId, upVotesBy, downVotesBy, totalComments,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const converToPlain = (html) => {
    const tempDivElement = document.createElement('div');
    tempDivElement.innerHTML = html;
    return tempDivElement.textContent || tempDivElement.innerText || '';
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === '') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div className='px-2' role="button" tabIndex={0} onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className='border rounded-lg mt-4 p-4'>
        <div className='flex justify-between'>
          <p className='border font-Quicksand inline-block px-4 rounded-md bg-slate-100 font-light'>{`# ${category}`}</p>
          <p className='font-Roboto font-light'>{postedAt(createdAt)}</p>
        </div>
        <h2 className='font-Quicksand font-semibold text-lg mt-2'>{title}</h2>
        <p className='font-Quicksand font-light'>{converToPlain(body)}</p>
        <div className='flex mt-2'>
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
