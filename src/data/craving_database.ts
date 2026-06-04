import type { CravingCategory, SwapAlternative } from './types';

export const CRAVING_CATEGORIES: CravingCategory[] = [
  { id: 'chips_namkeen', name: 'Chips & Namkeen', description: 'Crunchy, salty, dopamine-hit snacking.', tags: ['crunchy','salty','savory','comfort'], emoji: '🥜' },
  { id: 'chocolate', name: 'Chocolate Cravings', description: 'Rich, sweet, velvety cocoa comfort.', tags: ['sweet','creamy','comfort'], emoji: '🍫' },
  { id: 'instant_noodles', name: 'Instant Noodles', description: 'Warm, savory, late-night slurpy comfort.', tags: ['hot','savory','comfort','chewy'], emoji: '🍜' },
  { id: 'ice_cream', name: 'Ice Cream & Cold Desserts', description: 'Sweet, creamy, freezing refresh.', tags: ['sweet','creamy','cold'], emoji: '🍨' },
  { id: 'late_night', name: 'Late Night Munchies', description: 'Midnight snacking: stress, study, routine.', tags: ['comfort','savory','sweet'], emoji: '🌙' },
  { id: 'soft_drinks', name: 'Fizzy Drinks & Sodas', description: 'Refreshing, ice-cold, fizzy throat hits.', tags: ['fizzy','cold','sweet'], emoji: '🥤' },
  { id: 'cookies_biscuits', name: 'Cookies & Biscuits', description: 'Tea-time classics and sweet crunchy bites.', tags: ['crunchy','sweet','comfort'], emoji: '🍪' },
  { id: 'cake_pastry', name: 'Cake & Pastry', description: 'Soft, indulgent, layered baked comfort.', tags: ['sweet','creamy','comfort'], emoji: '🎂' },
  { id: 'pizza_burger', name: 'Pizza & Burgers', description: 'Cheesy, heavy, fast-food savory comfort.', tags: ['savory','comfort','creamy','hot'], emoji: '🍕' },
  { id: 'deep_fried', name: 'Samosa & Pakora', description: 'Monsoon mood, high-grease savory crunch.', tags: ['crunchy','hot','savory','comfort'], emoji: '🥟' },
  { id: 'candy_gummies', name: 'Candy & Sour Gummies', description: 'Tangy, chewy, fruity sweetness burst.', tags: ['sweet','chewy','comfort'], emoji: '🍬' },
  { id: 'sweet_tea_coffee', name: 'Sweet Chai & Coffee', description: 'Caffeine fix with sugar for energy.', tags: ['hot','sweet','comfort'], emoji: '☕' },
  { id: 'cheese_creamy', name: 'Cheesy & Creamy Dishes', description: 'Rich, buttery textures that soothe stress.', tags: ['creamy','savory','comfort','hot'], emoji: '🧀' },
  { id: 'white_bread', name: 'Bread & Sandwiches', description: 'Quick, soft carb-heavy snacks.', tags: ['savory','comfort','chewy'], emoji: '🥪' },
  { id: 'chaat_street', name: 'Street Food & Chaat', description: 'Spicy, tangy, sweet-water, crunchy street tastes.', tags: ['crunchy','salty','savory','comfort'], emoji: '🌮' },
  { id: 'mithai_sweets', name: 'Indian Mithai & Sweets', description: 'Festive, sugar-rich traditional Indian sweets.', tags: ['sweet','creamy','comfort'], emoji: '🍮' },
  { id: 'juice_smoothie', name: 'Juices & Smoothies', description: 'Fresh, fruity, vitamin-packed drinks.', tags: ['cold','sweet','comfort'], emoji: '🥤' },
  { id: 'pms_cravings', name: 'PMS & Hormone Cravings', description: 'Emotional, hormone-driven comfort cravings.', tags: ['sweet','comfort','creamy'], emoji: '🌸' },
  { id: 'stress_food', name: 'Stress & Anxiety Eating', description: 'Mindless munching from work or exam stress.', tags: ['comfort','crunchy','savory'], emoji: '😤' },
  { id: 'post_gym', name: 'Post-Workout Hunger', description: 'Protein needs and muscle recovery cravings.', tags: ['savory','hot','comfort'], emoji: '💪' },
];

