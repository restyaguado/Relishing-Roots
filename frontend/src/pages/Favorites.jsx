import RecipeCard from '../components/TheRecipeCard';
import RevealOnScroll from '../components/RevealOnScroll';


const CARD_WIDTH = 'w-full sm:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)]';

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
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {favoriteRecipes.map((recipe) => (
            <RevealOnScroll key={recipe.title} className={CARD_WIDTH}>
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