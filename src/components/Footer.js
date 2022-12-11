import React from 'react';
import { Link } from 'react-router-dom';
import { FaNetworkWired } from 'react-icons/fa';
import Logo from '../images/logo.png';

function Footer() {
  return (
    <footer className='z-10'>
      <div className='bg-white px-4 py-6'>
        <div className='flex items-center justify-between xl:container'>
          <div className='lg:flex lg:flex-col'>
            <div>
              <Link to="/" className='flex items-center mr-6'>
                <img src={Logo} alt="Logo image" className="w-10 h-10 mr-2 md:w-14 md:h-14" />
                <div>
                  <h1 className="font-bold font-Philosopher text-xl text-primary sm:text-2xl">Disfo App</h1>
                  <p className='font-Quicksand text-secondary text-sm md:block'>Discussion Forum App.</p>
                </div>
              </Link>
            </div>
            <div className='hidden mt-4 lg:block'>
              <p className='w-4/5 font-Quicksand text-secondary italic border-l-4 border-l-secondary pl-4'>
                {`" Come join and discuss with this open and friendly community. We will appreciate
                any constructive opinion and can help us all understand the
                topics we are discussing. Come on, join and discuss with this
                open and friendly community. We would appreciate
                any constructive opinion and can help all of us to understand
                the topic we are discussing better. "`}
              </p>
            </div>
          </div>
          <div className='font-Quicksand text-right md:text-center'>
            <h2 className='flex items-center text-primary font-bold gap-1'>
              <FaNetworkWired />
              Navigation
            </h2>
            <div className='mt-2 md:mt-2'>
              <ul className='text-secondary text-sm md:text-base'>
                <li className='py-1'><Link className='hover:border-b hover:text-secondaryHover hover:border-b-secondaryHover' to="/">Threads</Link></li>
                <li className='py-1'><Link className='hover:border-b hover:text-secondaryHover hover:border-b-secondaryHover' to="/leaderboards">Leaderboards</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <p className='w-3/4 font-Quicksand text-primary text-center border-t text-sm py-6 mx-auto md:text-base'>
          Copyright © 2022 -
          {' '}
          <Link className='font-Philosopher font-bold text-primary hover:text-primaryHover hover:border-b hover:border-b-primaryHover' to="/">Disfo App</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
