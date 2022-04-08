export interface ApiRecipes {
    recipes: ApiRecipe[]
}

export interface ApiRecipe {
    id:number;
    recipe_api_id: number;
    title: string;
    img: string;
}
