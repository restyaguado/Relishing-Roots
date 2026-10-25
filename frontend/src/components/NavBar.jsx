import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/relishing_roots_icon.svg';

function Navbar({ user, onLogout }) {
  const { pathname } = useLocation();
  const pagesWithOwnLogo = ['/login', '/signup'];
  const showLogo = !pagesWithOwnLogo.includes(pathname);

  return (
    <nav className="flex flex-wrap items-center justify-between gap-y-3 px-4 sm:px-10 py-4 bg-white">
      <div className="flex items-center gap-2 sm:gap-3 min-h-10 sm:min-h-15">
        {showLogo && <img src={logo} alt="Relishing Roots logo" className="w-10 h-10 sm:w-15 sm:h-15" />}
        <span
          className="text-xl sm:text-2xl font-semibold"
          style={{ fontFamily: 'Caveat, cursive', color: '#4A1A44' }}>

          Relishing Roots

        </span>
      </div>



      <div className="order-last w-full flex items-center justify-center gap-5 text-sm sm:text-base lg:order-none lg:w-auto lg:gap-8 text-gray-800 font-medium">
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
      </div>



      <div className="flex items-center gap-3 sm:gap-5">
        {user ? (
          <>
            <Link to="/profile" className="text-sm sm:text-base text-gray-700 font-medium">
              Hi, {user.name}
            </Link>
            <button
              onClick={onLogout}
              className="text-sm sm:text-base bg-purple-900 text-white px-4 sm:px-6 py-2 rounded-full font-semibold"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="text-sm sm:text-base text-gray-700 font-medium">Sign up</Link>
            <Link
              to="/login"
              className="text-sm sm:text-base bg-purple-900 text-white px-4 sm:px-6 py-2 rounded-full font-semibold"
            >
              Log in
            </Link>
          </>
        )}
      </div>
    </nav>



  );
}

export default Navbar;