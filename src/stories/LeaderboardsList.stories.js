import React from 'react';
import LeaderboardList from '../components/LeaderboardList';

const story = {
  title: 'Leaderboards',
  component: LeaderboardList,
};

const templateStory = (args) => <LeaderboardList {...args} />;

const LeaderboardListExample = templateStory.bind({});

LeaderboardListExample.args = {
  leaderboards: [
    {
      user: {
        id: 'user-5PqX6Ldhnk_ifroq',
        name: 'Dimas Saputra',
        email: 'dimas@dicoding.com',
        avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
      },
      score: 55,
    },
    {
      user: {
        id: 'user-AWTUTO0o7wbVF0X4',
        name: 'naruto uzumaki',
        email: 'naruto@gmail.com',
        avatar: 'https://ui-avatars.com/api/?name=naruto uzumaki&background=random',
      },
      score: 20,
    },
    {
      user: {
        id: 'user-6oWew2w2Wx5xLUTU',
        name: 'Dicoding',
        email: 'admin@dicoding.com',
        avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
      },
      score: 15,
    },
    {
      user: {
        id: 'user-I-JzqXQ4e3Lrcjb8',
        name: 'Wilan',
        email: 'wilan@gmail.com',
        avatar: 'https://ui-avatars.com/api/?name=Wilan&background=random',
      },
      score: 0,
    },
    {
      user: {
        id: 'user-8fJH4RYAiE_u5sjl',
        name: 'Eko',
        email: 'ekosusilo140604@gmail.com',
        avatar: 'https://ui-avatars.com/api/?name=Eko&background=random',
      },
      score: 0,
    },
    {
      user: {
        id: 'user-Jb7HYiWwDimYUOTI',
        name: ' a',
        email: 'aaa@a.com',
        avatar: 'https://ui-avatars.com/api/?name= a&background=random',
      },
      score: 0,
    },
    {
      user: {
        id: 'user-xSAZU0m3-D89R1j9',
        name: 'anjayy',
        email: 'anjay@email.com',
        avatar: 'https://ui-avatars.com/api/?name=anjayy&background=random',
      },
      score: 0,
    },
    {
      user: {
        id: 'user-RwGt0RsgNX4_lDM3',
        name: 'a',
        email: 'rahmadhidayatulloh38@gmail.com',
        avatar: 'https://ui-avatars.com/api/?name=a&background=random',
      },
      score: 0,
    },
    {
      user: {
        id: 'user-_VhkENE1-dFRV7vA',
        name: 'rahmad hidayatulloh',
        email: 'rahmadhidayatulloh@gmail.com',
        avatar: 'https://ui-avatars.com/api/?name=rahmad hidayatulloh&background=random',
      },
      score: 0,
    },
    {
      user: {
        id: 'user-wYv6rgNI597fUrXa',
        name: 'thor',
        email: 'thor@dicoding.com',
        avatar: 'https://ui-avatars.com/api/?name=thor&background=random',
      },
      score: 0,
    },
  ],
};

export default story;

export { LeaderboardListExample };
