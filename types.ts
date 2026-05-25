export interface CravingCategory {
  id: string;
  name: string;
  description: string;
  tags: string[]; // Craving feel tags associated with this category
}

export interface SwapAlternative {
  id: string;
  name: string;
  categoryId: string;
  tags: {
    feel: string[];         // crunchy, sweet, salty, creamy, cold, hot, comfort, fizzy, chewy, savory
    whyItWorks: string[];   // same crunch, more filling, less oily, protein-rich, quick dopamine, easy digestion
    lifestyle: string[];    // hostel-friendly, under ₹20, under ₹50, veg, acne-friendly, gym mode
    occasion: string[];     // late night, study snack, period cravings, stress eating, post-gym, monsoon
  };
  budget: 'under ₹20' | 'under ₹50' | 'premium';
  prepTime: string; // e.g., "0 min", "5 min", "15 min"
  whyDescription: string; // Tone rules checked description
  recipeText: string;
  imageSvgSeed: string; // Cozy responsive vector visual rather than generic images
}
