import logo from '../assets/relishing_roots_icon.svg';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Relishing Roots logo" className="w-15 h-15" />
        <span
          className="text-2xl font-semibold"
          style={{ fontFamily: 'Caveat, cursive', color: '#4A1A44' }}>

          Relishing Roots

        </span>
      </div>



      <div className="flex items-center gap-8 text-gray-800 font-medium">
        <a href="/">Home</a>
        <a href="/add-recipe">Add Recipe</a>
        <a href="/favorites">Favorites</a>
        <a href="/profile">Profile</a>
      </div>



      <div className="flex items-center gap-5">
        <a href="/signup" className="text-gray-700 font-medium">Sign up</a>
        <button className="bg-purple-900 text-white px-6 py-2 rounded-full font-semibold">
          Log in
        </button>
      </div>
    </nav>



  );
}

export default Navbar;