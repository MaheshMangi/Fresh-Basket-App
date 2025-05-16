import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginUser } from './store';

function SignIn() {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let {register,handleSubmit} = useForm();
    const myFunc = (data)=>{
        dispatch(loginUser(data));
        navigate('/');
    }
  return (
    < >
    <h1>Sign-In</h1>
    <form onClick={handleSubmit(myFunc)}>
        <input type='text' placeholder='username' {...register('username')}/>
        <input type='password' placeholder='password' {...register('password')}/>
        <button type='submit'>SignIn</button> 
    </form>
    <p> New User? <a href='/signUp'>SignUp</a></p>
      
    </ >
  )
}

export default SignIn
