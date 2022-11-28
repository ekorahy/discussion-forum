import React from 'react';
import { VscCommentDiscussion } from 'react-icons/vsc';

function Hero() {
  return (
    <section className='w-full bg-primary'>
      <div className='flex items-center py-10 px-2 md:px-8 md:mx-8'>
        <div className='text-8xl md:text-9xl text-white mr-2'>
          <VscCommentDiscussion />
        </div>
        <div>
          <h2 className='font-Quicksand font-bold text-xl md:text-2xl text-white'>Welcome to Discussion Forum App</h2>
          <p className='font-Roboto text-slate-400'>discuss whatever you think here.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
