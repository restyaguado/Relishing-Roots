function RecipeCard({ image, category, title, description, story, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full flex flex-col h-full">
      <div className="relative">
        <img src={image} alt={title} loading="lazy" className="w-full h-40 object-cover object-[5%_75%] rounded-xl" />
        <span className="absolute bottom-2 left-2 bg-white text-sm px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold" style={{ color: '#4A1A44' }}>
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-600 text-center">{description}</p>

      <hr className="my-3" />

      <div className="flex items-center mt-auto gap-2">
        <p className="text-sm italic text-gray-500 text-center flex-1">"{story}"</p>
        <button
          onClick={onToggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className="w-9 h-9 rounded-full text-white flex items-center justify-center shrink-0"
          style={{ backgroundColor: '#4A1A44' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill={isFavorite ? '#ffffff' : 'none'}
            stroke="#ffffff"
            strokeWidth="2"
          >
            <path d="M12 21s-6.716-4.35-9.428-8.03C.65 10.42 1.2 6.94 4.1 5.3c2.02-1.14 4.47-.62 5.9 1.06L12 8.5l2-2.14c1.43-1.68 3.88-2.2 5.9-1.06 2.9 1.64 3.45 5.12 1.528 7.67C18.716 16.65 12 21 12 21z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default RecipeCard;