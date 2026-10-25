import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import RecipeDetail from './pages/RecipeDetail';
import initialRecipes from './data/recipes';
import heroImg from './assets/hero.jpg';


const DEFAULT_NAME = 'Home Cook';

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);
  const [profileName, setProfileName] = useState(DEFAULT_NAME);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [
      { ...recipe, id: `user-${Date.now()}`, addedByUser: true },
      ...prev,
    ]);
  };

  const toggleFavorite = (title) => {
    setFavorites((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const login = (newUser) => {
    setUser({ email: newUser.email });
    setProfileName(newUser.name);
  };

  const logout = () => {
    setUser(null);
    setProfileName(DEFAULT_NAME);
  };

  const currentUser = user ? { ...user, name: profileName } : null;

  return (
    <>

      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
        }}
      />

      <Navbar user={currentUser} onLogout={logout} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              recipes={recipes}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/add-recipe" element={<AddRecipe onAddRecipe={addRecipe} />} />
        <Route
          path="/favorites"
          element={
            <Favorites
              recipes={recipes}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              recipes={recipes}
              favorites={favorites}
              user={currentUser}
              name={profileName}
              onUpdateName={setProfileName}
            />
          }
        />
        <Route path="/signup" element={<SignUp onLogin={login} />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetail
              recipes={recipes}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;