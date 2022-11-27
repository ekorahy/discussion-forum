import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';
import RegisterImg from '../images/register_img.png';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <section id="login" className="h-min-screen">
      <div className="flex flex-wrap flex-row">
        <div className="w-full bg-slate-100 flex items-center md:w-3/5">
          <div className="inline-block">
            <img
              src={RegisterImg}
              alt="register illustration image."
              className='w-4/5 mx-auto p-8 md:p-20'
            />
          </div>
        </div>
        <div className="w-full self-center p-8 md:w-2/5">
          <h1 className="font-bold text-4xl text-purple-700">Form Register</h1>
          <p className="mt-2 mb-4">Create your account.</p>
          <RegisterInput register={onRegister} />
          <p className='mt-4'>
            Already have an account?
            {' '}
            <Link className='underline text-purple-700 hover:text-purple-500' to="/">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
