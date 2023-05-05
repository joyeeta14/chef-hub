import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { authContext } from '../Providers/AuthProviders';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { getAuth, signInWithPopup, sendEmailVerification, GithubAuthProvider ,GoogleAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.config';





const Login = () => {


  const {loginWithEmail} = useContext(authContext);
  const googleProvider = new GoogleAuthProvider();
  
const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);

  const [email, setEmail] =  useState('');
  const [password, setPassword] =  useState('');
  const [error, setError] =  useState('');
  const [user, setUser] =  useState('');

  const loginUser=(event)=>{
    event.preventDefault();
    if(email, password){
      loginWithEmail(email,password)
      .then(result =>{
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch(error => setError(error.message))
    }
    else{
      setError('You need to fulfill all requirements')
    }

  }



  const googleHandler =()=>{
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    const loggedInUser = result.user;
    console.log(loggedInUser.photoURL);
    setUser(loggedInUser);

  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
  }
)}

const githubHandler =()=>{
  signInWithPopup(auth, githubProvider)
  .then((result) => {
    const user = result.user;
    setUser(user);
  }).catch((error) => {
const errorMessage = error.message;
setError(errorMessage);
  });
}

  const verifyMail = ()=>{
    sendEmailVerification(user)
  .then(() => {
    // Email verification sent!
    // ...
  });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full px-5 shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={(e)=>setPassword(e.target.value)} type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={loginUser} className="btn btn-primary">Login</button>
                <p className='text-red-600'>{error}</p>
              </div>
              <p>New here? Please <Link className='text-violet-700' to='/register'>Register</Link> here</p>
            </div>
            <div className="text-center flex flex-col pb-10">
      <button onClick={googleHandler} class="btn btn-outline ">
        Sign In with Google  <FcGoogle className='ms-5'/>
      </button>
      <p onClick={verifyMail} className='btn btn-link'>Verify Mail Here</p>
      <button onClick={githubHandler} class="btn btn-outline ">
        Sign In with Github  <FaGithub className='ms-5'/>
      </button>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;