import logo from '../assets/relishing_roots_icon.svg';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Relishing Roots logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold text-purple-900" style={{ fontFamily: 'Caveat, cursive' }}>
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

    ///this is for now imma continue with the navbar and then add the rest of the pages later
    ///reminding myself because I am lazy asf*** and I will forget
    ///Sorry for the language but I am just being honest with myself twinn
  );
}

export default Navbar;