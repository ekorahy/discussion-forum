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
    <section id="registerPage" className="h-screen">
      <div className="flex flex-col items-center lg:flex-row lg:h-full">
        <div className="w-full bg-slate-50 flex items-center md:h-2/5 lg:w-3/5 lg:h-full">
          <div className="inline-block">
            <img
              src={RegisterImg}
              alt="register illustration image."
              className='w-3/4 mx-auto p-4 md:w-3/5 md:p-10'
            />
          </div>
        </div>
        <div className="w-full self-center p-8 md:h-3/5 lg:w-2/5">
          <h1 className="font-Philosopher font-bold text-4xl text-primary md:text-6xl lg:text-4xl">Form Register</h1>
          <p className="font-Quicksand mt-2 mb-4 md:text-lg lg:text-base">Create your account.</p>
          <RegisterInput register={onRegister} />
          <p className='font-Quicksand mt-4 md:text-lg lg:text-base'>
            Already have an account?
            {' '}
            <Link className='underline text-link hover:text-linkHover' to="/">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
