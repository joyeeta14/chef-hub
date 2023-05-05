
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProviders';



const Header = () => {

  const { user, logOut } = useContext(authContext);
  console.log(user);

  return (
    <div>
      <div className="navbar  bg-neutral text-neutral-content flex-col lg:flex-row">
        <div className="flex-1 flex-col lg:flex-row">
          <Link to='/' className="btn btn-ghost normal-case text-xl">CHEF-HUB</Link>
          <div className='flex flex-row lg:flex-row ms-2 lg:ms-96'>
            <Link className='me-10 lg:me-32' to='/'>Home</Link>
            <Link className='me-10 lg:me-32' to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
          </div>
        </div>
        <div className="flex-none gap-2">
          {user ?
            <div className='flex items-center'>
              <div
                class="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                data-te-toggle="tooltip"
                title={user?user.displayName : '' }
              ><div className="w-10 rounded-full " >
                  <img className='mix-blend-darken' src="https://i.ibb.co/XjMLfQn/user.png" />
                </div>
              </div>
              <div className="form-control">
                <button onClick={logOut} className='me-3 ms-5 text-white'>
                  Log Out
                </button>
              </div>
            </div>
            :
            <div className="form-control">
              <button className='ms-4'>
                <Link to='/login'>Login</Link>
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;

