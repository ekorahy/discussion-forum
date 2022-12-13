import React from 'react';
import LeaderboardItem from '../components/LeaderboardItem';

const story = {
  title: 'Leaderboards',
  component: LeaderboardItem,
};

const templateStory = (args) => <LeaderboardItem {...args} />;

const LeaderboardItemExample = templateStory.bind({});
LeaderboardItemExample.args = {
  user: {
    id: 'user-6oWew2w2Wx5xLUTU',
    name: 'Dicoding',
    email: 'admin@dicoding.com',
    avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
  },
  score: 15,
};

export default story;

export { LeaderboardItemExample };
