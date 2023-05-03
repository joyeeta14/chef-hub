
import { Link } from 'react-router-dom';





const Header = () => {
    return (
      // <div>
        
      //   <Link to='/login'>login</Link>
      // </div>
      <div>
        <div className="navbar  bg-neutral text-neutral-content">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">CHEF-HUB</Link>
    <div className='flex ms-96'>
      <Link className='me-32' to='/'>Home</Link>
      <Link className='me-32' to='/about'>About</Link>
      <Link to='/blog'>Blog</Link>
      </div>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
    </div>
    <div className="w-10 rounded-full ">
          <img className='mix-blend-darken' src="https://i.ibb.co/XjMLfQn/user.png" />
        </div>
  </div>
</div>
      </div>
    );
};

export default Header;