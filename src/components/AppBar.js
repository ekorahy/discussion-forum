import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import Logo from '../images/logo2.png';
import NavMobile from './NavMobile';
import NavLink from './NavLink';

function AppBar({ authUser, signOut }) {
  const [open, setOpen] = useState(false);
  const { name, email, avatar } = authUser;

  return (
    <div className="bg-white flex justify-between items-center px-2 border-b md:container md:p-4">
      <div className="flex justify-start items-center">
        <NavMobile
          open={open}
          setOpen={setOpen}
          name={name}
          email={email}
          avatar={avatar}
          signOut={signOut}
        />
        <div>
          <Link to="/" className='flex items-center mr-10'>
            <img src={Logo} alt="Logo image" className="w-10 h-10 mr-1" />
            <h1 className="font-bold font-Philosopher text-xl text-primary sm:text-2xl">Disfo Apps</h1>
          </Link>
        </div>
        <div className='hidden md:block'>
          <NavLink to="/" desc='Threads' />
          <NavLink to="/leaderboards" desc='Leaderboards' />
          <NavLink to="/leaderboards" desc='Users' />
        </div>
      </div>
      <button
        type="button"
        className="flex relative w-14 h-14 p-4 flex-col justify-between items-center md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {/* hamburger button */}
        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'}`} />
        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
      </button>
      <div className='hidden md:block'>
        <button className="flex justify-center items-center" type="button" onClick={signOut}>
          <img src={avatar} alt={name} className="h-9 w-9 rounded-full mr-1 p-1 border-2 border-green-300" />
          <AiOutlineDown />
        </button>
      </div>
    </div>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

AppBar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default AppBar;
