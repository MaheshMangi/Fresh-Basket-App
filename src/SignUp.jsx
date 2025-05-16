import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './store';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const {register,handleSubmit} = useForm();

 const myFunc = (data)=>{
  dispatch(registerUser(data));
  alert("Registration successful..");
  navigate('/signIn');
 };

   
  return (
    < >
    <h1>Sign-In</h1>
    <form onSubmit={handleSubmit(myFunc)}>
        <input type='text' placeholder='username' {...register("username")}/>
        <input type='password' placeholder='password' {...register("password")}/>
        <label>Gender:</label>
        <input type='text' placeholder='gender' {...register("gender")}/>
        <button type='submit'>Sign-Up</button>
    </form>
      
    </ >
  )
}

export default SignUp;
