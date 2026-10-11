import RecipeCard from '../components/TheRecipeCard';
import RevealOnScroll from '../components/RevealOnScroll';

function Favorites({ recipes, favorites, onToggleFavorite }) {
  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.title));

  return (
    <div className="min-h-screen px-6 sm:px-10 py-16">
      <div className="text-center mb-8">
        <h1
          className="font-bold"
          style={{
            fontFamily: 'Caveat, cursive',
            color: '#4A1A44',
            fontSize: 'clamp(2.75rem, 8vw, 4rem)',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Favorites
        </h1>
      </div>
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
        <div className="flex justify-center">
          <p className="max-w-md text-center text-gray-600 bg-white rounded-2xl shadow-md px-6 py-4">
            No favorites yet, you can tap the heart button on a recipe to save it here.
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorites;