# Relishing Roots

<<<<<<< HEAD
A recipe site for family dishes and stories. Easily browse and search recipes with filters, view full recipe pages with the story, ingredients and steps, save your favorites and add your own recipes.

This is a frontend-only project, there is no backend or database, everything is stored in the browser's memory (see [Limitations](#limitations)).

## Features

- Browse a grid of recipe cards with a story and photo for each one
- Filter by category (Breakfast, Dinner, Dessert, Seasonal) and search by title or category
- Recipe pages with a large photo, the story, ingredients and steps
- Favorites: tap the heart on any card or recipe page, then see them all on the Favorites page
- Add a recipe with a title, category, description, story, ingredients, steps and an optional photo
- Profile	 page with live counts (recipes added, favorites, categories)
- Sign up / Log in screens (simulated, see below)
- Responsive layout and fade-in-on-scroll animations

## Tech

React 19, Vite, Tailwind CSS v4, React Router.

## Getting started

Make sure you have the latest Node.js LTS version.

Install the dependencies
```bash
npm install
```

Start the development server
```bash
npm run dev
```
Then open the address printed by Vite (it will be something like http://localhost:5173).
| Command | Info |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the production version in the `dist` folder |
| `npm run preview` | Runs a local preview of the production build |
| `npm run lint` | Runs ESLint to check for syntax errors |

## Project structure

```
src/
├── main.jsx               App entry point (mounts React, wraps in the router)
├── App.jsx                Shared state (recipes, favorites, user) and all routes
├── index.css              Tailwind import and global styles
├── data/
│   └── recipes.js         The starter recipes (edit these!)
├── pages/                 One file per screen/route
│   ├── Home.jsx           Hero, search, filters and the recipe grid   (/)
│   ├── RecipeDetail.jsx   A single recipe                             (/recipe/:id)
│   ├── AddRecipe.jsx      Form to add a recipe                        (/add-recipe)
│   ├── Favorites.jsx      Favorited recipes                           (/favorites)
│   ├── Profile.jsx        Profile and stats                           (/profile)
│   ├── SignUp.jsx         Sign up form                                (/signup)
│   └── Login.jsx          Log in form                                 (/login)
├── components/            Reusable pieces used across pages
│   ├── NavBar.jsx
│   ├── Hero.jsx
│   ├── TheRecipeCard.jsx
│   └── RevealOnScroll.jsx Fade-in animation wrapper
└── assets/                Images imported by the code (hero background, logo)
public/
└── ImagesForRecipe/       Photos for the starter recipes
```

`pages/` holds components that are a whole screen tied to a URL. `components/` holds smaller pieces reused inside pages.

## How the data flows

The App.jsx file holds the shared state (recipes, favorites, user) and feeds it to the pages as props, along with functions that 
can modify it (add a recipe, toggle a favorite, log in or out). The Home and Favorites both read from the same recipes and 
favorites, which is why hearting a card on one page will reflect on the other.

## Editing the starter recipes

Open the file src/data/recipes.js. Each recipe holds an image, category, title, description and story. 
The ingredients and steps for each starter recipe are in the details object near the bottom of that file, keyed by recipe title. 
Those are sample versions, so you should replace them with your family's real ones.

To add a photo to a starter recipe, copy the image into public/ImagesForRecipe/ , then reference it as 
./ImagesForRecipe/YourFile.jpg (you can also put your own images in this folder). 
We recommend keeping photos at around 900px wide and under about 150 KB in size -- larger images can cause lag when scrolling.

## Limitations

None of the data is stored. Your favorite recipes, recipes that you added, and your log in info will all be erased once you refresh the page. Also, any recipe you add will show "Recipe not found" if you refresh the page while viewing the recipe.
Photos you upload are only stored in the browser for the session they are uploaded in.
Sign up and Log in is all fake. It will take any email and password you put in and will not save it. The email you see when you log in is whatever email you signed up with, but you can type in any email and it'll still work. There is no real log in system or accounts.
Favorites are synced by title. It'll see any two recipes with the same title as the same recipe. It will have the same favorited status and everything. So just be careful not to have two recipes with the same title.

## Next step

- A backend and database for recipes, favorites and accounts to persist (or `localStorage` as a simpler first step)
- Real authentication
- Edit and delete for recipes you've added
- Filter pills for "Comfort" and "Holiday" categories (recipes only show up under "All" now)
=======
Relishing Roots is a warm, homegrown Recipe Journal web app concept built around family recipes, cultural roots, and storytelling through food.

## Project Concept

This project combines:
- a Laravel backend for app logic and API endpoints
- a frontend workspace for the web experience
- MongoDB for flexible recipe storage, notes, tags, and media metadata

The app is designed to help users:
- save favorite recipes
- organize by cuisine, season, or occasion
- add personal notes and family memories
- upload photos of dishes and ingredients
- search recipes by ingredient, mood, or meal type

## Folder Structure

```text
RelishingRoots/
├── backend/        # Laravel app
├── frontend/       # Frontend app folder
├── README.md       # Project overview and setup guide
└── .gitignore
```

## Brand Direction

### Logo concept
Design a logo that feels handcrafted and welcoming:
- palette: terracotta, cream, olive, warm brown, deep aubergine
- icon: a circular plate with a leaf and spoon or fork line art
- typography: a friendly, slightly handwritten display font paired with a clean sans-serif body font
- vibe: cozy, heritage-inspired, rooted in cooking traditions

Suggested concept:
- a round emblem with a leaf shape over a plate silhouette
- the wordmark “Relishing Roots” in a serif or script-inspired font
- subtle warm gradients to suggest homemade meals and comfort

### Tagline
“Recipes with memory, flavor, and meaning.”

## Laravel Backend Setup

The Laravel app lives in the `backend/` folder.

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

The default Laravel welcome page is the starting point for this project.

## Frontend Plan

Use the `frontend/` folder for your UI layer. This can be:
- a React app
- a Vue app
- a plain HTML/CSS/JS prototype
- a Blade-based front end if you want to keep everything in Laravel

Recommended approach for a polished app:
- Vite + React for a modern UI
- Tailwind CSS for styling
- reusable cards for recipe entries and meal planning

Example frontend structure:

```text
frontend/
├── src/
├── public/
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## MongoDB Integration

MongoDB is a good fit for flexible recipe records, arrays of ingredients, tags, notes, comments, and image metadata.

### Install the MongoDB Laravel package

```bash
cd backend
composer require mongodb/laravel-mongodb
```

### Configure `.env`

```env
DB_CONNECTION=mongodb
DB_HOST=127.0.0.1
DB_PORT=27017
DB_DATABASE=relishing_roots
DB_USERNAME=
DB_PASSWORD=
```

### Add MongoDB connection in Laravel

In `config/database.php`, configure the MongoDB connection:

```php
'mongodb' => [
    'driver' => 'mongodb',
    'dsn' => env('MONGO_DSN', 'mongodb://127.0.0.1:27017'),
    'database' => env('DB_DATABASE', 'relishing_roots'),
],
```

### Typical collections

- recipes
- ingredients
- users
- meal_plans
- bookmarks
- notes

### Example model

```php
namespace App\Models;

use MongoDB\Laravel\MongoEloquent;

class Recipe extends MongoEloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'recipes';

    protected $fillable = [
        'title',
        'description',
        'ingredients',
        'instructions',
        'tags',
        'prep_time',
        'cook_time',
        'image_url',
        'user_id',
    ];
}
```

## Core Features for the Recipe Journal

1. Add new recipe
2. Save ingredients and steps
3. Attach recipe photo
4. Tag recipes by cuisine or occasion
5. Add personal notes and family stories
6. Search by ingredient or keyword
7. Favorite recipes and track meal history
8. Filter by breakfast, lunch, dinner, dessert, or seasonal dishes

## Suggested MVP

### Pages
- Home feed
- Add Recipe form
- Recipe Detail page
- Favorites page
- Profile / My Journal
- Search and filters

### Data model
```json
{
  "title": "Mango Sticky Rice",
  "description": "A sweet, comforting dessert from my family kitchen.",
  "ingredients": ["rice", "mango", "coconut milk", "sugar"],
  "instructions": ["Cook rice", "Prepare coconut sauce", "Serve with mango"],
  "tags": ["dessert", "sweet", "family-favorite"],
  "prep_time": 20,
  "cook_time": 30,
  "image_url": "https://example.com/mango-rice.jpg",
  "story": "This recipe was taught by my grandmother during summer evenings.",
  "created_at": "2026-08-17T00:00:00Z"
}
```

## Recommended Next Steps

1. Replace the default Laravel welcome page with a landing page for Relishing Roots.
2. Design the logo and color system.
3. Build the recipe dashboard and recipe form UI.
4. Create Laravel API routes for recipes and users.
5. Add MongoDB models and repository logic.
6. Connect the frontend to the Laravel API.
7. Add authentication and profile pages.

## Suggested Launch Stack

- Laravel 12/13 for backend
- MongoDB Atlas or local MongoDB
- React + Vite or Blade for frontend
- Tailwind CSS for design
- Laravel Sanctum or JWT for auth (optional)

## Notes

This README is a starting blueprint for the app. You can evolve the design and data model as the product grows.

---

Relishing Roots is the starting point for a thoughtful recipe journal that celebrates memory, culture, and flavor.
>>>>>>> b0c5b8ed2e9e02eb2690bd9f93859fdc97faf567
