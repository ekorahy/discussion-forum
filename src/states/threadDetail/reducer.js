import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.ADD_COMMENT:
      return [action.payload.comment, ...detailThread.comments];
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id
              !== action.payload.userId) : detailThread.upVotesBy.concat([action.payload.userId]),
      };
    case ActionType.TOGGLE_DISLIKE_THREAD_DETAIL:
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id
          !== action.payload.userId) : detailThread.downVotesBy.concat([action.payload.userId]),
      };
    case ActionType.TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          && detailThread.upVotesBy.filter((id) => id
              !== action.payload.userId),
      };
    case ActionType.TOGGLE_NEUTRAL_DISLIKE_THREAD_DETAIL:
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          && detailThread.downVotesBy.filter((id) => id
          !== action.payload.userId),
      };
    default:
      return detailThread;
  }
}

export default threadDetailReducer;
