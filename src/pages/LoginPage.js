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
    <section id="loginPage" className="h-screen">
      <div className="flex flex-col items-center lg:flex-row lg:h-full">
        <div className="w-full bg-slate-50 flex items-center md:h-2/5 lg:w-3/5 lg:h-full">
          <div className="inline-block">
            <img
              src={LoginImg}
              alt="login illustration image."
              className='w-3/4 mx-auto p-4 md:w-3/5 md:p-10'
            />
          </div>
        </div>
        <div className="w-full self-center p-8 md:h-3/5 lg:w-2/5">
          <h1 className="font-Philosopher font-bold text-4xl text-primary md:text-6xl lg:text-4xl">Form Login</h1>
          <p className="font-Quicksand mt-2 mb-4 md:text-lg lg:text-base">Please Login to continue into the application.</p>
          <LoginInput login={onLogin} />
          <p className='font-Quicksand mt-4 md:text-lg lg:text-base'>
            Don&apos;t have an account?
            {' '}
            <Link className='underline text-link hover:text-linkHover' to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
