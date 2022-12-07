import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({
  category,
}) {
  return (
    <p className='inline-block m-1 px-4 py-1 font-Quicksand font-thin text-sm border rounded-lg'>{category}</p>
  );
}

const threadItemShape = {
  category: PropTypes.string.isRequired,
};

ThreadCategoryItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadCategoryItem;
