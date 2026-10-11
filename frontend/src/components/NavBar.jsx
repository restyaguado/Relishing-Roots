import { Link } from 'react-router-dom';
import logo from '../assets/relishing_roots_icon.svg';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Relishing Roots logo" className="w-20 h-20" />
        <span
          className="text-2xl font-semibold"
          style={{ fontFamily: 'Caveat, cursive', color: '#4A1A44' }}>

          Relishing Roots

        </span>
      </div>



      <div className="flex items-center gap-8 text-gray-800 font-medium">
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
      </div>



      <div className="flex items-center gap-5">
        <Link to="/signup" className="text-gray-700 font-medium">Sign up</Link>
        <button className="bg-purple-900 text-white px-6 py-2 rounded-full font-semibold">
          Log in
        </button>
      </div>
    </nav>



  );
}

export default Navbar;