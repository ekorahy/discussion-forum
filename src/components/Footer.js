import React from 'react';
import { Link } from 'react-router-dom';
import { FaNetworkWired } from 'react-icons/fa';
import Logo from '../images/logo.png';

function Footer() {
  return (
    <footer className='z-10'>
      <div className='bg-primary px-4 py-6'>
        <div className='flex items-center justify-between'>
          <div>
            <Link to="/" className='flex items-center mr-10'>
              <img src={Logo} alt="Logo image" className="w-10 h-10 mr-2 md:w-14 md:h-14" />
              <div>
                <h1 className="font-bold font-Philosopher text-xl text-white sm:text-2xl">Disfo App</h1>
                <q className='hidden font-Quicksand text-secondary md:block'>Discussion Forum App</q>
              </div>
            </Link>
          </div>
          <div className='font-Quicksand text-right md:text-center'>
            <p className='flex items-center text-white font-Bold gap-1'>
              <FaNetworkWired />
              Navigation
            </p>
            <div className='mt-1 md:mt-2'>
              <ul className='text-secondary text-sm md:text-base'>
                <li><Link className='border-b border-b-secondary hover:text-secondaryHover hover:border-b-secondaryHover' to="/">Threads</Link></li>
                <li><Link className='border-b border-b-secondary hover:text-secondaryHover hover:border-b-secondaryHover' to="/leaderboards">Leaderboards</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primaryHover'>
        <p className='font-Quicksand text-white text-center text-sm p-2 md:text-base'>
          Copyright© 2022 -
          {' '}
          <Link className='font-Philosopher font-bold hover:text-primary hover:border-b hover:border-b-primary' to="/">Disfo App</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
