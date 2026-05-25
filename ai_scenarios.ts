export interface AIScenario {
  id: string;
  triggerKeywords: string[];
  title: string;
  userPromptText: string;
  aiResponse: string;
  decodedCraving: {
    rootCause: string;
    feelTags: string[];
  };
  recommendedSwapIds: string[];
}

export const AI_SCENARIOS: AIScenario[] = [
  {
    id: 'scenario_maggi_1am',
    triggerKeywords: ['maggi', '1 am', '1am', 'midnight', 'late night noodle'],
    title: 'Late Night Maggi',
    userPromptText: 'I want Maggi at 1 AM',
    aiResponse: 'Ah, the classic 1 AM Maggi craving! 🍜 Late at night, your body is usually seeking quick energy, warm comfort, and a hit of savory saltiness. Let’s guide you toward a warm, cozy bowl that gives you all that savory goodness but is much gentler on the stomach, helping you sleep soundly.',
    decodedCraving: {
      rootCause: 'Seeking warm, salty comfort and quick dopamine to wind down or fuel late-night work.',
      feelTags: ['hot', 'savory', 'comfort']
    },
    recommendedSwapIds: ['swap_oats_upma', 'swap_egg_fried_rice', 'swap_roasted_makhana']
  },
  {
    id: 'scenario_stressed',
    triggerKeywords: ['stress', 'stressed', 'anxious', 'work pressure', 'exam'],
    title: 'Stress Eating',
    userPromptText: 'I am stressed and want to munch on something',
    aiResponse: 'I hear you. When stress levels climb, our brain naturally craves that mechanical hand-to-mouth movement and crispy crunch for a fast dopamine release. 😌 Let’s channel that with some light, airy, crunchy options that let you chew mindfully without leaving you feeling sluggish.',
    decodedCraving: {
      rootCause: 'Emotional stress seeking sensory distraction through repetitive crunchy textures.',
      feelTags: ['crunchy', 'savory']
    },
    recommendedSwapIds: ['swap_spiced_popcorn', 'swap_roasted_makhana', 'swap_roasted_peanuts_ghee']
  },
  {
    id: 'scenario_pms_sweet',
    triggerKeywords: ['pms', 'period', 'cramp', 'sweet tooth', 'chocolate craving'],
    title: 'PMS Sweet Cravings',
    userPromptText: 'PMS sweet craving hits, need chocolate',
    aiResponse: 'Sending you a warm hug! 🍫 During this time, your body is naturally seeking magnesium and a lift in mood. Let’s satisfy that velvety, deep sweet craving with gorgeous alternatives that offer a warm, comforting hug and high-quality nourishment without any crash.',
    decodedCraving: {
      rootCause: 'Hormonal shift seeking magnesium and rapid serotonin boost.',
      feelTags: ['sweet', 'creamy', 'comfort']
    },
    recommendedSwapIds: ['swap_stuffed_dates', 'swap_dark_chocolate', 'swap_frozen_banana_smoothie']
  },
  {
    id: 'scenario_monsoon',
    triggerKeywords: ['monsoon', 'rain', 'raining', 'samosa', 'pakora', 'chai'],
    title: 'Monsoon Cravings',
    userPromptText: 'It is raining outside, I need hot samosas and pakoras',
    aiResponse: 'Oh, that rain-against-the-window feeling! 🌧️ A monsoon drizzle practically demands hot, crispy, savory comfort. Let’s match that golden-fried savory crunch with warm, home-cooked delights that pair beautifully with a steaming hot cup of tea.',
    decodedCraving: {
      rootCause: 'Seasonal nostalgia craving sizzling temperatures and high-sodium savory crunch.',
      feelTags: ['crunchy', 'hot', 'savory']
    },
    recommendedSwapIds: ['swap_roasted_papad_chaat', 'swap_besan_chilla', 'swap_jaggery_chai']
  },
  {
    id: 'scenario_hostel_budget',
    triggerKeywords: ['hostel', 'budget', 'cheap', 'rs 20', 'under 20', 'student'],
    title: 'Hostel Budget Snack',
    userPromptText: 'I live in a hostel and need something under ₹20',
    aiResponse: 'Students, I’ve got you! 🎓 When living in a hostel, we need snacks that are ultra pocket-friendly, require zero complex appliances, and fill us up instantly. Here are three super-quick, budget-approved mindful bites that you can keep stocked in your room.',
    decodedCraving: {
      rootCause: 'Need for high satiety, high convenience, and rock-bottom cost.',
      feelTags: ['crunchy', 'savory', 'salty']
    },
    recommendedSwapIds: ['swap_roasted_chana', 'swap_roasted_makhana', 'swap_besan_chilla']
  },
  {
    id: 'scenario_gym_protein',
    triggerKeywords: ['gym', 'protein', 'workout', 'high protein', 'muscle'],
    title: 'High-Protein Gym Fuel',
    userPromptText: 'Need a high-protein post-workout swap',
    aiResponse: 'Let’s fuel those muscles! 💪 Post-workout, your body is ready to rebuild. Reaching for heavy fast food might reverse that good gym feeling. Here are some protein-dense, nourishing alternatives that feel like a reward and digest smoothly.',
    decodedCraving: {
      rootCause: 'Need for slow-digesting amino acids, mineral replenishment, and savory satiety.',
      feelTags: ['savory', 'comfort', 'creamy']
    },
    recommendedSwapIds: ['swap_peanut_chaat', 'swap_paneer_noodles', 'swap_paneer_bhurji']
  },
  {
    id: 'scenario_acne_safe',
    triggerKeywords: ['acne', 'skin', 'pimples', 'breakout', 'dairy free'],
    title: 'Acne-Safe Bites',
    userPromptText: 'I want a comforting snack that won’t break my skin out',
    aiResponse: 'Caring for your skin is a beautiful act of self-love. 🌿 Refined sugars and heavy dairy can sometimes trigger skin inflammation. Let’s treat your tastebuds to delicious, high-antioxidant, and low-glycemic treats that are completely gentle on your stomach and skin.',
    decodedCraving: {
      rootCause: 'Seeking rich comfort food while keeping glycemic index low and dairy-free.',
      feelTags: ['sweet', 'crunchy', 'cold']
    },
    recommendedSwapIds: ['swap_baked_ragi_chips', 'swap_frozen_mango', 'swap_chia_pudding']
  },
  {
    id: 'scenario_fizzy_soda',
    triggerKeywords: ['soda', 'coke', 'pepsi', 'soft drink', 'fizzy', 'cold drink'],
    title: 'Cold, Fizzy Soda',
    userPromptText: 'I want a ice cold fizzy coke right now',
    aiResponse: 'That cold, fizzy throat hit is so refreshing! 🥤 Usually, our body wants the immediate cooling hydration combined with the carbonation tickle. Let’s get you that exact refreshing, sparkling punch using natural local flavors that leave you feeling perfectly hydrated and light.',
    decodedCraving: {
      rootCause: 'Seeking sparkling textures, cooling throat sensation, and rapid cold hydration.',
      feelTags: ['fizzy', 'cold', 'sweet']
    },
    recommendedSwapIds: ['swap_mint_shikanji', 'swap_buttermilk_chaas', 'swap_coconut_water']
  },
  {
    id: 'scenario_sweet_dinner',
    triggerKeywords: ['sweet tooth', 'after dinner', 'dessert', 'late sweet'],
    title: 'Sweet Tooth After Dinner',
    userPromptText: 'I always crave a sweet dessert right after dinner',
    aiResponse: 'A very common ritual! 🍨 Finishing a savory dinner leaves our brain wanting a sweet sign-off to signal that the meal is complete. Let’s give you a smooth, sweet, and comforting final note that feels luxurious but won’t spike your sugar levels right before bed.',
    decodedCraving: {
      rootCause: 'Habitual/sensory sweet sign-off signaling satiety at the end of a meal.',
      feelTags: ['sweet', 'creamy', 'cold']
    },
    recommendedSwapIds: ['swap_mishti_doi', 'swap_stuffed_dates', 'swap_frozen_grapes']
  },
  {
    id: 'scenario_bored_eating',
    triggerKeywords: ['bored', 'movie', 'tv show', 'netflix', 'mindless'],
    title: 'Bored Screen Munching',
    userPromptText: 'I am just bored watching a movie and want to munch',
    aiResponse: 'Ah, the classic screen-time crunch! 🎬 When we watch something, our hands want to be busy, and we crave small, repetitive, crunchy snacks. Let’s set you up with light, airy bites that you can enjoy one-by-one, keeping your movie experience fun and mindful.',
    decodedCraving: {
      rootCause: 'Boredom or screen-associated routine seeking physical hand-to-mouth chewing distraction.',
      feelTags: ['crunchy', 'salty']
    },
    recommendedSwapIds: ['swap_spiced_popcorn', 'swap_roasted_makhana', 'swap_roasted_chana']
  },
  {
    id: 'scenario_pizza_greasy',
    triggerKeywords: ['pizza', 'burger', 'cheesy', 'dominos', 'mcdonalds'],
    title: 'Heavy Pizza Cravings',
    userPromptText: 'I want a heavy cheesy Dominos pizza',
    aiResponse: 'We all know that thick, buttery, melted cheese pull is pure comfort! 🍕 When you want pizza, you are seeking melted richness, savory herbs, and warm baked carbs. Let’s build you a crispy, savory, home-style alternative that melts in your mouth and feels incredibly satisfying.',
    decodedCraving: {
      rootCause: 'Desire for rich fats, warm baked starch, and savory Italian herbs.',
      feelTags: ['savory', 'comfort', 'creamy']
    },
    recommendedSwapIds: ['swap_roti_pizza', 'swap_paneer_burger', 'swap_creamy_hummus']
  },
  {
    id: 'scenario_too_tired',
    triggerKeywords: ['tired', 'lazy', 'no cook', 'exhausted', 'quick grab'],
    title: 'Too Tired to Cook',
    userPromptText: 'I am super tired but so hungry, too lazy to cook anything',
    aiResponse: 'I completely understand. After a long, exhausting day, the last thing you want is a sink full of dishes. 🥱 Let’s set you up with a pocket-friendly, zero-effort nourishment that requires absolutely no cooking and provides quick, steady energy.',
    decodedCraving: {
      rootCause: 'Need for high-speed, zero-effort macronutrients due to physical exhaustion.',
      feelTags: ['comfort', 'savory', 'sweet']
    },
    recommendedSwapIds: ['swap_stuffed_dates', 'swap_roasted_chana', 'swap_pb_toast']
  },
  {
    id: 'scenario_hangover',
    triggerKeywords: ['hangover', 'headache', 'greasy breakfast', 'heavy breakfast'],
    title: 'Hangover Greasy Breakfast',
    userPromptText: 'Woke up with a hangover, need a greasy breakfast',
    aiResponse: 'Ugh, hangovers are tough. 🤕 Your body is signaling for sodium, easy-to-digest carbs, and soothing hydration to recover. Reaching for highly oily foods can irritate a sensitive stomach. Here are warm, gentle, and nourishing breakfasts that comfort your gut and pick you right up.',
    decodedCraving: {
      rootCause: 'Dehydration, low blood sugar, and sodium depletion seeking easy carb comfort.',
      feelTags: ['savory', 'comfort', 'hot']
    },
    recommendedSwapIds: ['swap_vegetable_poha', 'swap_besan_chilla', 'swap_egg_fried_rice']
  },
  {
    id: 'scenario_spicy_chaat',
    triggerKeywords: ['chaat', 'golgappa', 'panipuri', 'bhel', 'spicy street'],
    title: 'Spicy Tangy Street Chaat',
    userPromptText: 'I crave spicy tangy street chaat right now',
    aiResponse: 'That explosion of spicy, sweet, tangy, and crunchy flavors is unmatched! 🤤 Street food cravings are all about high sensory contrasts. Let’s get you that identical mouthwatering chatpata magic using crisp, fresh, and zesty ingredients that are clean and nourishing.',
    decodedCraving: {
      rootCause: 'Desire for intense taste contrasts (tangy, spicy, sweet, salty) and clean crunchy textures.',
      feelTags: ['crunchy', 'savory', 'salty']
    },
    recommendedSwapIds: ['swap_sprouts_chaat', 'swap_roasted_papad_chaat', 'swap_peanut_chaat']
  },
  {
    id: 'scenario_biscuit_chai',
    triggerKeywords: ['biscuit', 'cookie', 'tea time', 'chai routine', 'rusk'],
    title: 'Tea-Time Biscuits',
    userPromptText: 'I need sweet biscuits to dip in my tea',
    aiResponse: 'The evening tea ritual is sacred! ☕ Dipping a sweet, crunchy biscuit into warm tea is pure routine comfort. Standard refined-flour biscuits can spike your sugar, though. Let’s upgrade your saucer with clean, satisfying, and rustic crunches that pair dreamily with your cup.',
    decodedCraving: {
      rootCause: 'Routine association of tea with sweet, porous, crunchy textures.',
      feelTags: ['crunchy', 'sweet', 'comfort']
    },
    recommendedSwapIds: ['swap_roasted_peanuts_ghee', 'swap_baked_banana_cookies', 'swap_roasted_makhana']
  }
];

export function findScenario(query: string): AIScenario | undefined {
  const cleanQuery = query.toLowerCase().trim();
  return AI_SCENARIOS.find(scenario =>
    scenario.triggerKeywords.some(keyword => cleanQuery.includes(keyword))
  );
}
