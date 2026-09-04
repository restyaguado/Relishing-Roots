import './App.css';
import Navbar from './components/NavBar';
import Hero from './components/hero';
import RecipeCard from './components/TheRecipeCard';
import heroImg from './assets/hero.png';
import RevealOnScroll from './components/RevealOnScroll';


const recipes = [
  {
    image: './ImagesForRecipe/MangoStickyRice.jpg',
    category: 'Dessert',
    title: 'Mango Sticky Rice',
    description: 'Sweet and comforting dessert, made from my family kitchen.',
    story: 'I miss my lola, she taught me how to make this every winter',
  },


  {
    image: './ImagesForRecipe/SundayPotRoast.jpg',
    category: 'Dinner',
    title: 'Sunday Pot Roast',
    description: 'Dad made it, slow cooked with comfort.',
    story: "This is the indication in our house when it's sundays",
  },


  {
    image: './ImagesForRecipe/Pancakes.jpg',
    category: 'Breakfast',
    title: 'Saturday Pancakes',
    description: 'The smell that used to wake up the whole house.',
    story: 'Dad flipped too high once, and it thrown outside the window xD.',
  },


  {
    image: './ImagesForRecipe/Noodle.jpg',
    category: 'Comfort',
    title: "Auntie's Noodle Soup",
    description: 'Made whenever someone in the family caught a cold.',
    story: 'Still the first thing I crave when I\'m sick.',
  },


  {
    image: './ImagesForRecipe/RicePilaf.jpg',
    category: 'Holiday',
    title: 'Holiday Rice Pilaf',
    description: 'Never missing from the table on special occasions.',
    story: 'No holiday table looked complete without it.',
  },


  {
    image: './ImagesForRecipe/GingerCookie.jpg',
    category: 'Dessert',
    title: "Grandpa's Ginger Cookies",
    description: 'Crisp on the outside, soft in the middle, always a favorite.',
    story: 'He hid them from us. We always found them.',
  },


  {
    image: './ImagesForRecipe/Adobo.jpg',
    category: 'Dinner',
    title: 'Weekend Adobo',
    description: 'The dish everyone learns first, and never stops making.',
    story: 'Every family has their own version. This one is ours.',
  },


  {
    image: './ImagesForRecipe/FriedRice.jpg',
    category: 'Breakfast',
    title: 'Garlic Fried Rice',
    description: 'Leftover rice, turned into something worth waking up for.',
    story: 'Mom made this every time there was rice left from the night before.',
  },

  
  {
    image: './ImagesForRecipe/SquashSoup.jpg',
    category: 'Seasonal',
    title: 'Squash Soup',
    description: 'A quiet, warm dish for the first cold nights of the year.',
    story: 'The smell alone means the seasons are changing.',
  },


  {
    image: './ImagesForRecipe/Panit.jpg',
    category: 'Dessert',
    title: 'Banana Fritters',
    description: 'A quick treat from whatever ripe bananas were left.',
    story: 'Nothing in this house ever went to waste, especially not dessert.',
  },

];


function App() {
  return (
    <div style={{

      backgroundImage: `url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      }}>

      <Navbar />
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16 px-6">
  {recipes.map((recipe) => (
    <RevealOnScroll key={recipe.title}>
      <RecipeCard {...recipe} />
    </RevealOnScroll>
  ))}
</div>
    </div>
  );
}

export default App;