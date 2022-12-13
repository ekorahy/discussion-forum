import React from 'react';
import ThreadCommentList from '../components/ThreadCommentList';

const story = {
  title: 'Thread Detail',
  component: ThreadCommentList,
};

const templateStory = (args) => <ThreadCommentList {...args} />;

const ThreadCommentListExample = templateStory.bind({});
ThreadCommentListExample.args = {
  comments: [
    {
      id: 'comment-nW2VRZCHQYSnxLgJ',
      content: 'testing ',
      createdAt: '2022-12-13T09:01:40.046Z',
      owner: {
        id: 'user-AWTUTO0o7wbVF0X4',
        name: 'naruto uzumaki',
        avatar: 'https://ui-avatars.com/api/?name=naruto uzumaki&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
    {
      id: 'comment-fJ579RDuAsZdB4ER',
      content: 'Halo! Saya Dimas, dari Bandung.<br><br>Saat ini, saya sedang belajar React di Dicoding Academy.',
      createdAt: '2022-11-13T09:57:52.762Z',
      owner: {
        id: 'user-5PqX6Ldhnk_ifroq',
        name: 'Dimas Saputra',
        avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
      },
      upVotesBy: [
        'user-6oWew2w2Wx5xLUTU',
      ],
      downVotesBy: [],
    },
  ],
};

export default story;

export { ThreadCommentListExample };
