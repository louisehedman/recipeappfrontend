export interface Recipe {
  id: number;
  title: string;
  image: string;
  instructions: string;
  dishTypes: string[];
  vegan: boolean;
  vegetarian: boolean;
  summary: string;
  servings: number;
  readyInMinutes: number;
  extendedIngredients: any;
  glutenFree: boolean;
  dairyFree: boolean;
  diet: string;
  cheap: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
}

