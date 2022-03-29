export interface Recipe {
        uri: string;
        label: string;
        image: string;
        images: Imageinfo;
        source: string;
        url: string;
        shareAs: string;
        yield: number; 
        dietLabels: string[];
        healthLabels: string[];
        cautions: string[];
        ingredientLines: string[];
        ingredients: Ingredient[];
        calories: number; 
        glycemicIndex: number; 
        totalWeight: number; 
        cuisineType: string[];
        mealType: string[];
        dishType: string[];
}

interface Imageinfo {
    url: string;
    width: number;
    height: number;
}

interface Ingredient {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: number;
    foodId: string;
}

