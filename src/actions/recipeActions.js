import dispatcher from '../dispatcher';

export function createRecipe(name, ingredients) {
    dispatcher.dispatch({
        type: 'CREATE_RECIPE',
        name: name,
        ingredients: ingredients
    });
}

export function updateRecipe(recipe) {
    dispatcher.dispatch({
        type: 'UPDATE_RECIPE',
        recipe: recipe
    });
}

export function deleteRecipe(id) {
    dispatcher.dispatch({
        type: 'DELETE_RECIPE',
        id: id 
    });
}