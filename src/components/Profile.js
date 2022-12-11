import React from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';

function Profile({
  openProfile, name, email, avatar, signOut,
}) {
  return (
    <div className={`absolute top-16 right-6 h-max w-max rounded-lg bg-white transform shadow-lg border ${openProfile ? 'visible' : 'hidden'}`}>
      <div className='flex flex-col'>
        <div className='flex items-center border-b border-b-slate-200 pt-6 px-6 pb-4 '>
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-2" />
          <div className='flex-col'>
            <h1 className='font-Quicksand font-bold'>{name}</h1>
            <p className='font-Quicksand text-sm text-slate-400'>{email}</p>
          </div>
        </div>
        <button className='flex items-center justify-center font-Quicksand font-bold text-sm p-4 text-red-700 hover:text-red-500' type='button' onClick={signOut}>
          <FiLogOut className='mr-1' />
          Logout
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  openProfile: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Profile;
