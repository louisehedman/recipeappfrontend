export interface ApiRecipes {
    recipes: ApiRecipe[]
}

export interface ApiRecipe {
    id: null;
    recipe_api_id: number;
    title: string;
    img: string;
}
