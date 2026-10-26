import { useState } from 'react';
import Hero from '../components/Hero';
import RecipeCard from '../components/TheRecipeCard';
import RevealOnScroll from '../components/RevealOnScroll';


const CARD_WIDTH = 'w-full sm:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)]';

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
    <>
      <RevealOnScroll>
        <Hero
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </RevealOnScroll>

      <div className="-mt-16 flex flex-wrap justify-center gap-6 pt-8 pb-16 px-6 max-w-7xl mx-auto">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RevealOnScroll key={recipe.title} className={CARD_WIDTH}>
              <RecipeCard
                {...recipe}
                isFavorite={favorites.includes(recipe.title)}
                onToggleFavorite={() => onToggleFavorite(recipe.title)}
              />
            </RevealOnScroll>
          ))
        ) : (
          <p className="bg-white rounded-2xl shadow-md px-6 py-4 text-gray-600">
            No recipes found.
          </p>
        )}
      </div>
    </>
  );
}

export default Home;