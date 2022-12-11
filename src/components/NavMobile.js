import React from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';
import NavLinkMobile from './NavLinkMobile';

function NavMobile({
  open, setOpen, name, email, avatar, signOut,
}) {
  return (
    <div className={`absolute top-12 right-8 h-max w-max rounded-lg bg-white transform ${open ? 'visible' : 'hidden'} border shadow-lg`}>
      <div className='flex flex-col'>
        <div className='flex items-center border-b border-b-slate-200 pt-6 px-6 pb-4 '>
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-2" />
          <div className='flex-col'>
            <h1 className='font-Quicksand font-bold'>{name}</h1>
            <p className='font-Quicksand text-sm text-slate-400'>{email}</p>
          </div>
        </div>
        <div className='border-b border-b-slate-200'>
          <NavLinkMobile to="/" open={open} setOpen={setOpen} desc="Threads" />
          <NavLinkMobile to="/leaderboards" open={open} setOpen={setOpen} desc="Leaderboards" />
        </div>
        <button className='flex items-center justify-center font-bold font-Quicksand p-4 text-red-700 hover:text-red-500' type='button' onClick={signOut}>
          <FiLogOut className='text-2xl mr-1' />
          Logout
        </button>
      </div>
    </div>
  );
}

NavMobile.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default NavMobile;
