import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class RecipeStore extends EventEmitter {
    constructor() {
        super();
        let test = JSON.parse(localStorage.getItem('recipes'));
        if (test !== null) {
            this.recipes = test;
        } else {
            this.recipes = [{
                id: 12345,
                name: 'Grilled Cheese',
                ingredients: ['bread', 'cheese', 'butter']
            }, {
                id: 54321,
                name: 'PB & J',
                ingredients: ['bread', 'peanutbutter', 'jelly']
            }]
        };
    }

    createRecipe(name, ingredients) {
        const id = Date.now();
        this.recipes.push({
            id: id,
            name: name,
            ingredients: ingredients
        });
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
        this.emit('change');
    }

    updateRecipe(recipe) {
        for(let i = 0; i < this.recipes.length; i++) {
            if (this.recipes[i].id === recipe.id) {
                this.recipes[i] = recipe;
                break;
            }
        }
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
        this.emit('change');
    }

    deleteRecipe(id) {
        for(let i = 0; i < this.recipes.length; i++) {
            if (this.recipes[i].id === id) {
                const index = this.recipes.indexOf(this.recipes[i]);
                this.recipes.splice(index, 1);
                break;
            }
        }
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
        this.emit('change');
    }

    getAll() {
        return this.recipes;
    }

    handleActions(action) {
        switch(action.type) {
            case 'CREATE_RECIPE':
                this.createRecipe(action.name, action.ingredients);
                break;
            case 'UPDATE_RECIPE':
                this.updateRecipe(action.recipe);
                break;
            case 'DELETE_RECIPE':
                this.deleteRecipe(action.id);
                break;
            default:
                break;
        }
    }
}

const recipeStore = new RecipeStore();
dispatcher.register(recipeStore.handleActions.bind(recipeStore));

export default recipeStore;