import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <input type="email" className="font-Quicksand bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-white focus:border-primary" value={email} onChange={onEmailChange} placeholder="Email" />
      <input type="password" className="font-Quicksand bg-gray-200 border-2 mt-2 border-gray-200 rounded w-full py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-white focus:border-primary" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button className="font-Quicksand bg-primary border-2 mt-2 rounded w-full py-2 px-4 text-white hover:bg-primaryHover" type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
