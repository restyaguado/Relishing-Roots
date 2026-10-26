import { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImage from "../assets/defaultHero.png";

const categories = [
  "Breakfast",
  "Dinner",
  "Dessert",
  "Seasonal",
  "Comfort",
  "Holiday",
];

function AddRecipe({ onAddRecipe }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [story, setStory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [imageFileName, setImageFileName] = useState("");

  const toLines = (text) =>
    text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFileName(file.name);
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
      ingredients: toLines(ingredients),
      steps: toLines(steps),
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 sm:px-10 py-16">
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 w-full max-w-md">
        <h1
          className="text-3xl font-bold text-center"
          style={{ color: "#4A1A44", margin: "0 0 24px" }}
        >
          Add a Recipe
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
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
                <option key={c} value={c}>
                  {c}
                </option>
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
            <span className="font-medium text-gray-700">
              Ingredients (one per line)
            </span>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows={4}
              className="border rounded-lg px-4 py-2"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-medium text-gray-700">
              Steps (one per line)
            </span>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows={4}
              className="border rounded-lg px-4 py-2"
            />
          </label>

          <div className="flex flex-col gap-1">
            <span className="font-medium text-gray-700">Photo</span>
            <div className="flex flex-wrap items-center gap-3">
              <label
                className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-md border border-black px-3 py-2 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-purple-900"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="sr-only"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M10 4v12M4 10h12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Add photo</span>
              </label>
              {imageFileName && (
                <span className="min-w-0 break-all text-sm text-gray-600">
                  {imageFileName}
                </span>
              )}
            </div>
          </div>

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
    </div>
  );
}

export default AddRecipe;
