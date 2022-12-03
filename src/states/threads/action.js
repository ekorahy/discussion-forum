import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
  TOGGLE_DISLIKE_THREAD: 'TOOGLE_DISLIKE_THREAD',
  TOGGLE_NEUTRAL_LIKE_THREAD: 'TOGGLE_NEUTRAL_LIKE_THREAD',
  TOGGLE_NEUTRAL_DISLIKE_THREAD: 'TOGGLE_NEUTRAL_DISLIKE_THREAD',
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

function toggleNeutralLikeThreadActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralDislikeThreadActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_DISLIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAddComment({ content, commentTo }) {
  return async (dispatch) => {
    dispatch(showLoading());
    const comment = await api.createComment({ content, commentTo });
    dispatch(addCommentActionCreator(comment));

    dispatch(hideLoading());
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

function asyncToggleThreadNeutralLikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralLikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralLikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleThreadNeutralDislikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralDislikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralDislikeThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleLikeThreadActionCreator,
  toggleDislikeThreadActionCreator,
  toggleNeutralLikeThreadActionCreator,
  toggleNeutralDislikeThreadActionCreator,
  asyncAddThread,
  asyncAddComment,
  asyncToggleThreadLikeThread,
  asyncToggleThreadDislikeThread,
  asyncToggleThreadNeutralLikeThread,
  asyncToggleThreadNeutralDislikeThread,
};