export const SWAP_ALTERNATIVES: SwapAlternative[] = [
  // Chips & Namkeen
  {
    id: 'makhana_spiced', categoryId: 'chips_namkeen', name: 'Spiced Fox Nuts (Makhana)',
    budget: 'under ₹20', prepTime: '5 mins', imageSvgSeed: 'makhana',
    whyDescription: 'Same satisfying crunch and salty hit — but makhana is protein-rich and low in calories. Your brain gets the dopamine without the guilt spiral.',
    recipeText: 'Dry roast makhana in a pan for 4–5 mins on medium heat until they puff up. Toss with rock salt, chili powder, and a pinch of chaat masala. Optional: 1 tsp ghee for richness.',
    tags: { feel: ['crunchy','salty'], whyItWorks: ['high-protein','low-cal'], lifestyle: ['hostel','home','gym'], occasion: ['study snack','late night','work'] }
  },
  {
    id: 'roasted_chana', categoryId: 'chips_namkeen', name: 'Masala Roasted Chana',
    budget: 'under ₹20', prepTime: '2 mins', imageSvgSeed: 'chana',
    whyDescription: 'Chana gives you the crunchy satisfaction of chips with 19g protein per 100g. Keeps you full for hours instead of making you hungrier.',
    recipeText: 'Buy ready-made roasted chana from any store. Or: boil chickpeas, pat dry, bake at 200°C for 25–30 mins. Season with salt, chili, amchur, and chaat masala.',
    tags: { feel: ['crunchy','salty'], whyItWorks: ['high-protein','fiber-rich'], lifestyle: ['hostel','home','gym'], occasion: ['study snack','post-gym','work'] }
  },
  {
    id: 'murmura_bhel', categoryId: 'chips_namkeen', name: 'Light Bhel Puri Mix',
    budget: 'under ₹20', prepTime: '3 mins', imageSvgSeed: 'bhel',
    whyDescription: 'Puffed rice is 97% air — you get massive volume and crunch with almost no calories. The tangy mix tricks your brain into thinking it had a feast.',
    recipeText: 'Mix 2 cups puffed rice, chopped onion, tomato, green chili, coriander. Add tamarind chutney, green chutney, chaat masala. Toss and serve immediately.',
    tags: { feel: ['crunchy','tangy'], whyItWorks: ['low-cal','filling'], lifestyle: ['hostel','home'], occasion: ['evening snack','monsoon','study snack'] }
  },

  // Chocolate
  {
    id: 'dates_cocoa', categoryId: 'chocolate', name: 'Date & Cocoa Bites',
    budget: 'under ₹50', prepTime: '5 mins', imageSvgSeed: 'dates_cocoa',
    whyDescription: 'Dates contain natural sugar that hits the same reward center as chocolate. Mixed with raw cocoa, you get the chocolate experience plus fiber, magnesium, and iron.',
    recipeText: 'Blend 4 dates (pitted) with 1 tsp raw cocoa powder and a pinch of salt. Roll into balls. Optional: roll in crushed almonds. Refrigerate for 15 mins.',
    tags: { feel: ['sweet','chocolatey'], whyItWorks: ['magnesium-rich','natural-sugar'], lifestyle: ['home','gym'], occasion: ['pms','stress relief','sweet craving'] }
  },
  {
    id: 'banana_cocoa', categoryId: 'chocolate', name: 'Frozen Banana Cocoa Bowl',
    budget: 'under ₹20', prepTime: '5 mins + freeze', imageSvgSeed: 'banana_cocoa',
    whyDescription: 'Frozen banana blended is literally ice cream texture. Add cocoa and youve got a chocolate fix with potassium, serotonin precursors, and zero added sugar.',
    recipeText: 'Freeze 2 ripe bananas overnight. Blend with 1 tsp cocoa powder and a splash of milk until smooth. Eat immediately or refreeze for firmer texture.',
    tags: { feel: ['sweet','cold','creamy'], whyItWorks: ['serotonin-boost','no-added-sugar'], lifestyle: ['home','gym'], occasion: ['pms','hot afternoon','sweet craving'] }
  },
  {
    id: 'dark_choc_small', categoryId: 'chocolate', name: '2 Squares Dark Chocolate',
    budget: 'under ₹20', prepTime: '0 mins', imageSvgSeed: 'dark_choc',
    whyDescription: '70%+ dark chocolate has 3x less sugar than milk chocolate and actual antioxidants. Two squares + water = satisfied craving with real mood lift from theobromine.',
    recipeText: 'Buy 70%+ dark chocolate (Amul, Morde, or any brand). Break off 2 squares. Eat slowly — let it melt on your tongue. Drink water alongside for fullness.',
    tags: { feel: ['sweet','rich'], whyItWorks: ['antioxidants','mood-lift'], lifestyle: ['hostel','home','gym'], occasion: ['pms','stress relief','work'] }
  },

  // Instant Noodles
  {
    id: 'oats_masala', categoryId: 'instant_noodles', name: 'Savory Masala Oats',
    budget: 'under ₹20', prepTime: '7 mins', imageSvgSeed: 'oats_masala',
    whyDescription: 'Savory oats hit the same warm, starchy, comfort zone as Maggi — but with 5x more fiber and protein. The texture and warmth satisfy the actual craving.',
    recipeText: 'Boil 1 cup water, add ½ cup oats. Cook 3–4 mins. Add salt, chili flakes, turmeric, cumin, chopped onion and tomato. Top with coriander and lemon squeeze.',
    tags: { feel: ['warm','savory','filling'], whyItWorks: ['fiber-rich','slow-release'], lifestyle: ['hostel','home'], occasion: ['late night','monsoon','study snack'] }
  },
  {
    id: 'vermicelli_veggies', categoryId: 'instant_noodles', name: 'Vegetable Sevai / Vermicelli',
    budget: 'under ₹20', prepTime: '10 mins', imageSvgSeed: 'sevai',
    whyDescription: 'Sevai is a rice noodle — same slurpy satisfaction as instant noodles but 40% less processed. Load it with vegetables and you have a complete meal.',
    recipeText: 'Roast 1 cup sevai in a pan until golden. Add mustard seeds, curry leaves, onion, green chili, mixed vegetables. Add 1.5 cups water, salt, and turmeric. Cook until water absorbs.',
    tags: { feel: ['warm','savory','chewy'], whyItWorks: ['whole-grain','veggie-packed'], lifestyle: ['home'], occasion: ['late night','quick meal','comfort'] }
  },
  {
    id: 'egg_noodles_hack', categoryId: 'instant_noodles', name: 'Egg & Veggie Noodle Upgrade',
    budget: 'under ₹50', prepTime: '8 mins', imageSvgSeed: 'egg_noodles',
    whyDescription: 'If you must have Maggi — make it count. One egg adds 6g protein and makes it a real meal. Add spinach for iron. Same taste, 3x more nutritional value.',
    recipeText: 'Cook Maggi as normal but use only half the masala. Add 1 beaten egg while stirring. Throw in a handful of spinach or frozen peas. Squeeze lemon at end.',
    tags: { feel: ['warm','savory'], whyItWorks: ['protein-boost','veggie-added'], lifestyle: ['hostel','home'], occasion: ['late night','quick meal'] }
  },

  // Ice Cream
  {
    id: 'banana_nice_cream', categoryId: 'ice_cream', name: 'Banana Nice Cream',
    budget: 'under ₹20', prepTime: '5 mins + freeze', imageSvgSeed: 'nice_cream',
    whyDescription: 'Frozen banana is scientifically identical in texture to ice cream when blended. Zero added sugar, natural sweetness, and loads of potassium for mood regulation.',
    recipeText: 'Freeze 3 ripe bananas for at least 4 hours. Blend from frozen until smooth and creamy. Add any flavoring: mango chunks, berries, cocoa, or cardamom. Eat immediately.',
    tags: { feel: ['cold','sweet','creamy'], whyItWorks: ['no-added-sugar','potassium-rich'], lifestyle: ['home','gym'], occasion: ['hot afternoon','sweet craving','pms'] }
  },
  {
    id: 'yogurt_parfait', categoryId: 'ice_cream', name: 'Chilled Curd Parfait',
    budget: 'under ₹20', prepTime: '3 mins', imageSvgSeed: 'yogurt',
    whyDescription: 'Cold thick curd is creamy and cooling — exactly what you want. Add fruit and a drizzle of honey for the sweet indulgent layer your brain is asking for.',
    recipeText: 'Take hung curd or thick Greek-style dahi. Layer with sliced mango or banana. Drizzle 1 tsp honey. Add a pinch of cardamom. Chill for 10 mins before eating.',
    tags: { feel: ['cold','creamy','sweet'], whyItWorks: ['probiotics','calcium-rich'], lifestyle: ['home','gym'], occasion: ['hot afternoon','sweet craving'] }
  },

  // Late Night
  {
    id: 'warm_turmeric_milk', categoryId: 'late_night', name: 'Golden Milk (Haldi Doodh)',
    budget: 'under ₹20', prepTime: '5 mins', imageSvgSeed: 'golden_milk',
    whyDescription: 'Late-night cravings are 80% boredom or anxiety. Warm milk with turmeric triggers melatonin production, calms the nervous system, and satisfies the oral fixation.',
    recipeText: 'Heat 1 cup milk. Add ½ tsp turmeric, pinch of black pepper, ¼ tsp cinnamon. Sweeten with ½ tsp jaggery or honey. Stir and sip slowly — it works in 20 minutes.',
    tags: { feel: ['warm','comforting','sweet'], whyItWorks: ['sleep-inducing','anti-inflammatory'], lifestyle: ['hostel','home'], occasion: ['late night','stress relief'] }
  },
  {
    id: 'poha_light', categoryId: 'late_night', name: 'Light Lemon Poha',
    budget: 'under ₹20', prepTime: '8 mins', imageSvgSeed: 'poha',
    whyDescription: 'Poha is one of the most easily digestible grains. Late at night your digestion slows — poha wont sit heavy but still gives you the warm filling feeling you need.',
    recipeText: 'Soak 1 cup poha for 2 mins, drain. Temper mustard seeds, curry leaves, green chili in 1 tsp oil. Add poha, salt, turmeric. Mix gently. Squeeze lemon. Top with coriander.',
    tags: { feel: ['warm','light','savory'], whyItWorks: ['easy-digestion','light-calories'], lifestyle: ['home','hostel'], occasion: ['late night','quick meal'] }
  },
  {
    id: 'peanut_butter_banana', categoryId: 'late_night', name: 'Peanut Butter Banana Toast',
    budget: 'under ₹50', prepTime: '2 mins', imageSvgSeed: 'pb_banana',
    whyDescription: 'Peanut butter has tryptophan which converts to serotonin and melatonin — literally helping you sleep. Banana adds potassium that relaxes muscles. This is your sleep snack.',
    recipeText: 'Toast 1 slice multigrain bread. Spread 1 tbsp peanut butter. Top with banana slices. Optional: sprinkle chia seeds or a tiny drizzle of honey.',
    tags: { feel: ['sweet','filling','comforting'], whyItWorks: ['sleep-promoting','tryptophan'], lifestyle: ['home','hostel'], occasion: ['late night','study snack'] }
  },

  // Soft Drinks
  {
    id: 'nimbu_pani_fizzy', categoryId: 'soft_drinks', name: 'Fizzy Nimbu Pani',
    budget: 'under ₹20', prepTime: '2 mins', imageSvgSeed: 'nimbu_fizzy',
    whyDescription: 'Sparkling water with lemon gives you the fizzy throat sensation of soda — the actual thing your mouth wants. Add jaggery instead of white sugar for a slower blood sugar curve.',
    recipeText: 'Add juice of 1 lemon to a glass of chilled sparkling water. Add ½ tsp jaggery powder or black salt. Mix and drink immediately. Add mint leaves for a fresh kick.',
    tags: { feel: ['fizzy','cold','refreshing'], whyItWorks: ['no-empty-sugar','vitamin-c'], lifestyle: ['hostel','home'], occasion: ['hot afternoon','post-meal','study snack'] }
  },
  {
    id: 'kokum_sharbat', categoryId: 'soft_drinks', name: 'Kokum Sharbat',
    budget: 'under ₹20', prepTime: '3 mins', imageSvgSeed: 'kokum',
    whyDescription: 'Kokum is naturally cooling and aids digestion. It has a tangy-sweet taste that replaces the sugar craving in sodas while actually helping your gut feel good.',
    recipeText: 'Soak 4–5 kokum pieces in ½ cup warm water for 5 mins. Squeeze and strain the liquid. Mix with cold water, black salt, roasted cumin powder, and sugar to taste.',
    tags: { feel: ['cold','tangy','refreshing'], whyItWorks: ['cooling','digestive'], lifestyle: ['home'], occasion: ['hot afternoon','post-meal'] }
  },
  {
    id: 'chaas_buttermilk', categoryId: 'soft_drinks', name: 'Spiced Chaas (Buttermilk)',
    budget: 'under ₹20', prepTime: '2 mins', imageSvgSeed: 'chaas',
    whyDescription: 'Chaas is India\'s original sports drink — electrolytes, probiotics, and cooling all in one. It\'s what Coke is trying to be, but actually works for your body.',
    recipeText: 'Blend ½ cup curd with 1.5 cups cold water until frothy. Add roasted cumin powder, black salt, green chili, and coriander. Stir and drink chilled.',
    tags: { feel: ['cold','savory','refreshing'], whyItWorks: ['probiotics','electrolytes'], lifestyle: ['home','gym'], occasion: ['hot afternoon','post-gym','post-meal'] }
  },

  // Cookies & Biscuits
  {
    id: 'ragi_cookies', categoryId: 'cookies_biscuits', name: 'Ragi Jaggery Bites',
    budget: 'under ₹50', prepTime: '20 mins', imageSvgSeed: 'ragi_cookies',
    whyDescription: 'Ragi has 3x the calcium of milk and loads of iron. Jaggery provides slow-release energy. You get the cookie satisfaction with actual nutrition your body can use.',
    recipeText: 'Mix 1 cup ragi flour, ¼ cup jaggery powder, 2 tbsp coconut oil, ¼ tsp cardamom, pinch of salt. Add water to form dough. Roll into rounds. Bake at 180°C for 12–15 mins.',
    tags: { feel: ['crunchy','sweet'], whyItWorks: ['calcium-rich','iron-rich'], lifestyle: ['home'], occasion: ['tea time','study snack','sweet craving'] }
  },
  {
    id: 'rice_cake_honey', categoryId: 'cookies_biscuits', name: 'Rice Cake with Honey & Nut Butter',
    budget: 'under ₹50', prepTime: '1 min', imageSvgSeed: 'rice_cake',
    whyDescription: 'Rice cakes give you the satisfying crunch without empty calories. Top with nut butter for protein and honey for the sweetness hit — it\'s a complete snack in 30 seconds.',
    recipeText: 'Take 2 plain rice cakes. Spread ½ tbsp peanut or almond butter on each. Drizzle with a small amount of honey. Optional: add banana slices or a sprinkle of cinnamon.',
    tags: { feel: ['crunchy','sweet'], whyItWorks: ['low-cal','protein-fat'], lifestyle: ['home','gym'], occasion: ['study snack','tea time','post-gym'] }
  },

  // Cake & Pastry
  {
    id: 'mug_cake_banana', categoryId: 'cake_pastry', name: '2-Ingredient Banana Mug Cake',
    budget: 'under ₹20', prepTime: '3 mins', imageSvgSeed: 'mug_cake',
    whyDescription: 'A real cake experience in 3 minutes with zero refined flour or sugar. Banana provides natural sweetness and the egg gives structure. Tastes genuinely indulgent.',
    recipeText: 'Mash 1 ripe banana in a mug until smooth. Add 1 egg and mix well. Optional: add ½ tsp cocoa powder or 2 chocolate chips. Microwave for 90 seconds. Let cool for 1 min.',
    tags: { feel: ['sweet','warm','soft'], whyItWorks: ['no-refined-sugar','high-protein'], lifestyle: ['home','hostel'], occasion: ['sweet craving','pms','quick treat'] }
  },
  {
    id: 'chia_pudding', categoryId: 'cake_pastry', name: 'Mango Chia Pudding',
    budget: 'under ₹50', prepTime: '5 mins + overnight', imageSvgSeed: 'chia_pudding',
    whyDescription: 'Chia pudding looks and feels like a fancy dessert — creamy, layered, restaurant-quality. But chia seeds are omega-3 powerhouses and the mango gives natural sweetness without refined sugar.',
    recipeText: 'Mix 3 tbsp chia seeds with 1 cup coconut milk (or regular milk). Add 1 tsp honey. Refrigerate overnight or 4 hours. Top with fresh mango chunks and a pinch of cardamom.',
    tags: { feel: ['cold','creamy','sweet'], whyItWorks: ['omega-3','fiber-rich'], lifestyle: ['home','gym'], occasion: ['sweet craving','pms','weekend treat'] }
  },

  // Pizza & Burgers
  {
    id: 'roti_pizza', categoryId: 'pizza_burger', name: 'Chapati Pizza',
    budget: 'under ₹20', prepTime: '8 mins', imageSvgSeed: 'roti_pizza',
    whyDescription: 'Leftover roti becomes a crispy pizza base in minutes. You get the cheesy-saucy-toppings experience without the maida and oil dump of delivery pizza.',
    recipeText: 'Spread tomato paste or ketchup on a roti. Add grated paneer or cheese. Top with chopped capsicum, onion, chili. Roast in a pan with lid for 4–5 mins or toast in OTG at 200°C for 8 mins.',
    tags: { feel: ['savory','cheesy','crispy'], whyItWorks: ['whole-wheat','less-oil'], lifestyle: ['home','hostel'], occasion: ['quick meal','comfort','late night'] }
  },
  {
    id: 'rajma_burger', categoryId: 'pizza_burger', name: 'Rajma Tikki Burger',
    budget: 'under ₹50', prepTime: '15 mins', imageSvgSeed: 'rajma_burger',
    whyDescription: 'Rajma has a meaty texture that makes an incredibly satisfying burger patty. 15g protein per serving, zero cholesterol, and it actually fills you up instead of making you want more.',
    recipeText: 'Mash 1 cup cooked rajma. Add 2 tbsp oats, salt, cumin, chili, onion, coriander. Shape into patties. Pan-fry with minimal oil until crispy. Serve in a bun with mint chutney and onion rings.',
    tags: { feel: ['savory','filling','satisfying'], whyItWorks: ['high-protein','plant-based'], lifestyle: ['home','gym'], occasion: ['quick meal','weekend treat'] }
  },

  // Deep Fried
  {
    id: 'baked_pakora', categoryId: 'deep_fried', name: 'Baked Veggie Pakoras',
    budget: 'under ₹20', prepTime: '20 mins', imageSvgSeed: 'baked_pakora',
    whyDescription: 'Baking at high heat achieves the same crispy exterior as deep frying — minus 70% of the oil. On a rainy day, this hits every single monsoon craving perfectly.',
    recipeText: 'Make besan batter: ½ cup besan, chili, ajwain, salt, water. Dip sliced onion, potato, paneer, or spinach. Place on oiled tray. Bake at 220°C for 15–18 mins, flipping halfway. Serve with green chutney.',
    tags: { feel: ['crunchy','savory','hot'], whyItWorks: ['low-oil','same-crunch'], lifestyle: ['home'], occasion: ['monsoon','comfort','tea time'] }
  },
  {
    id: 'corn_bhel_chaat', categoryId: 'deep_fried', name: 'Masala Corn Chaat',
    budget: 'under ₹20', prepTime: '5 mins', imageSvgSeed: 'corn_chaat',
    whyDescription: 'Sweet corn gives you the street-food craving hit — warm, spicy, tangy — with fiber, antioxidants, and actual vitamins. It\'s the samosa vibe without the grease aftermath.',
    recipeText: 'Boil or microwave 1 cup corn kernels. Toss with chaat masala, lemon juice, red chili powder, black salt. Add chopped onion and coriander. Optional: add 1 tbsp tamarind chutney.',
    tags: { feel: ['savory','spicy','tangy'], whyItWorks: ['fiber-rich','antioxidants'], lifestyle: ['hostel','home'], occasion: ['evening snack','monsoon','study snack'] }
  },

  // Candy & Gummies
  {
    id: 'fruit_chaat_tangy', categoryId: 'candy_gummies', name: 'Tangy Fruit Chaat',
    budget: 'under ₹20', prepTime: '4 mins', imageSvgSeed: 'fruit_chaat',
    whyDescription: 'The tangy-sweet-sour experience of gummies comes from citric acid and sugar. Real fruit with chaat masala gives you the exact same flavor combination with fiber, vitamins, and hydration.',
    recipeText: 'Dice watermelon, apple, mango, pineapple (whatever\'s available). Sprinkle chaat masala, black salt, red chili powder. Add lemon juice. Toss and eat immediately.',
    tags: { feel: ['sweet','tangy','refreshing'], whyItWorks: ['vitamin-c','hydrating'], lifestyle: ['home','hostel'], occasion: ['afternoon snack','hot day','sweet craving'] }
  },
  {
    id: 'tamarind_candy', categoryId: 'candy_gummies', name: 'Imli (Tamarind) Bites',
    budget: 'under ₹20', prepTime: '2 mins', imageSvgSeed: 'tamarind',
    whyDescription: 'Tamarind is the original sour candy. It has all the tartness you want from gummies plus iron, antioxidants, and digestive enzymes. Traditional Indian wisdom in snack form.',
    recipeText: 'Roll a small amount of tamarind pulp into balls. Coat with a mix of black salt, red chili, and jaggery powder. Optional: add sesame seeds. Roll into balls and refrigerate.',
    tags: { feel: ['tangy','sour','sweet'], whyItWorks: ['iron-rich','digestive'], lifestyle: ['home','hostel'], occasion: ['afternoon snack','sweet craving'] }
  },

  // Sweet Chai & Coffee
  {
    id: 'jaggery_ginger_chai', categoryId: 'sweet_tea_coffee', name: 'Jaggery Ginger Chai',
    budget: 'under ₹20', prepTime: '7 mins', imageSvgSeed: 'ginger_chai',
    whyDescription: 'Replacing sugar with jaggery in chai gives you a slower energy release and skips the blood sugar crash. Ginger adds thermogenic warmth and aids digestion — it\'s literally medicinal comfort.',
    recipeText: 'Boil ½ cup water with 1 inch grated ginger, 2 cardamom pods. Add ½ cup milk and tea leaves. Simmer 2 mins. Strain and sweeten with ½ tsp jaggery. Drink hot.',
    tags: { feel: ['warm','spicy','comforting'], whyItWorks: ['slow-energy','anti-inflammatory'], lifestyle: ['home','hostel'], occasion: ['monsoon','study snack','morning'] }
  },
  {
    id: 'matcha_latte', categoryId: 'sweet_tea_coffee', name: 'Iced Matcha Latte',
    budget: 'under ₹50', prepTime: '3 mins', imageSvgSeed: 'matcha',
    whyDescription: 'Matcha has caffeine + L-theanine — you get the focus of coffee without the anxiety spike. The calm, sustained energy lasts 4–6 hours vs coffee\'s 1-hour rush and crash.',
    recipeText: 'Whisk ½ tsp matcha powder with 2 tbsp hot water until smooth. Pour over ice. Add 1 cup cold milk (oat milk works beautifully). Sweeten with ½ tsp honey. Stir and drink.',
    tags: { feel: ['cold','sweet','energizing'], whyItWorks: ['calm-focus','antioxidants'], lifestyle: ['home','gym'], occasion: ['morning','study snack','work'] }
  },

  // Cheesy & Creamy
  {
    id: 'paneer_tikka_quick', categoryId: 'cheese_creamy', name: 'Quick Paneer Tikka',
    budget: 'under ₹50', prepTime: '12 mins', imageSvgSeed: 'paneer_tikka',
    whyDescription: 'Paneer satisfies the rich, fatty, protein cravings better than processed cheese. The tikka marinade gives you bold flavor without empty calories — and 18g protein per serving.',
    recipeText: 'Cut paneer into cubes. Marinate in curd, red chili, turmeric, cumin, salt for 10 mins. Pan-fry in 1 tsp oil until golden on all sides. Serve with mint chutney and onion rings.',
    tags: { feel: ['savory','rich','satisfying'], whyItWorks: ['high-protein','calcium'], lifestyle: ['home','gym'], occasion: ['quick meal','comfort','post-gym'] }
  },
  {
    id: 'hummus_veggie', categoryId: 'cheese_creamy', name: 'Hummus & Veggie Sticks',
    budget: 'under ₹50', prepTime: '15 mins', imageSvgSeed: 'hummus',
    whyDescription: 'Hummus has the thick, creamy, satisfying texture of cheese dips but with chickpea protein and olive oil instead of saturated fat. The veggies add crunch that makes it feel indulgent.',
    recipeText: 'Blend 1 cup boiled chickpeas, 2 tbsp sesame seeds, lemon juice, 1 garlic clove, salt, 1 tbsp olive oil. Add water for desired consistency. Serve with carrot, cucumber, and capsicum sticks.',
    tags: { feel: ['creamy','savory'], whyItWorks: ['plant-protein','healthy-fat'], lifestyle: ['home','gym'], occasion: ['evening snack','party','comfort'] }
  },

  // Bread & Sandwiches
  {
    id: 'avocado_toast_desi', categoryId: 'white_bread', name: 'Desi Avocado Toast',
    budget: 'under ₹50', prepTime: '5 mins', imageSvgSeed: 'avocado_toast',
    whyDescription: 'Avocado gives you the creamy, fatty satisfaction of butter but with monounsaturated fats that are actually good for your heart. The desi spices make it feel familiar and comforting.',
    recipeText: 'Toast multigrain bread. Mash ½ avocado with lemon juice, chili flakes, black salt. Spread on toast. Top with sliced tomato, coriander, and optional poached or fried egg.',
    tags: { feel: ['creamy','savory','filling'], whyItWorks: ['healthy-fat','fiber'], lifestyle: ['home'], occasion: ['breakfast','quick meal','comfort'] }
  },
  {
    id: 'sprout_sandwich', categoryId: 'white_bread', name: 'Sprouted Moong Sandwich',
    budget: 'under ₹20', prepTime: '5 mins', imageSvgSeed: 'sprout_sandwich',
    whyDescription: 'Sprouted moong is a protein powerhouse that\'s also crunchy and filling. This sandwich is deeply satisfying without the empty-carb crash that white bread sandwiches give you.',
    recipeText: 'Toss sprouted moong with chopped onion, tomato, chili, lemon juice, chaat masala. Toast 2 slices bread. Spread mint chutney on both sides. Fill with sprout mix. Press and serve.',
    tags: { feel: ['crunchy','savory','filling'], whyItWorks: ['high-protein','low-cal'], lifestyle: ['home','hostel'], occasion: ['breakfast','quick meal','study snack'] }
  },

  // Street Food & Chaat
  {
    id: 'homemade_pani_puri', categoryId: 'chaat_street', name: 'Quick Homemade Pani Puri',
    budget: 'under ₹20', prepTime: '10 mins', imageSvgSeed: 'pani_puri',
    whyDescription: 'The explosion of tangy-spicy-sweet-cold water in your mouth is one of the most complex flavor experiences in Indian food — your brain craves that dopamine hit. This version uses baked or ready-made puris.',
    recipeText: 'Mix tamarind water, mint, coriander, green chili, ginger, black salt, jeera powder — blend and chill. Fill ready-made puris with boiled potato, moong, and onion. Dip and eat.',
    tags: { feel: ['tangy','spicy','refreshing','fun'], whyItWorks: ['complex-flavors','low-cal'], lifestyle: ['home'], occasion: ['evening snack','weekend','comfort'] }
  },
  {
    id: 'dahi_puri_bowl', categoryId: 'chaat_street', name: 'Dahi Puri Bowl',
    budget: 'under ₹50', prepTime: '5 mins', imageSvgSeed: 'dahi_puri',
    whyDescription: 'The combination of cold curd, tangy chutney, and crunchy puri hits multiple sensory pleasure points simultaneously. The probiotic curd actually helps digestion after the street food experience.',
    recipeText: 'Arrange 4–5 puris in a bowl. Fill with boiled potato and moong. Pour cold whisked curd over. Add tamarind chutney, green chutney, chaat masala, sev, and coriander.',
    tags: { feel: ['tangy','cold','crunchy'], whyItWorks: ['probiotics','balanced'], lifestyle: ['home'], occasion: ['evening snack','weekend','comfort'] }
  },

  // Mithai
  {
    id: 'date_ladoo', categoryId: 'mithai_sweets', name: 'Date & Nut Ladoo',
    budget: 'under ₹50', prepTime: '10 mins', imageSvgSeed: 'date_ladoo',
    whyDescription: 'Traditional ladoos use a kilo of ghee and sugar. Dates are naturally sweet enough to bind everything without added sugar, and nuts add healthy fats and crunch.',
    recipeText: 'Blend 10 pitted dates in a processor. Mix with ¼ cup chopped almonds, cashews, and pistachios. Add cardamom and a pinch of salt. Roll into balls. Refrigerate for 30 mins.',
    tags: { feel: ['sweet','rich','festive'], whyItWorks: ['no-added-sugar','iron-rich'], lifestyle: ['home','gym'], occasion: ['sweet craving','pms','festive'] }
  },
  {
    id: 'coconut_jaggery_ball', categoryId: 'mithai_sweets', name: 'Coconut Jaggery Modak',
    budget: 'under ₹50', prepTime: '15 mins', imageSvgSeed: 'modak',
    whyDescription: 'Coconut provides healthy MCT fats for brain function, and jaggery has iron and minerals that refined sugar lacks. This is mithai that actually nourishes.',
    recipeText: 'Mix 1 cup desiccated coconut with ½ cup jaggery powder and 1 tsp cardamom in a pan on low heat. Cook until it comes together. Shape into modaks or balls while warm.',
    tags: { feel: ['sweet','chewy','festive'], whyItWorks: ['mct-fats','mineral-rich'], lifestyle: ['home'], occasion: ['sweet craving','festive','pms'] }
  },

  // Juices & Smoothies
  {
    id: 'green_smoothie', categoryId: 'juice_smoothie', name: 'Palak Banana Green Smoothie',
    budget: 'under ₹50', prepTime: '3 mins', imageSvgSeed: 'green_smoothie',
    whyDescription: 'You literally cannot taste spinach in a smoothie with banana and mango. But you get iron, folate, and magnesium that your body needs — especially when stressed or PMS-ing.',
    recipeText: 'Blend 1 handful spinach, 1 banana, ½ cup mango chunks, ½ cup milk or water. Add ½ tsp honey if needed. Blend until smooth. Drink immediately.',
    tags: { feel: ['sweet','cold','filling'], whyItWorks: ['iron-rich','energizing'], lifestyle: ['home','gym'], occasion: ['breakfast','post-gym','pms'] }
  },
  {
    id: 'watermelon_mint_juice', categoryId: 'juice_smoothie', name: 'Watermelon Mint Cooler',
    budget: 'under ₹20', prepTime: '3 mins', imageSvgSeed: 'watermelon_juice',
    whyDescription: 'Watermelon is 92% water — this is hydration masquerading as indulgence. It has lycopene for heart health and natural electrolytes that sodas try to fake with additives.',
    recipeText: 'Blend 2 cups watermelon chunks (seeds removed). Add 5–6 fresh mint leaves, pinch of black salt, squeeze of lemon. Blend briefly. Serve chilled over ice. No added sugar needed.',
    tags: { feel: ['cold','sweet','refreshing'], whyItWorks: ['hydrating','lycopene'], lifestyle: ['home','hostel'], occasion: ['hot afternoon','post-gym','summer'] }
  },

  // PMS Cravings
  {
    id: 'magnesium_trail_mix', categoryId: 'pms_cravings', name: 'Magnesium Trail Mix',
    budget: 'under ₹50', prepTime: '2 mins', imageSvgSeed: 'trail_mix',
    whyDescription: 'PMS chocolate cravings are often your body screaming for magnesium. Dark chocolate, pumpkin seeds, and almonds are the 3 highest magnesium foods. This mix literally fixes the deficiency causing the craving.',
    recipeText: 'Mix 2 tbsp pumpkin seeds, 1 tbsp almonds, 2 small squares dark chocolate (broken), 1 tbsp dried cranberries. Store in a small jar. Eat a small handful when craving hits.',
    tags: { feel: ['crunchy','sweet','satisfying'], whyItWorks: ['magnesium-rich','craving-cure'], lifestyle: ['home','hostel','gym'], occasion: ['pms','stress relief','sweet craving'] }
  },
  {
    id: 'warm_sesame_ladoo', categoryId: 'pms_cravings', name: 'Til (Sesame) Jaggery Chikki',
    budget: 'under ₹20', prepTime: '10 mins', imageSvgSeed: 'sesame_chikki',
    whyDescription: 'Sesame seeds are extremely high in calcium and iron — both nutrients that drop during menstruation. Traditional Indian wisdom knew this, which is why til-gur was given to women specifically.',
    recipeText: 'Toast ½ cup sesame seeds until golden. Melt ½ cup jaggery in a pan with 1 tsp ghee until it forms a thread. Mix in sesame seeds quickly. Pour on a greased surface, flatten, and cut into squares before it hardens.',
    tags: { feel: ['sweet','crunchy'], whyItWorks: ['calcium-iron','hormone-support'], lifestyle: ['home'], occasion: ['pms','sweet craving','festive'] }
  },

  // Stress Food
  {
    id: 'ashwagandha_latte', categoryId: 'stress_food', name: 'Ashwagandha Moon Milk',
    budget: 'under ₹50', prepTime: '5 mins', imageSvgSeed: 'moon_milk',
    whyDescription: 'Stress eating often means your cortisol is spiking and your body wants to feel calm. Ashwagandha is an adaptogen clinically proven to lower cortisol — drinking this actually addresses the root cause.',
    recipeText: 'Heat 1 cup milk with ½ tsp ashwagandha powder, ½ tsp cinnamon, pinch of nutmeg. Sweeten with ½ tsp honey. Whisk until frothy. Drink warm, ideally before bed.',
    tags: { feel: ['warm','calming','comforting'], whyItWorks: ['cortisol-lowering','adaptogen'], lifestyle: ['home'], occasion: ['stress relief','late night','pms'] }
  },
  {
    id: 'dark_choc_walnut', categoryId: 'stress_food', name: 'Dark Choc & Walnut Break',
    budget: 'under ₹50', prepTime: '1 min', imageSvgSeed: 'choc_walnut',
    whyDescription: 'Walnuts are the only nut with significant omega-3s — the same brain fats that reduce anxiety. Dark chocolate releases serotonin. Together, this is a legitimate stress-reducing snack combo.',
    recipeText: 'Take 2 squares 70%+ dark chocolate and 5–6 walnut halves. Eat slowly together. Let the chocolate melt in your mouth. Drink water alongside. This works best eaten away from screens.',
    tags: { feel: ['rich','satisfying'], whyItWorks: ['omega-3','serotonin'], lifestyle: ['home','hostel','gym'], occasion: ['stress relief','study snack','work'] }
  },

  // Post Gym
  {
    id: 'sattu_drink', categoryId: 'post_gym', name: 'Cold Sattu Sharbat',
    budget: 'under ₹20', prepTime: '3 mins', imageSvgSeed: 'sattu',
    whyDescription: 'Sattu (roasted gram flour) is India\'s original protein powder — 20g protein per 100g. Athletes in Bihar and UP have used it for centuries. It refuels muscles better than most processed sports drinks.',
    recipeText: 'Mix 2 tbsp sattu flour with 1 glass cold water. Add lemon juice, black salt, and 1 tsp jaggery. Mix vigorously or blend. Drink immediately post-workout.',
    tags: { feel: ['cold','filling','earthy'], whyItWorks: ['high-protein','natural'], lifestyle: ['gym','home'], occasion: ['post-gym','morning','study snack'] }
  },
  {
    id: 'egg_white_bhurji', categoryId: 'post_gym', name: 'High-Protein Egg Bhurji',
    budget: 'under ₹50', prepTime: '8 mins', imageSvgSeed: 'egg_bhurji',
    whyDescription: 'Egg bhurji gives you complete amino acids for muscle recovery. The Indian spices — turmeric, cumin — have anti-inflammatory properties that help with post-workout soreness.',
    recipeText: 'Beat 3 eggs. Sauté onion, tomato, green chili in ½ tsp oil. Add eggs, stir continuously on medium heat. Add turmeric, salt, and coriander. Eat with a multigrain roti or as-is.',
    tags: { feel: ['savory','warm','filling'], whyItWorks: ['complete-protein','anti-inflammatory'], lifestyle: ['gym','home'], occasion: ['post-gym','breakfast','quick meal'] }
  },
];
