import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginImg from '../images/login_img.png';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section id="login" className="h-min-screen">
      <div className="flex flex-wrap flex-row">
        <div className="w-full bg-slate-100 flex items-center md:w-3/5">
          <div className="inline-block">
            <img
              src={LoginImg}
              alt="login illustration image."
              className='w-4/5 mx-auto p-8 md:p-20'
            />
          </div>
        </div>
        <div className="w-full self-center p-8 md:w-2/5">
          <h1 className="font-bold text-4xl text-purple-700">Form Login</h1>
          <p className="mt-2 mb-4">Please Login to continue into the application.</p>
          <LoginInput login={onLogin} />
          <p className='mt-4'>
            Don&apos;t have an account?
            {' '}
            <Link className='underline text-purple-700 hover:text-purple-500' to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
