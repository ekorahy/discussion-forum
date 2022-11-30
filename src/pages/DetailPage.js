import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import {
  asyncReceiveThreadDetail,
  asyncToggleLikeThreadDetail,
  asyncToggleDislikeThreadDetail,
  asyncToggleLikeCommentThreadDetail,
  asyncToggleDislikeCommentThreadDetail,
} from '../states/threadDetail/action';
import ThreadCommentInput from '../components/ThreadCommentInput';
import ThreadCommentList from '../components/ThreadCommentList';
import { asyncAddComment } from '../states/threads/action';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onCommentThread = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }));
  };

  const onLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleLikeThreadDetail(threadId));
  };

  const onDislikeThreadDetail = (threadId) => {
    dispatch(asyncToggleDislikeThreadDetail(threadId));
  };

  const onLikeCommentThreadDetail = (threadId) => {
    dispatch(asyncToggleLikeCommentThreadDetail(threadId));
  };

  const onDislikeCommentThreadDetail = (threadId) => {
    dispatch(asyncToggleDislikeCommentThreadDetail(threadId));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section>
      <div className='w-3/4 bg-white mx-auto py-4 px-8'>
        <ThreadDetail
          {...detailThread}
          authUser={authUser.id}
          like={onLikeThreadDetail}
          dislike={onDislikeThreadDetail}
        />
        <ThreadCommentInput commentThread={onCommentThread} />
        <ThreadCommentList
          {...detailThread}
          like={onLikeCommentThreadDetail}
          dislike={onDislikeCommentThreadDetail}
        />
      </div>
    </section>
  );
}

export default DetailPage;
