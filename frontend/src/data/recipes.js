const recipes = [
  {
    image: '/ImagesForRecipe/MangoStickyRice.jpg',
    category: 'Dessert',
    title: 'Mango Sticky Rice',
    description: 'Sweet and comforting dessert, made from my family kitchen.',
    story: 'I miss my lola, she taught me how to make this every winter',
  },

  {
    image: '/ImagesForRecipe/SundayPotRoast.jpg',
    category: 'Dinner',
    title: 'Sunday Pot Roast',
    description: 'Dad made it, slow cooked with comfort.',
    story: "This is the indication in our house when it's sundays",
  },

  {
    image: '/ImagesForRecipe/Pancakes.jpg',
    category: 'Breakfast',
    title: 'Saturday Pancakes',
    description: 'The smell that used to wake up the whole house.',
    story: 'Dad flipped too high once, and it thrown outside the window xD.',
  },

  {
    image: '/ImagesForRecipe/Noodle.jpg',
    category: 'Comfort',
    title: "Auntie's Noodle Soup",
    description: 'Made whenever someone in the family caught a cold.',
    story: 'Still the first thing I crave when I\'m sick.',
  },

  {
    image: '/ImagesForRecipe/RicePilaf.jpg',
    category: 'Holiday',
    title: 'Holiday Rice Pilaf',
    description: 'Never missing from the table on special occasions.',
    story: 'No holiday table looked complete without it.',
  },

  {
    image: '/ImagesForRecipe/GingerCookie.jpg',
    category: 'Dessert',
    title: "Grandpa's Ginger Cookies",
    description: 'Crisp on the outside, soft in the middle, always a favorite.',
    story: 'He hid them from us. We always found them.',
  },

  {
    image: '/ImagesForRecipe/Adobo.jpg',
    category: 'Dinner',
    title: 'Weekend Adobo',
    description: 'The dish everyone learns first, and never stops making.',
    story: 'Every family has their own version. This one is ours.',
  },

  {
    image: '/ImagesForRecipe/FriedRice.jpg',
    category: 'Breakfast',
    title: 'Garlic Fried Rice',
    description: 'Leftover rice, turned into something worth waking up for.',
    story: 'Mom made this every time there was rice left from the night before.',
  },

  {
    image: '/ImagesForRecipe/SquashSoup.jpg',
    category: 'Seasonal',
    title: 'Squash Soup',
    description: 'A quiet, warm dish for the first cold nights of the year.',
    story: 'The smell alone means the seasons are changing.',
  },

  {
    image: '/ImagesForRecipe/Panit.jpg',
    category: 'Dessert',
    title: 'Banana Fritters',
    description: 'A quick treat from whatever ripe bananas were left.',
    story: 'Nothing in this house ever went to waste, especially not dessert.',
  },
];


