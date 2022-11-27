import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLogout } from 'react-icons/ai';
import NavLinkMobile from './NavLinkMobile';

function NavMobile({
  open, setOpen, name, email, avatar, signOut,
}) {
  return (
    <div className={`absolute top-12 right-8 h-max w-max rounded-lg bg-white transform ${open ? 'visible' : 'hidden'} border`}>
      <div className='flex flex-col'>
        <div className='flex items-center border-b pt-6 px-6 pb-4 '>
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-2" />
          <div className='flex-col'>
            <h1 className='font-Quicksand font-bold text-2xl'>{name}</h1>
            <p className='font-Quicksand text-lg text-slate-400'>{email}</p>
          </div>
        </div>
        <div className='border-b'>
          <NavLinkMobile to="/" open={open} setOpen={setOpen} desc="Home" />
          <NavLinkMobile to="/" open={open} setOpen={setOpen} desc="Threads" />
          <NavLinkMobile to="/" open={open} setOpen={setOpen} desc="Leaderboards" />
        </div>
        <button className='flex items-center justify-center font-semibold font-Quicksand text-xl p-4 text-red-500 hover:text-secondary' type='button' onClick={signOut}>
          <AiOutlineLogout className='text-2xl mr-1' />
          Sign Out
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
