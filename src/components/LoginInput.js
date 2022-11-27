import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <input type="email" className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-700" value={email} onChange={onEmailChange} placeholder="Email" />
      <input type="password" className="bg-gray-200 border-2 mt-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-700" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button className="bg-purple-700 border-2 mt-2 border-gray-200 rounded w-full py-2 px-4 text-gray-100" type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
