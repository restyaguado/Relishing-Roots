import { useState } from 'react';
import Hero from '../components/Hero';
import RecipeCard from '../components/TheRecipeCard';
import RevealOnScroll from '../components/RevealOnScroll';
import heroImg from '../assets/hero.jpg';

function Home({ recipes, favorites, onToggleFavorite }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesFilter = activeFilter === 'All' || recipe.category === activeFilter;
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{
      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      }}>

      <RevealOnScroll>
        <Hero
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </RevealOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16 px-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RevealOnScroll key={recipe.title}>
              <RecipeCard
                {...recipe}
                isFavorite={favorites.includes(recipe.title)}
                onToggleFavorite={() => onToggleFavorite(recipe.title)}
              />
            </RevealOnScroll>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No recipes found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;