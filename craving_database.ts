import type { CravingCategory, SwapAlternative } from './types';

export const CRAVING_CATEGORIES: CravingCategory[] = [
  {
    id: 'chips_namkeen',
    name: 'Chips & Namkeen',
    description: 'Looking for that high-dopamine, crunchy, salty satisfaction.',
    tags: ['crunchy', 'salty', 'savory', 'comfort']
  },
  {
    id: 'chocolate',
    name: 'Chocolate Cravings',
    description: 'Seeking rich, sweet, velvety cocoa goodness.',
    tags: ['sweet', 'creamy', 'comfort']
  },
  {
    id: 'instant_noodles',
    name: 'Instant Noodles',
    description: 'Craving warm, savory, slurpy comfort, often late at night.',
    tags: ['hot', 'savory', 'comfort', 'chewy']
  },
  {
    id: 'ice_cream',
    name: 'Ice Cream & Cold Desserts',
    description: 'Needing a sweet, creamy, freezing refresh.',
    tags: ['sweet', 'creamy', 'cold']
  },
  {
    id: 'late_night',
    name: 'Late Night Munchies',
    description: 'Midnight snacking fueled by routine, stress, or late studies.',
    tags: ['comfort', 'savory', 'sweet']
  },
  {
    id: 'soft_drinks',
    name: 'Soft Drinks & Fizzy Sodas',
    description: 'Seeking that refreshing, ice-cold, fizzy throat hit.',
    tags: ['fizzy', 'cold', 'sweet']
  },
  {
    id: 'cookies_biscuits',
    name: 'Cookies & Biscuits',
    description: 'Classic tea-time routine or simple sweet crunchy bites.',
    tags: ['crunchy', 'sweet', 'comfort']
  },
  {
    id: 'cake_pastry',
    name: 'Cake & Pastry Cravings',
    description: 'Needing soft, sweet, indulgent layers of baked comfort.',
    tags: ['sweet', 'creamy', 'comfort']
  },
  {
    id: 'pizza_burger',
    name: 'Pizza & Burgers',
    description: 'Craving heavy, cheesy, savory fast-food comfort.',
    tags: ['savory', 'comfort', 'creamy', 'hot']
  },
  {
    id: 'deep_fried',
    name: 'Deep Fried (Samosa / Pakora)',
    description: 'Monsoon mood, high-grease savory crunch.',
    tags: ['crunchy', 'hot', 'savory', 'comfort']
  },
  {
    id: 'candy_gummies',
    name: 'Candy & Sour Gummies',
    description: 'Craving a burst of tangy, chewy, fruity sweetness.',
    tags: ['sweet', 'chewy', 'comfort']
  },
  {
    id: 'sweet_tea_coffee',
    name: 'Sweet Coffee & Tea',
    description: 'Caffeine fix with loaded sugar for quick energy.',
    tags: ['hot', 'sweet', 'comfort']
  },
  {
    id: 'alcohol_beer',
    name: 'Alcohol & Beer',
    description: 'Unwinding after a stressful week or partying with friends.',
    tags: ['cold', 'fizzy', 'comfort']
  },
  {
    id: 'cheese_creamy',
    name: 'Cheesy & Creamy Dishes',
    description: 'Rich, thick, buttery textures that soothe stress.',
    tags: ['creamy', 'savory', 'comfort', 'hot']
  },
  {
    id: 'white_bread',
    name: 'White Bread & Sandwiches',
    description: 'Quick, soft carb-heavy snacks.',
    tags: ['savory', 'comfort', 'chewy']
  },
  {
    id: 'chaat_street',
    name: 'Street Food & Chaat',
    description: 'Craving spicy, tangy, sweet water, and crunchy street tastes.',
    tags: ['crunchy', 'salty', 'savory', 'comfort']
  },
  {
    id: 'sugary_breakfast',
    name: 'Sugary & Heavy Breakfasts',
    description: 'Starting the day with sugar-loaded cereals or heavy, oily carbs.',
    tags: ['sweet', 'hot', 'comfort']
  }
];

