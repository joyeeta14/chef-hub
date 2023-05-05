import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProviders';

const Register = () => {

  const { registerWithEmail } = useContext(authContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const registrate = (event) => {
    event.preventDefault();
    setError('');


    if (!/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(password)) {
      setError('Your password must contain atleast six characters, at least one letter and one number')
      return;
    }
    if (email, name, url, password) {
      registerWithEmail(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => setError(error))
    }
  }



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form>
              <div className="card-body">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" required name='name' placeholder="Your Name" onChange={(e) => setName(e.target.value)} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" onChange={(e) => setEmail(e.target.value)} name='email' placeholder="Your Email" required className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="url" required onChange={(e) => setUrl(e.target.value)} placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div>
                  <p className='text-red-600'>{error}</p>
                </div>
                <div className="form-control mt-6">
                  <button onClick={registrate} className="btn btn-primary">Register</button>
                </div>
                <p>Already have an account? Please <Link className='text-violet-700' to='/login'>Login</Link> here</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;