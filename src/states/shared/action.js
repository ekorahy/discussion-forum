import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUser();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndThreads };
