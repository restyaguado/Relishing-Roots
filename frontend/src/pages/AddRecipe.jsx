import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../assets/defaultHero.png';

const categories = ['Breakfast', 'Dinner', 'Dessert', 'Seasonal', 'Comfort', 'Holiday'];

function AddRecipe({ onAddRecipe }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState('');
  const [story, setStory] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddRecipe({
      image: imagePreview || defaultImage,
      category,
      title: title.trim(),
      description: description.trim(),
      story: story.trim(),
    });

    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-10 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#4A1A44' }}>
        Add a Recipe
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 text-left">
        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border rounded-lg px-4 py-2"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="border rounded-lg px-4 py-2"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Story</span>
          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            rows={2}
            className="border rounded-lg px-4 py-2"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-medium text-gray-700">Photo</span>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-40 object-cover rounded-xl"
          />
        )}

        <button
          type="submit"
          className="mt-2 bg-purple-900 text-white px-6 py-3 rounded-full font-semibold"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;