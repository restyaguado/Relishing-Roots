import { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile({ recipes, favorites, user, name, onUpdateName }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(name);

  const addedCount = recipes.filter((recipe) => recipe.addedByUser).length;
  const categoryCount = new Set(recipes.map((recipe) => recipe.category)).size;
  const initial = name.charAt(0).toUpperCase();

  const stats = [
    { label: 'Recipes added', value: addedCount },
    { label: 'Favorites', value: favorites.length },
    { label: 'Categories', value: categoryCount },
  ];

  const startEditing = () => {
    setDraft(name);
    setEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const trimmed = draft.trim();
    if (trimmed) onUpdateName(trimmed);
    setEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 sm:px-10 py-16 text-center">
      <div className="bg-white rounded-2xl shadow-md px-8 py-8 w-full max-w-lg flex flex-col items-center">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-semibold"
          style={{ backgroundColor: '#4A1A44', fontFamily: 'Caveat, cursive' }}
        >
          {initial}
        </div>

        {editing ? (
          <form onSubmit={handleSave} className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <input
              type="text"
              aria-label="Display name"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={30}
              autoFocus
              className="border rounded-full px-4 py-2 bg-white text-center"
            />
            <button
              type="submit"
              className="bg-purple-900 text-white px-5 py-2 rounded-full font-semibold"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="bg-white text-gray-700 px-5 py-2 rounded-full font-semibold shadow"
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            <h1
              style={{ fontFamily: 'Caveat, cursive', color: '#4A1A44', fontSize: '2.75rem', margin: '8px 0 0' }}
            >
              {name}
            </h1>
            <button
              onClick={startEditing}
              className="mt-1 text-sm font-semibold underline"
              style={{ color: '#4A1A44' }}
            >
              Edit name
            </button>
          </>
        )}

        <p className="mt-2 text-gray-600 italic">
          {user ? user.email : 'Keeping the family recipes alive'}
        </p>

        {!user && (
          <p className="mt-3 text-sm text-gray-600">
            <Link to="/signup" className="font-semibold" style={{ color: '#4A1A44' }}>
              Sign up
            </Link>{' '}
            to save your account details.
          </p>
        )}
      </div>

      <div className="mt-10 grid grid-cols-3 gap-4 w-full max-w-lg">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl shadow-md py-6 px-2">
            <p className="text-3xl font-bold" style={{ color: '#4A1A44' }}>
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <Link
          to="/add-recipe"
          className="whitespace-nowrap bg-purple-900 text-white px-6 py-3 rounded-full font-semibold"
        >
          + Add a recipe
        </Link>
        <Link
          to="/favorites"
          className="whitespace-nowrap bg-white text-gray-700 px-6 py-3 rounded-full font-semibold shadow"
        >
          View favorites
        </Link>
      </div>
    </div>
  );
}

export default Profile;