# Relishing Roots

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
