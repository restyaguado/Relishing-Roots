function RecipeCard({ image, category, title, description, story }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full flex flex-col h-full">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover object-[5%_75%] rounded-xl" />
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
    className="w-9 h-9 rounded-full text-white flex items-center justify-center shrink-0"
    style={{ backgroundColor: '#4A1A44' }}
  >
    ➤
  </button>
</div>
    </div>
  );
}
export default RecipeCard;