import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProviders';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";


const Login = () => {


  const info = useContext(authContext);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();


  const googleHandler =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);

  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);

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
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>New here? Please <Link className='text-violet-700' to='/register'>Register</Link> here</p>
            </div>
            <div className="text-center flex flex-col pb-10">
      <button onClick={googleHandler} class="btn btn-outline ">
        Sign In with Google  <FcGoogle className='ms-5'/>
      </button>
      <br />
      <button class="btn btn-outline ">
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