export const SWAP_ALTERNATIVES: SwapAlternative[] = [
  // 1. CHIPS & NAMKEEN SWAPS
  {
    id: 'swap_roasted_makhana',
    name: 'Spiced Roasted Makhana',
    categoryId: 'chips_namkeen',
    tags: {
      feel: ['crunchy', 'salty', 'savory'],
      whyItWorks: ['same crunch', 'protein-rich', 'less oily'],
      lifestyle: ['hostel-friendly', 'under ₹20', 'veg'],
      occasion: ['late night', 'study snack', 'stress eating']
    },
    budget: 'under ₹20',
    prepTime: '5 min',
    whyDescription: 'Offers that exact satisfying crunch you want, while being a lighter option that is gentle on the stomach and keeps you full for longer.',
    recipeText: 'Heat 1 tsp ghee in a pan. Add 1 cup makhana (fox nuts). Roast on low heat for 5 minutes until crispy. Sprinkle salt, black pepper, and turmeric.',
    imageSvgSeed: 'makhana'
  },
  {
    id: 'swap_roasted_chana',
    name: 'Crunchy Roasted Chana',
    categoryId: 'chips_namkeen',
    tags: {
      feel: ['crunchy', 'salty', 'savory'],
      whyItWorks: ['same crunch', 'protein-rich', 'more filling'],
      lifestyle: ['hostel-friendly', 'under ₹20', 'veg'],
      occasion: ['study snack', 'post-gym']
    },
    budget: 'under ₹20',
    prepTime: '0 min',
    whyDescription: 'A classic Indian pocket-friendly swap that is rich in protein and fiber, giving you a steady energy release instead of a sudden crash.',
    recipeText: 'Purchase pre-roasted, skinless chana. Mix with dry mango powder (amchur) and black salt for a tangy, savory bite. No cooking needed!',
    imageSvgSeed: 'chana'
  },
  {
    id: 'swap_spiced_popcorn',
    name: 'Turmeric-Herb Popcorn',
    categoryId: 'chips_namkeen',
    tags: {
      feel: ['crunchy', 'salty', 'savory'],
      whyItWorks: ['same crunch', 'less oily', 'quick dopamine'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['late night', 'stress eating']
    },
    budget: 'under ₹20',
    prepTime: '5 min',
    whyDescription: 'A warm comfort food that provides volume and a light, airy crunch without the heavy oiliness of packaged potato chips.',
    recipeText: 'Pop dry corn kernels with 1/2 tsp oil. Toss with salt, turmeric, and dried chili flakes or chat masala for a warm, savory kick.',
    imageSvgSeed: 'popcorn'
  },
  {
    id: 'swap_peanut_chaat',
    name: 'Tangy Peanut Chaat',
    categoryId: 'chips_namkeen',
    tags: {
      feel: ['crunchy', 'savory', 'salty'],
      whyItWorks: ['more filling', 'protein-rich', 'same crunch'],
      lifestyle: ['under ₹50', 'veg', 'gym mode'],
      occasion: ['study snack', 'post-gym']
    },
    budget: 'under ₹50',
    prepTime: '5 min',
    whyDescription: 'Combines roasted peanuts with tangy tomatoes and lime juice for a highly satisfying mindful bite that stops hunger in its tracks.',
    recipeText: 'Toss 1/2 cup roasted peanuts with chopped onions, tomatoes, green chilies, fresh coriander, black salt, and a generous squeeze of fresh lemon.',
    imageSvgSeed: 'peanut'
  },
  {
    id: 'swap_baked_ragi_chips',
    name: 'Baked Ragi Chips',
    categoryId: 'chips_namkeen',
    tags: {
      feel: ['crunchy', 'salty'],
      whyItWorks: ['same crunch', 'less oily', 'easy digestion'],
      lifestyle: ['under ₹50', 'veg', 'acne-friendly'],
      occasion: ['study snack']
    },
    budget: 'under ₹50',
    prepTime: '0 min',
    whyDescription: 'Made from ragi (finger millet), this baked crispy snack is loaded with calcium and dietary fiber, keeping your gut happy and acne-free.',
    recipeText: 'Enjoy store-bought baked ragi chips seasoned with rock salt, or bake thin ragi flour sheets with a brush of olive oil at home.',
    imageSvgSeed: 'ragi'
  },

  // 2. CHOCOLATE SWAPS
  {
    id: 'swap_dark_chocolate',
    name: 'Almond Dark Chocolate',
    categoryId: 'chocolate',
    tags: {
      feel: ['sweet', 'creamy', 'crunchy'],
      whyItWorks: ['quick dopamine', 'more filling', 'protein-rich'],
      lifestyle: ['under ₹50', 'veg'],
      occasion: ['period cravings', 'stress eating']
    },
    budget: 'under ₹50',
    prepTime: '0 min',
    whyDescription: 'Satisfies your sweet tooth with antioxidants and magnesium while the almonds add a mindful crunch that helps regulate sugar absorption.',
    recipeText: 'Savor 2-3 pieces of dark chocolate (>70% cocoa) along with a handful of raw or roasted almonds to combine sweet and crunch.',
    imageSvgSeed: 'dark_choc'
  },
  {
    id: 'swap_stuffed_dates',
    name: 'Peanut Butter Stuffed Dates',
    categoryId: 'chocolate',
    tags: {
      feel: ['sweet', 'creamy', 'chewy'],
      whyItWorks: ['quick dopamine', 'more filling', 'easy digestion'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly', 'gym mode'],
      occasion: ['period cravings', 'late night', 'stress eating']
    },
    budget: 'under ₹20',
    prepTime: '2 min',
    whyDescription: 'Often called "nature\'s Snickers", this sweet alternative is sweet, chewy, and highly nourishing. Ghee or peanut butter adds slow-release energy.',
    recipeText: 'Slit 2 soft dates, remove the seed, and stuff each with 1/2 tsp of peanut butter or a drop of warm ghee. Dust with a tiny pinch of cocoa powder.',
    imageSvgSeed: 'dates'
  },
  {
    id: 'swap_frozen_banana_smoothie',
    name: 'Cocoa Frozen Banana Nice Cream',
    categoryId: 'chocolate',
    tags: {
      feel: ['sweet', 'creamy', 'cold'],
      whyItWorks: ['quick dopamine', 'more filling', 'easy digestion'],
      lifestyle: ['under ₹50', 'veg', 'acne-friendly'],
      occasion: ['period cravings', 'late night']
    },
    budget: 'under ₹50',
    prepTime: '5 min',
    whyDescription: 'A velvety, chilled delight that mimics dairy-heavy milk chocolate milkshakes, yet is gentle on the stomach and totally dairy-free.',
    recipeText: 'Blend 1 frozen sliced banana with 1 tbsp raw cocoa powder and 2 tbsp almond milk or water until it reaches a soft-serve consistency.',
    imageSvgSeed: 'banana_nice'
  },
  {
    id: 'swap_warm_cocoa_jaggery',
    name: 'Warm Jaggery Cocoa Milk',
    categoryId: 'chocolate',
    tags: {
      feel: ['sweet', 'creamy', 'hot'],
      whyItWorks: ['warm comfort', 'more filling', 'easy digestion'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['late night', 'monsoon', 'stress eating']
    },
    budget: 'under ₹20',
    prepTime: '5 min',
    whyDescription: 'A cozy, steaming mug of chocolate comfort that uses iron-rich jaggery instead of refined sugar to warm you up and help you relax.',
    recipeText: 'Heat 1 cup cow milk or soy milk. Whisk in 1 tsp unsweetened cocoa powder and 1 tsp grated organic jaggery until smooth and warm.',
    imageSvgSeed: 'warm_milk'
  },

  // 3. INSTANT NOODLES SWAPS
  {
    id: 'swap_oats_upma',
    name: 'Masala Oats Upma',
    categoryId: 'instant_noodles',
    tags: {
      feel: ['hot', 'savory', 'comfort'],
      whyItWorks: ['more filling', 'easy digestion', 'less oily'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['late night', 'stress eating', 'monsoon']
    },
    budget: 'under ₹20',
    prepTime: '5 min',
    whyDescription: 'Cooks just as fast as instant noodles but uses soluble fiber-rich oats that support gut health and keep you feeling light and cozy.',
    recipeText: 'Boil 1/2 cup quick oats in 1 cup water with a pinch of turmeric, salt, black pepper, and 1/2 tsp pav bhaji masala. Add frozen peas if available.',
    imageSvgSeed: 'oats_upma'
  },
  {
    id: 'swap_paneer_noodles',
    name: 'Paneer Rice-Slurpy Noodles',
    categoryId: 'instant_noodles',
    tags: {
      feel: ['hot', 'savory', 'chewy'],
      whyItWorks: ['more filling', 'protein-rich', 'less oily'],
      lifestyle: ['under ₹50', 'veg', 'gym mode'],
      occasion: ['late night', 'monsoon']
    },
    budget: 'under ₹50',
    prepTime: '10 min',
    whyDescription: 'Offers the identical slurping joy of instant ramen, but replaces fried wheat blocks with gluten-free rice vermicelli and fresh protein-rich paneer.',
    recipeText: 'Soak rice noodles in boiling water for 3 mins. Toss in a pan with 50g paneer cubes, chopped spring onion, 1 tsp soy sauce, and black pepper.',
    imageSvgSeed: 'rice_noodles'
  },
  {
    id: 'swap_egg_fried_rice',
    name: 'Quick Egg Fried Rice',
    categoryId: 'instant_noodles',
    tags: {
      feel: ['hot', 'savory', 'comfort'],
      whyItWorks: ['more filling', 'protein-rich', 'less oily'],
      lifestyle: ['under ₹20', 'hostel-friendly'],
      occasion: ['late night', 'study snack']
    },
    budget: 'under ₹20',
    prepTime: '5 min',
    whyDescription: 'A speedy late-night Savior utilizing leftover rice and egg to give you high-quality protein and steady satisfaction.',
    recipeText: 'Scramble 1 egg in a pan with 1/2 tsp oil. Add 1 cup cooked leftover rice, a splash of soy sauce, salt, pepper, and mix on high heat for 2 minutes.',
    imageSvgSeed: 'fried_rice'
  },

  // 4. ICE CREAM SWAPS
  {
    id: 'swap_frozen_mango',
    name: 'Cozy Frozen Mango Chunks',
    categoryId: 'ice_cream',
    tags: {
      feel: ['sweet', 'creamy', 'cold'],
      whyItWorks: ['quick dopamine', 'easy digestion', 'less oily'],
      lifestyle: ['under ₹20', 'veg', 'acne-friendly'],
      occasion: ['late night', 'period cravings']
    },
    budget: 'under ₹20',
    prepTime: '0 min',
    whyDescription: 'When frozen, mango slices develop a rich, creamy, sorbet-like texture that feels incredibly premium while avoiding processed cream.',
    recipeText: 'Dice fresh sweet mango, lay the chunks on a plate, and freeze for 2 hours. Eat directly with a spoon — sweet, icy, and tropical!',
    imageSvgSeed: 'frozen_mango'
  },
  {
    id: 'swap_mishti_doi',
    name: 'Frozen Mishti Doi',
    categoryId: 'ice_cream',
    tags: {
      feel: ['sweet', 'creamy', 'cold'],
      whyItWorks: ['quick dopamine', 'more filling', 'easy digestion'],
      lifestyle: ['under ₹20', 'veg'],
      occasion: ['period cravings', 'late night']
    },
    budget: 'under ₹20',
    prepTime: '0 min',
    whyDescription: 'A traditional sweet curd fermented with caramelized jaggery, chilled to perfection. Gives you healthy gut probiotics instead of heavy cream.',
    recipeText: 'Buy single-serve cup of mishti doi and place it in the freezer for 45 minutes before eating. It achieves a rich gelato-like texture.',
    imageSvgSeed: 'doi'
  },
  {
    id: 'swap_chia_pudding',
    name: 'Chilled Coconut Chia Pudding',
    categoryId: 'ice_cream',
    tags: {
      feel: ['sweet', 'creamy', 'cold'],
      whyItWorks: ['more filling', 'easy digestion', 'protein-rich'],
      lifestyle: ['under ₹50', 'veg', 'acne-friendly'],
      occasion: ['late night', 'period cravings']
    },
    budget: 'under ₹50',
    prepTime: '2 min',
    whyDescription: 'A refreshing, pudding-like swap packed with omega-3s and fiber that expands in your stomach, giving you deep, nourishing fullness.',
    recipeText: 'Mix 2 tbsp chia seeds in 1/2 cup coconut milk or skimmed milk. Sweeten with a drop of honey/jaggery. Chill in the fridge for 2 hours.',
    imageSvgSeed: 'chia'
  },

  // 5. LATE NIGHT SWAPS
  {
    id: 'swap_chamomile_tea',
    name: 'Warm Chamomile Honey Tea',
    categoryId: 'late_night',
    tags: {
      feel: ['hot', 'sweet', 'comfort'],
      whyItWorks: ['warm comfort', 'easy digestion', 'less oily'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly', 'acne-friendly'],
      occasion: ['late night', 'stress eating']
    },
    budget: 'under ₹20',
    prepTime: '3 min',
    whyDescription: 'Often at 1 AM we want soothing warmth rather than actual calories. This tea signals your nervous system that it is safe to sleep.',
    recipeText: 'Steep a bag of chamomile or herbal mint tea in boiling water for 3 minutes. Stir in 1/2 tsp of raw honey if sweetness is craved.',
    imageSvgSeed: 'tea'
  },
  {
    id: 'swap_peanut_butter_toast',
    name: 'Cozy Peanut Butter Banana Toast',
    categoryId: 'late_night',
    tags: {
      feel: ['sweet', 'creamy', 'comfort'],
      whyItWorks: ['more filling', 'protein-rich', 'warm comfort'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['late night', 'study snack']
    },
    budget: 'under ₹20',
    prepTime: '3 min',
    whyDescription: 'A warm, carb-protein pairing that helps produce serotonin, supporting a restful night sleep while keeping night hunger fully quiet.',
    recipeText: 'Toast 1 slice of whole-wheat or multigrain bread. Spread 1 tbsp peanut butter and top with half a sliced banana and a dusting of cinnamon.',
    imageSvgSeed: 'pb_toast'
  },

  // 6. SOFT DRINK SWAPS
  {
    id: 'swap_mint_shikanji',
    name: 'Sparkling Mint Shikanji',
    categoryId: 'soft_drinks',
    tags: {
      feel: ['fizzy', 'cold', 'savory'],
      whyItWorks: ['quick dopamine', 'easy digestion', 'less oily'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly', 'acne-friendly'],
      occasion: ['study snack', 'post-gym']
    },
    budget: 'under ₹20',
    prepTime: '3 min',
    whyDescription: 'Provides that identical sparkling throat hit using fresh mint, lime juice, and carbonated water, completely bypassing processed syrup.',
    recipeText: 'Crush fresh mint leaves in a glass. Add 1 tbsp lemon juice, a pinch of black salt, cumin powder, and fill with chilled sparkling soda/water.',
    imageSvgSeed: 'shikanji'
  },
  {
    id: 'swap_buttermilk_chaas',
    name: 'Masala Chaas (Spiced Buttermilk)',
    categoryId: 'soft_drinks',
    tags: {
      feel: ['cold', 'creamy', 'savory'],
      whyItWorks: ['more filling', 'easy digestion', 'protein-rich'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly', 'acne-friendly'],
      occasion: ['study snack', 'post-gym']
    },
    budget: 'under ₹20',
    prepTime: '2 min',
    whyDescription: 'A comforting, traditional cold drink that aids digestion, cools the body, and provides refreshing hydration with a touch of protein.',
    recipeText: 'Whisk 3 tbsp yogurt with 1 cup cold water. Add a pinch of roasted cumin powder, black salt, and a sprig of coriander. Serve chilled.',
    imageSvgSeed: 'chaas'
  },
  {
    id: 'swap_coconut_water',
    name: 'Chilled Tender Coconut Water',
    categoryId: 'soft_drinks',
    tags: {
      feel: ['cold', 'sweet'],
      whyItWorks: ['easy digestion', 'less oily', 'quick dopamine'],
      lifestyle: ['under ₹50', 'veg', 'acne-friendly'],
      occasion: ['post-gym', 'study snack']
    },
    budget: 'under ₹50',
    prepTime: '0 min',
    whyDescription: 'Nature own electrolyte drink that rehydrates you immediately, clears skin, and satisfies sweet thirst naturally.',
    recipeText: 'Pour fresh tender coconut water into a glass, add an ice cube, and sip slowly. Refreshing, sweet, and pure.',
    imageSvgSeed: 'coconut'
  },

  // 7. COOKIES & BISCUITS SWAPS
  {
    id: 'swap_baked_banana_cookies',
    name: '2-Ingredient Banana Oat Cookies',
    categoryId: 'cookies_biscuits',
    tags: {
      feel: ['crunchy', 'sweet', 'comfort'],
      whyItWorks: ['same crunch', 'more filling', 'easy digestion'],
      lifestyle: ['under ₹20', 'veg', 'acne-friendly'],
      occasion: ['study snack', 'late night']
    },
    budget: 'under ₹20',
    prepTime: '15 min',
    whyDescription: 'A pure, home-style bake with zero refined flour, using ripe bananas for sweetness and oats for that solid, fiber-rich chew.',
    recipeText: 'Mash 1 ripe banana, mix with 1/2 cup rolled oats. Form into small cookies on a tray. Bake at 180°C for 12 minutes (or cook on a flat pan under low heat).',
    imageSvgSeed: 'oat_cookies'
  },
  {
    id: 'swap_roasted_peanuts_ghee',
    name: 'Jaggery-Ghee Peanuts',
    categoryId: 'cookies_biscuits',
    tags: {
      feel: ['crunchy', 'sweet'],
      whyItWorks: ['same crunch', 'protein-rich', 'more filling'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['study snack', 'monsoon']
    },
    budget: 'under ₹20',
    prepTime: '2 min',
    whyDescription: 'A classic Indian winter comfort that pairs iron-rich jaggery with energy-dense peanuts to satisfy tea-time sweet cravings.',
    recipeText: 'Toss 1/4 cup roasted peanuts with 1/2 tsp grated jaggery and a tiny drop of warm melted ghee. Gives you a crunchy, sweet brittle texture.',
    imageSvgSeed: 'peanuts_ghee'
  },

  // 8. CAKE & PASTRY SWAPS
  {
    id: 'swap_banana_mug_cake',
    name: 'Cozy Banana Oat Mug Cake',
    categoryId: 'cake_pastry',
    tags: {
      feel: ['sweet', 'comfort', 'hot'],
      whyItWorks: ['warm comfort', 'more filling', 'easy digestion'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['period cravings', 'late night', 'stress eating']
    },
    budget: 'under ₹20',
    prepTime: '3 min',
    whyDescription: 'A warm, gooey single-serve cake made directly in a mug that provides dietary fiber and healthy carbs while satisfying that dessert urge.',
    recipeText: 'In a mug, mash half a banana. Whisk in 3 tbsp oat flour, 1 tbsp milk, a drop of honey, and a pinch of baking powder. Microwave for 90 seconds.',
    imageSvgSeed: 'mug_cake'
  },
  {
    id: 'swap_grilled_cinnamon_pineapple',
    name: 'Cinnamon Grilled Pineapple',
    categoryId: 'cake_pastry',
    tags: {
      feel: ['sweet', 'hot', 'juicy'],
      whyItWorks: ['quick dopamine', 'easy digestion', 'less oily'],
      lifestyle: ['under ₹20', 'veg', 'acne-friendly'],
      occasion: ['period cravings', 'late night']
    },
    budget: 'under ₹20',
    prepTime: '5 min',
    whyDescription: 'When heated, pineapple sugars caramelize naturally, creating a decadent, warm dessert feel that is light and aids digestion with bromelain.',
    recipeText: 'Place two thick pineapple slices on a dry pan. Cook on medium heat until slightly brown on both sides. Dust with cinnamon powder.',
    imageSvgSeed: 'pineapple'
  },

  // 9. PIZZA & BURGER SWAPS
  {
    id: 'swap_roti_pizza',
    name: 'Crispy Whole Wheat Roti Pizza',
    categoryId: 'pizza_burger',
    tags: {
      feel: ['crunchy', 'savory', 'creamy'],
      whyItWorks: ['same crunch', 'more filling', 'less oily'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['late night', 'monsoon']
    },
    budget: 'under ₹20',
    prepTime: '5 min',
    whyDescription: 'Bypasses the heavy refined-flour pizza crust, using a thin, crisp whole wheat roti topped with fresh paneer and vegetables for a lighter option.',
    recipeText: 'Take a cooked wheat roti. Spread a thin layer of tomato sauce/ketchup. Add grated paneer, onion slices, oregano, and heat on a pan with a lid for 3 mins.',
    imageSvgSeed: 'roti_pizza'
  },
  {
    id: 'swap_paneer_burger',
    name: 'Home-style Paneer Bun Burger',
    categoryId: 'pizza_burger',
    tags: {
      feel: ['savory', 'comfort', 'creamy'],
      whyItWorks: ['more filling', 'protein-rich', 'less oily'],
      lifestyle: ['under ₹50', 'veg', 'gym mode'],
      occasion: ['stress eating']
    },
    budget: 'under ₹50',
    prepTime: '10 min',
    whyDescription: 'Replaces processed, deep-fried fast food patties with high-quality, grilled paneer slices, cutting down excess oils and keeping you full.',
    recipeText: 'Pan-fry a slice of paneer (50g) with salt and chat masala. Toast a whole wheat bun, place lettuce, paneer, tomato slices, and a dash of mint curd dip.',
    imageSvgSeed: 'paneer_burger'
  },

  // 10. DEEP FRIED SWAPS
  {
    id: 'swap_roasted_papad_chaat',
    name: 'Spiced Papad Chaat',
    categoryId: 'deep_fried',
    tags: {
      feel: ['crunchy', 'savory', 'salty'],
      whyItWorks: ['same crunch', 'less oily', 'easy digestion'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly', 'acne-friendly'],
      occasion: ['monsoon', 'study snack']
    },
    budget: 'under ₹20',
    prepTime: '3 min',
    whyDescription: 'Provides that intense savory oil-free crunch you want during monsoons, loaded with fresh tangy salad.',
    recipeText: 'Dry roast a lentil (urad dal) papad on an open flame. Top with chopped onion, tomatoes, cucumber, coriander, black salt, and lemon juice.',
    imageSvgSeed: 'papad'
  },
  {
    id: 'swap_air_fried_samosa',
    name: 'Baked/Air-fried Samosa Roll',
    categoryId: 'deep_fried',
    tags: {
      feel: ['crunchy', 'hot', 'savory'],
      whyItWorks: ['same crunch', 'less oily', 'more filling'],
      lifestyle: ['under ₹20', 'veg'],
      occasion: ['monsoon', 'stress eating']
    },
    budget: 'under ₹20',
    prepTime: '15 min',
    whyDescription: 'A satisfying pastry shell wrapped around spiced potatoes, baked or toasted instead of swam in deep oil. Provides local comfort food vibes.',
    recipeText: 'Stuff whole wheat dough circles with boiled spiced potatoes. Roll, shape, and bake in an oven or air-fry with a tiny brush of ghee for 12 mins.',
    imageSvgSeed: 'samosa'
  },

  // 11. CANDY & GUMMIES SWAPS
  {
    id: 'swap_amla_candy',
    name: 'Tangy Dried Amla Candy',
    categoryId: 'candy_gummies',
    tags: {
      feel: ['sweet', 'chewy', 'savory'],
      whyItWorks: ['quick dopamine', 'easy digestion', 'acne-friendly'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['study snack']
    },
    budget: 'under ₹20',
    prepTime: '0 min',
    whyDescription: 'A high-vitamin C traditional treat that combines sour, sweet, and salty. Supports immunity and digestion while kicking candy cravings.',
    recipeText: 'Buy sun-dried honey or jaggery-coated amla candies from local shops. Chew slowly to savor the tangy sweet profile.',
    imageSvgSeed: 'amla'
  },
  {
    id: 'swap_frozen_grapes',
    name: 'Icy Sweet Frozen Grapes',
    categoryId: 'candy_gummies',
    tags: {
      feel: ['sweet', 'cold', 'chewy'],
      whyItWorks: ['quick dopamine', 'easy digestion', 'less oily'],
      lifestyle: ['under ₹20', 'veg', 'acne-friendly'],
      occasion: ['late night', 'period cravings']
    },
    budget: 'under ₹20',
    prepTime: '0 min',
    whyDescription: 'When frozen, grapes expand into nature-made sweet sorbet bites, offering a chewy, ice-pop texture that satisfies candy-lovers.',
    recipeText: 'Wash green or black grapes, pat dry, and freeze in a bowl for 2 hours. Eat them frozen — they taste exactly like miniature fruit popsicles!',
    imageSvgSeed: 'grapes'
  },

  // 12. SWEET TEA & COFFEE SWAPS
  {
    id: 'swap_jaggery_chai',
    name: 'Cozy Jaggery Masala Chai',
    categoryId: 'sweet_tea_coffee',
    tags: {
      feel: ['hot', 'sweet', 'comfort'],
      whyItWorks: ['warm comfort', 'easy digestion', 'less oily'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['monsoon', 'study snack', 'late night']
    },
    budget: 'under ₹20',
    prepTime: '5 min',
    whyDescription: 'A classic Indian staple. Replaces refined white sugar with iron-rich jaggery, brewed with warming spices to soothe mind and throat.',
    recipeText: 'Boil water with ginger, cardamom, and tea leaves. Add milk and simmer. Turn off the heat and stir in grated jaggery (do not boil jaggery directly in milk).',
    imageSvgSeed: 'masala_chai'
  },
  {
    id: 'swap_date_cold_coffee',
    name: 'Date-Sweetened Cold Coffee',
    categoryId: 'sweet_tea_coffee',
    tags: {
      feel: ['cold', 'sweet', 'creamy'],
      whyItWorks: ['quick dopamine', 'more filling', 'easy digestion'],
      lifestyle: ['under ₹20', 'veg', 'gym mode'],
      occasion: ['study snack', 'post-gym']
    },
    budget: 'under ₹20',
    prepTime: '3 min',
    whyDescription: 'Offers the creamy, sweet caffeine kick of commercial coffee shop frappes, but sweetened purely with natural dates.',
    recipeText: 'Blend 1 cup cold milk, 1 tsp coffee powder, and 2 pre-soaked soft dates until completely smooth. Serve with ice cubes.',
    imageSvgSeed: 'cold_coffee'
  },

  // 13. ALCOHOL & BEER SWAPS
  {
    id: 'swap_ginger_mint_soda',
    name: 'Spiced Ginger-Mint Mocktail',
    categoryId: 'alcohol_beer',
    tags: {
      feel: ['cold', 'fizzy', 'savory'],
      whyItWorks: ['quick dopamine', 'easy digestion', 'less oily'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly', 'acne-friendly'],
      occasion: ['late night', 'stress eating']
    },
    budget: 'under ₹20',
    prepTime: '3 min',
    whyDescription: 'Gives you the social, celebratory feeling of holding a cold, fizzy cocktail, while ginger and mint soothe digestion and avoid hangovers.',
    recipeText: 'Muddle ginger paste and mint in a glass. Add black salt, a squeeze of lemon, and top with chilled carbonated water. Stir well.',
    imageSvgSeed: 'ginger_mocktail'
  },

  // 14. CHEESY & CREAMY SWAPS
  {
    id: 'swap_creamy_hummus',
    name: 'Creamy Hummus with Veggie Sticks',
    categoryId: 'cheese_creamy',
    tags: {
      feel: ['creamy', 'savory', 'cold'],
      whyItWorks: ['more filling', 'protein-rich', 'easy digestion'],
      lifestyle: ['under ₹50', 'veg', 'acne-friendly', 'gym mode'],
      occasion: ['study snack', 'post-gym']
    },
    budget: 'under ₹50',
    prepTime: '5 min',
    whyDescription: 'Mimics the rich, thick density of processed cheese spreads using fiber-packed chickpeas, sesame tahini, and cold garlic.',
    recipeText: 'Blend 1 cup boiled chickpeas with 1 clove garlic, 1 tbsp lemon juice, 1 tbsp olive oil, and cumin. Serve with fresh carrot and cucumber sticks.',
    imageSvgSeed: 'hummus'
  },
  {
    id: 'swap_paneer_bhurji',
    name: 'Savory Paneer Bhurji',
    categoryId: 'cheese_creamy',
    tags: {
      feel: ['creamy', 'savory', 'hot'],
      whyItWorks: ['more filling', 'protein-rich', 'warm comfort'],
      lifestyle: ['under ₹50', 'veg', 'gym mode'],
      occasion: ['late night', 'study snack']
    },
    budget: 'under ₹50',
    prepTime: '7 min',
    whyDescription: 'Gives you that rich, buttery comfort of cheese dishes using fresh paneer, spiced perfectly in typical home style.',
    recipeText: 'Crumble 80g paneer. Sauté chopped onions, tomatoes, and green chilies in a pan with 1/2 tsp ghee. Toss in paneer, turmeric, salt, and pepper.',
    imageSvgSeed: 'paneer_bhurji'
  },

  // 15. WHITE BREAD SWAPS
  {
    id: 'swap_besan_chilla',
    name: 'Golden Spiced Besan Chilla',
    categoryId: 'white_bread',
    tags: {
      feel: ['savory', 'comfort', 'hot'],
      whyItWorks: ['more filling', 'protein-rich', 'easy digestion'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['study snack', 'monsoon']
    },
    budget: 'under ₹20',
    prepTime: '5 min',
    whyDescription: 'A classic Indian savory pancake made from gram flour (chana dal flour) that is high in protein and gluten-free, digesting smoothly.',
    recipeText: 'Whisk 4 tbsp besan (gram flour) with water, chopped onion, coriander, salt, pepper, and carom seeds. Pour on a pan and cook like a crepe.',
    imageSvgSeed: 'chilla'
  },

  // 16. STREET FOOD & CHAAT SWAPS
  {
    id: 'swap_sprouts_chaat',
    name: 'Spiced Moong Sprouts Chaat',
    categoryId: 'chaat_street',
    tags: {
      feel: ['crunchy', 'savory', 'salty'],
      whyItWorks: ['protein-rich', 'more filling', 'easy digestion'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly', 'gym mode'],
      occasion: ['study snack', 'post-gym']
    },
    budget: 'under ₹20',
    prepTime: '3 min',
    whyDescription: 'Captures the identical chatpata, tangy street taste while offering high-quality enzymes, fiber, and clean protein.',
    recipeText: 'Toss 1 cup sprouted moong with chopped onions, cucumber, tomatoes, rock salt, roasted cumin powder, and fresh lime juice.',
    imageSvgSeed: 'sprouts'
  },
  {
    id: 'swap_sweet_potato_chaat',
    name: 'Warm Shakarkandi (Sweet Potato) Chaat',
    categoryId: 'chaat_street',
    tags: {
      feel: ['comfort', 'savory', 'hot'],
      whyItWorks: ['more filling', 'easy digestion', 'warm comfort'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly', 'acne-friendly'],
      occasion: ['monsoon', 'late night']
    },
    budget: 'under ₹20',
    prepTime: '10 min',
    whyDescription: 'A highly nourishing street food that is warm, sweet, and savory. Loaded with vitamin A and fiber that digest beautifully.',
    recipeText: 'Boil or roast 1 sweet potato. Cube it, toss with chaat masala, lemon juice, roasted cumin, black salt, and a dash of chili powder.',
    imageSvgSeed: 'shakarkandi'
  },

  // 17. SUGARY BREAKFAST SWAPS
  {
    id: 'swap_vegetable_poha',
    name: 'Light Onion-Potato Poha',
    categoryId: 'sugary_breakfast',
    tags: {
      feel: ['savory', 'comfort', 'hot'],
      whyItWorks: ['easy digestion', 'less oily', 'more filling'],
      lifestyle: ['under ₹20', 'veg', 'hostel-friendly'],
      occasion: ['study snack']
    },
    budget: 'under ₹20',
    prepTime: '7 min',
    whyDescription: 'A timeless Indian breakfast that is light, carbohydrates-friendly for energy, and extremely gentle on the stomach.',
    recipeText: 'Wash 1 cup poha. Sauté mustard seeds, curry leaves, green chilies, onions, and turmeric in a pan with 1/2 tsp oil. Add poha and salt. Steam for 2 mins.',
    imageSvgSeed: 'poha'
  }
];
