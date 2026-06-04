export interface CravingCategory {
  id: string;
  name: string;
  description: string;
  tags: string[];
  emoji?: string;
}

export interface SwapAlternative {
  id: string;
  name: string;
  categoryId: string;
  tags: {
    feel: string[];
    whyItWorks: string[];
    lifestyle: string[];
    occasion: string[];
  };
  budget: 'under ₹20' | 'under ₹50' | 'premium';
  prepTime: string;
  whyDescription: string;
  recipeText: string;
  imageSvgSeed: string;
}
