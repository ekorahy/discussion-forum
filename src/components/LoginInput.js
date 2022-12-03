import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <input type="email" className="w-full bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl lg:text-base lg:h-10" value={email} onChange={onEmailChange} placeholder="Email" required />
      <input type="password" className="w-full bg-gray-200 font-Quicksand text-primary leading-tight border-2 mt-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-primary md:h-16 md:text-xl md:mt-4 lg:text-base lg:h-10" value={password} onChange={onPasswordChange} placeholder="Password" minLength={6} required />
      <button className="w-full bg-primary font-Quicksand text-white border-2 mt-2 rounded py-2 px-4 hover:bg-primaryHover md:h-16 md:text-xl md:mt-4 lg:text-base lg:h-10" type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
