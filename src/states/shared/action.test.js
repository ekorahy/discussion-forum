/**
 * scenario test
 *
 * - asyncPopulateUsersAndThreads thunk
 *    - should dispatch action correctly when data fetching success
 *    - should dispatch action and cell alert correctly when data fetching failed
 *
 * - asyncPopulateLeaderboards thunk
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and cell alert correctly when data fetching failed
*/

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveLeaderboardsActionCreator } from '../leaderboards/action';
import { asyncPopulateUsersAndThreads, asyncPopulateLeaderboards } from './action';

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getALLUser = api.getAllUser;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllUser = api._getALLUser;
    api.getAllThreads = api._getAllThreads;

    // delete backup
    delete api._getALLUser;
    delete api._getAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUser = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUser = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe('asyncPopulateLeaderboards thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllLeaderboards = api.getAllLeaderboards;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllLeaderboards = api._getAllLeaderboards;

    // delete backup
    delete api._getAllLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and cell alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllLeaderboards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
