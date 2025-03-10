// src/components/SignupForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import signupBg from '../assets/images/login.jpg'; // Update with your image

type FormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log('Signup Data:', data);
    // Add your signup logic here
  };

  // Animation configurations
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-screen-xl w-full bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Image Section with Overlay */}
        <div className="relative hidden md:block">
          <img 
            src={signupBg} 
            alt="Signup Background"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <motion.div 
            variants={item}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8"
          >
            <h1 className="text-5xl font-extrabold mb-4">Join the Community</h1>
            <p className="text-lg mb-8">Create your account to access all features</p>
          </motion.div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 md:p-16 space-y-6">
          <motion.h2 
            variants={item}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Create Account
          </motion.h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
            {/* Email Field */}
            <motion.div variants={item}>
              <input
                type="email"
                placeholder="Email Address"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
                className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </motion.div>

            {/* Username Field */}
            <motion.div variants={item}>
              <input
                type="text"
                placeholder="Username"
                {...register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 3,
                    message: 'Minimum 8 characters',
                  },
                })}
                className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.username && (
                <p className="mt-1 text-red-500 text-sm">{errors.username.message}</p>
              )}
            </motion.div>

            {/* Password Field */}
            <motion.div variants={item}>
              <input
                type="password"
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Minimum 6 characters',
                  },
                })}
                className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>
              )}
            </motion.div>

            {/* Confirm Password Field */}
            <motion.div variants={item}>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register('confirmPassword', {
                  required: 'Confirm password is required',
                  validate: (value) => 
                    value === watch('password') || 'Passwords must match',
                })}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.button 
              variants={item}
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200 mt-6"
            >
              Sign Up
            </motion.button>
          </form>

          {/* Login Link */}
          <motion.p 
            variants={item}
            className="mt-6 text-center text-gray-600"
          >
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Log In
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default SignupForm;