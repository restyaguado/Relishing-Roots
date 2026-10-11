import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import initialRecipes from './data/recipes';

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [favorites, setFavorites] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [recipe, ...prev]);
  };

  const toggleFavorite = (title) => {
    setFavorites((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <>
      <Navbar />
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;