import { useState } from 'react';
import heroImg from '../assets/hero.png';

const filters = ['All', 'Breakfast', 'Dinner', 'Dessert', 'Seasonal'];

function Hero() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section
      className="bg-cover bg-center px-10 py-20 text-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <h1 className="font-bold"
          style={{ fontFamily: 'Caveat, cursive', color: '#4A1A44', fontSize: '4.5rem', lineHeight: '1.2', }}>
        Recipe with <span className="text-orange-500"> memory </span>,
        <br />
        flavor & meaning.
      </h1>


      <p className="mt-4 text-lg italic text-gray-600">
        Every recipe, every story, all in one place
      </p>


      <button className="mt-6 bg-purple-900 text-white px-8 py-3 
      rounded-full font-semibold">
        + Add your first recipe
      </button>


      <div className="mt-10 flex items-center justify-center gap-3">
        <div className="flex bg-white rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-5 py-3 outline-none"
          />
          <button className="bg-purple-900 text-white px-6">Search</button>
        </div>



        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? 'bg-purple-900 text-white px-5 py-2 rounded-full font-medium'
                : 'bg-white text-gray-700 px-5 py-2 rounded-full font-medium'
            }
          >
            {filter}
          </button>

          
        ))}
      </div>
    </section>
  );
}

export default Hero;