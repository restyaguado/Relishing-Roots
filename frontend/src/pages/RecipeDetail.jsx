import { Link, useParams } from 'react-router-dom';

function RecipeDetail({ recipes, favorites, onToggleFavorite }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center px-6 sm:px-10 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-md px-8 py-8 flex flex-col items-center">
          <h1 style={{ fontFamily: 'Caveat, cursive', color: '#4A1A44', fontSize: '2.75rem', margin: 0 }}>
            Recipe not found
          </h1>
          <p className="mt-2 text-gray-600">That recipe doesn't exist (or it was added before a refresh).</p>
          <Link to="/" className="mt-6 bg-purple-900 text-white px-6 py-3 rounded-full font-semibold">
            Back to all recipes
          </Link>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.title);
  const hasIngredients = recipe.ingredients && recipe.ingredients.length > 0;
  const hasSteps = recipe.steps && recipe.steps.length > 0;

  return (
    <div className="min-h-screen px-6 sm:px-10 py-10">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block bg-white rounded-full shadow px-4 py-1 text-sm font-semibold" style={{ color: '#4A1A44' }}>
          &larr; Back to all recipes
        </Link>

        <div className="mt-4 bg-white rounded-2xl shadow-md p-4 sm:p-8">
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 sm:h-96 object-cover rounded-xl"
            />
            <span className="absolute bottom-3 left-3 bg-white text-sm px-3 py-1 rounded-full shadow">
              {recipe.category}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 style={{ fontFamily: 'Caveat, cursive', color: '#4A1A44', fontSize: '2.75rem', margin: 0 }}>
                {recipe.title}
              </h1>
              <p className="mt-1 text-gray-600">{recipe.description}</p>
            </div>
            <button
              onClick={() => onToggleFavorite(recipe.title)}
              className={
                isFavorite
                  ? 'bg-purple-900 text-white px-5 py-2 rounded-full font-medium'
                  : 'bg-white text-gray-700 px-5 py-2 rounded-full font-medium border'
              }
            >
              {isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            </button>
          </div>

          {recipe.story && (
            <div className="mt-6">
              <p className="italic text-gray-500 border-l-4 pl-4" style={{ borderColor: '#4A1A44' }}>
                "{recipe.story}"
              </p>
            </div>
          )}

          {hasIngredients && (
            <section className="mt-8">
              <h2 style={{ color: '#4A1A44' }}>Ingredients</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {hasSteps && (
            <section className="mt-8">
              <h2 style={{ color: '#4A1A44' }}>Steps</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </section>
          )}

          {!hasIngredients && !hasSteps && (
            <p className="pt-8 text-gray-500">No ingredients or steps were added for this recipe.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;