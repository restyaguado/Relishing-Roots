import { useNavigate } from "react-router-dom";

const filters = ["All", "Breakfast", "Dinner", "Dessert", "Seasonal"];

function Hero({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }) {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 text-center">
      <h1
        className="font-bold text-balance"
        style={{
          fontFamily: "Caveat, cursive",
          color: "#4A1A44",
          fontSize: "clamp(2.75rem, 8vw, 4.5rem)",
          lineHeight: "1.2",
        }}
      >
        Recipe with <span className="text-orange-500">memory</span>,
        <br />
        flavor & meaning.
      </h1>

      <p className="mt-4 text-lg italic text-gray-600 text-balance">
        Every recipe, every story, all in one place
      </p>

      <button
        onClick={() => navigate("/add-recipe")}
        className="mt-6 bg-purple-900 text-white px-8 py-3 
      rounded-full font-semibold"
      >
        + Add your first recipe
      </button>

      <div className="mt-10 w-full flex flex-wrap items-center justify-center gap-3">
        <div className="flex bg-white rounded-full overflow-hidden w-full max-w-sm sm:w-96">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 min-w-0 px-5 py-3 outline-none"
          />
          <button className="bg-purple-900 text-white px-5 py-3">Search</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-purple-900 text-white px-5 py-2 rounded-full font-medium"
                  : "bg-white text-gray-700 px-5 py-2 rounded-full font-medium"
              }
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
