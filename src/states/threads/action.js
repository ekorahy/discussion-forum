import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
  TOGGLE_DISLIKE_THREAD: 'TOOGLE_DISLIKE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleLikeThreadActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDislikeThreadActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.TOGGLE_DISLIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleLikeCommentThreadActionCreator({
  threadId,
  commentId,
}) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT_THREAD,
    payload: {
      threadId,
      commentId,
    },
  };
}

function toggleDislikeCommentThreadActionCreator({
  threadId,
  commentId,
}) {
  return {
    type: ActionType.TOGGLE_DISLIKE_COMMENT_THREAD,
    payload: {
      threadId,
      commentId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddComment({ content, commentTo = '' }) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ content, commentTo });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleThreadLikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleUpVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleThreadDislikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDislikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleDownVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDislikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleThreadLikeCommentThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleLikeCommentThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleUpVoteCommentThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeCommentThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleThreadDislikeCommentThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDislikeCommentThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleDownVoteCommentThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDislikeCommentThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleLikeThreadActionCreator,
  toggleDislikeThreadActionCreator,
  toggleLikeCommentThreadActionCreator,
  toggleDislikeCommentThreadActionCreator,
  asyncAddThread,
  asyncAddComment,
  asyncToggleThreadLikeThread,
  asyncToggleThreadDislikeThread,
  asyncToggleThreadLikeCommentThread,
  asyncToggleThreadDislikeCommentThread,
};
