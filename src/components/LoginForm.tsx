// src/pages/SimpleLogin.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { init } from '@instantdb/react';
const APP_ID = '7e41af19-4d25-44a4-a496-40c3a18487fc';
const db = init({ appId: APP_ID });
import loginImage from '../assets/images/login.jpg';

type LoginFormInputs = {
  email: string;
  password: string;
};

const url = db.auth.createAuthorizationURL({
  clientName: 'google',
  redirectURL: window.location.href,
});

const SimpleLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log('Login Data:', data);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl w-full bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden"
      >
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 p-6 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register('email', { required: 'Email is required' })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <motion.button
              variants={itemVariants}
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Sign In
            </motion.button>
          </form>

          <motion.div variants={itemVariants} className="mt-4">
            {/* Updated Google Sign-In component */}
            <a 
              href={url} 
              className="flex items-center text-indigo-600 hover:underline"
            >
              Log in with Google
              <FcGoogle className="ml-2" />
            </a>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-center text-sm text-gray-600"
          >
            Not registered?{' '}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </Link>
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hidden md:block w-1/2 bg-gray-200"
        >
          <img
            src={loginImage}
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SimpleLogin;