const details = {
  'Mango Sticky Rice': {
    ingredients: ['1 cup glutinous (sticky) rice', 
      '1 cup coconut milk', 
      '3 tbsp sugar', 
      '1/2 tsp salt', 
      '2 ripe mangoes, sliced'],

    steps: ['Soak the rice for at least 4 hours, then steam until tender.', 
      'Warm the coconut milk with the sugar and salt, and stir half into the hot rice.', 
      'Serve with sliced mango and the remaining coconut sauce.'],
  },

  'Sunday Pot Roast': {
    ingredients: ['1.5 kg beef chuck roast', 
      '4 carrots, chunked', 
      '3 potatoes, quartered', 
      '1 onion, sliced', 
      '2 cups beef broth', 
      'Salt, pepper and thyme'],

    steps: ['Season the roast and sear on all sides in a heavy pot.', 
      'Add the onion, broth and thyme, cover, and cook at 160°C for 2.5 hours.', 
      'Add the carrots and potatoes for the last hour and cook until fork-tender.'],
  },

  'Saturday Pancakes': {
    ingredients: ['1 1/2 cups flour', 
      '2 tbsp sugar', 
      '2 tsp baking powder', 
      '1 egg', 
      '1 1/4 cups milk', 
      '3 tbsp melted butter'],
      
    steps: ['Whisk the dry ingredients, then mix in the egg, milk and butter until just combined.', 'Pour 1/4 cup of batter at a time onto a lightly greased hot pan.', 'Flip when bubbles form (not too high!) and cook until golden.'],
  },

  "Auntie's Noodle Soup": {
    ingredients: ['200 g egg noodles', 
      '1 liter chicken broth', 
      '2 cloves garlic, minced', 
      '1 thumb of ginger, sliced', 
      '1 cup shredded chicken', 
      'Spring onions to finish'],
      
    steps: ['Simmer the broth with the garlic and ginger for 10 minutes.', 
      'Add the chicken, then cook the noodles in the broth until soft.', 
      'Top with spring onions and serve piping hot.'],
  },

  'Holiday Rice Pilaf': {
    ingredients: ['1 1/2 cups long-grain rice', 
      '2 tbsp butter', 
      '1/2 cup vermicelli, broken up', 
      '3 cups chicken stock', 
      '1/2 cup toasted almonds', 'Salt'],

    steps: ['Toast the vermicelli in butter until golden, then stir in the rice.', 
      'Add the stock and salt, bring to a boil, then cover and cook on low for 18 minutes.', 
      'Rest for 5 minutes, fluff, and top with the toasted almonds.'],
  },

  "Grandpa's Ginger Cookies": {
    ingredients: ['2 1/4 cups flour', 
      '1 tbsp ground ginger', 
      '1 tsp cinnamon', 
      '3/4 cup butter, softened', 
      '1 cup brown sugar', 
      '1/4 cup molasses', '1 egg'],

    steps: ['Cream the butter and sugar, then beat in the egg and molasses.', 
      'Mix in the dry ingredients and chill the dough for 30 minutes.', 
      'Roll into balls and bake at 175°C for 10-12 minutes until the edges are crisp.'],
  },

  'Weekend Adobo': {
    ingredients: ['1 kg chicken or pork, cut up', 
      '1/2 cup soy sauce', 
      '1/2 cup vinegar', 
      '1 head garlic, crushed', 
      '3 bay leaves', 
      '1 tsp whole peppercorns'],

    steps: ['Combine everything in a pot and marinate for 30 minutes.', 
      'Bring to a boil, then simmer covered for 40 minutes.', 
      'Uncover and reduce the sauce until glossy; serve with plenty of rice.'],
  },

  'Garlic Fried Rice': {
    ingredients: ['3 cups day-old rice', 
      '6 cloves garlic, minced', 
      '3 tbsp oil', 
      'Salt and pepper', 
      'Fried egg to serve'],

    steps: ['Fry the garlic in oil until golden, careful not to burn it.', 
      'Add the rice, breaking up clumps, and stir-fry until heated through.', 
      'Season to taste and serve with a fried egg on top.'],
  },

  'Squash Soup': {
    ingredients: ['1 medium squash, peeled and cubed', 
      '1 onion, chopped', 
      '2 cloves garlic', 
      '4 cups vegetable stock', 
      '1/2 cup cream', 
      'Salt and pepper'],

    steps: ['Soften the onion and garlic in a pot, then add the squash and stock.', 
      'Simmer for 20 minutes until the squash is very soft.', 
      'Blend until smooth, stir in the cream, and season to taste.'],
  },

  'Banana Fritters': {
    ingredients: ['4 ripe bananas', 
      '1 cup flour', 
      '1/4 cup sugar', 
      '1/2 cup water or milk', 
      'Oil for frying'],
    steps: ['Mash the bananas and mix with the flour, sugar and water into a thick batter.', 
      'Drop spoonfuls into hot oil.', 
      'Fry until golden on both sides and drain on paper towels.'],
  },

};

export default recipes.map((recipe, index) => ({
  id: `recipe-${index + 1}`,
  ...recipe,
  ...details[recipe.title],

}));