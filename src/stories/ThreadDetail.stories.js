import React from 'react';
import ThreadDetail from '../components/ThreadDetail';

const stories = {
  title: 'Thread Detail',
  component: ThreadDetail,
};

const TemplateStory = (args) => <ThreadDetail {...args} />;

const onLikeClick = () => {};
const onDislikeClick = () => {};
const onNeutralLikeClick = () => {};
const onNeutralDislikeClick = () => {};
const onCommentSubmit = () => {};

const ThreadDetailExample = TemplateStory.bind({});
ThreadDetailExample.args = {
  id: 'thread-08_nUU2fhu1P5nre',
  title: 'Pengalaman Belajar React di Dicoding',
  body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
  createdAt: '2022-11-13T09:59:31.019Z',
  owner: {
    id: 'user-5PqX6Ldhnk_ifroq',
    name: 'Dimas Saputra',
    avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
  },
  category: 'react',
  comments: [
    {
      id: 'comment-sKlREkOXpTp5bdWj',
      content: 'sdafjdskalfjksakfj',
      createdAt: '2022-12-13T08:04:38.648Z',
      owner: {
        id: 'user-jagR7DSiS0LcSURz',
        name: 'rifqi',
        avatar: 'https://ui-avatars.com/api/?name=rifqi&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
    {
      id: 'comment-YTSJSqOj7XQgFB33',
      content: 'test',
      createdAt: '2022-12-13T04:32:25.594Z',
      owner: {
        id: 'user-5PqX6Ldhnk_ifroq',
        name: 'Dimas Saputra',
        avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
      },
      upVotesBy: [],
      downVotesBy: [
        'user-5PqX6Ldhnk_ifroq',
      ],
    },
  ],
  upVotesBy: [
    'user-6oWew2w2Wx5xLUTU',
    'user-5PqX6Ldhnk_ifroq',
  ],
  downVotesBy: [],
  authUser: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItQVdUVVRPMG83d2JWRjBYNCIsImlhdCI6MTY3MDkyMDQxOX0.ZOx0gBpllAyTnsfa3IVt0BFd_0DDG2IwbZANDmzEGVY',
  like: onLikeClick,
  dislike: onDislikeClick,
  neutralLike: onNeutralLikeClick,
  neutralDislike: onNeutralDislikeClick,
  addCommentThread: onCommentSubmit,
};

export default stories;

export { ThreadDetailExample };
