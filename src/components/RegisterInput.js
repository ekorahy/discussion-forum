import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <input type="text" className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-700" value={name} onChange={onNameChange} placeholder="Name" required />
      <input type="email" className="bg-gray-200 border-2 mt-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-purple-700" value={email} onChange={onEmailChange} placeholder="Email" required />
      <input type="password" className="bg-gray-200 border-2 mt-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-700" value={password} onChange={onPasswordChange} placeholder="Password" required />
      <button className="bg-purple-700 border-2 mt-2 border-gray-200 rounded w-full py-2 px-4 text-gray-100" type="button" onClick={() => register({ name, email, password })}>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
