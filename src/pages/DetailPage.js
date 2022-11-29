import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadCommentInput from '../components/ThreadCommentInput';
import ThreadCommentList from '../components/ThreadCommentList';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!detailThread) {
    return null;
  }

  return (
    <section>
      <div className='w-3/4 bg-white mx-auto py-4 px-8'>
        <ThreadDetail {...detailThread} />
        <ThreadCommentInput />
        <ThreadCommentList {...detailThread} />
      </div>
    </section>
  );
}

export default DetailPage;
