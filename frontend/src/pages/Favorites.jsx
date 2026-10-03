import RecipeCard from '../components/TheRecipeCard';
import RevealOnScroll from '../components/RevealOnScroll';

function Favorites({ recipes, favorites, onToggleFavorite }) {
  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.title));

  return (
    <div className="min-h-screen px-10 py-16">
      <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#4A1A44' }}>
        Favorites
      </h1>

      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteRecipes.map((recipe) => (
            <RevealOnScroll key={recipe.title}>
              <RecipeCard
                {...recipe}
                isFavorite={true}
                onToggleFavorite={() => onToggleFavorite(recipe.title)}
              />
            </RevealOnScroll>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No added favirites yet. Start adding some recipes to your favorites!
        </p>
      )}
    </div>
  );
}

export default Favorites;