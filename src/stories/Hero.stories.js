import React from 'react';
import Hero from '../components/Hero';

const story = {
  title: 'Hero',
  component: Hero,
};

const templateStory = () => <Hero />;

const HeroExample = templateStory.bind({});

export default story;

export { HeroExample };
