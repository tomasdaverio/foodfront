import { GET_RECIPE_BY_NAME , GET_RECIPE_BY_ID , ADD_NEW_RECIPE, 
    ORDER_BY_HEALTHSCORE_ASC, ORDER_BY_HEALTHSCORE_DESC, ORDER_BY_AZ,
    ORDER_BY_ZA, FILTER_BY_DIET, REMOVE_FILTER } from './actiontypes.js' ;

import { quickSort, sortAZ , sortZA } from './methods.js' ;

const initialState = {
    recipes: [],
    recipeDetail: {},
    filteredRecipes: []
  };

const rootReducer = (state=initialState,action)=>{

    var array = state.filteredRecipes.length ? 'filteredRecipes' : 'recipes' ;

     switch(action.type){

        case GET_RECIPE_BY_NAME:
            
            return {
                ...state, recipes:action.payload
            }

        case GET_RECIPE_BY_ID:
            
            return {
                ...state, recipeDetail:action.payload
            }

        case ADD_NEW_RECIPE:
            
            return {
                ...state, recipes:[...state.recipes,action.payload]
            }

        case ORDER_BY_HEALTHSCORE_ASC:
        
            return {
                ...state, [array]: quickSort(state[array])
            }
        
        case ORDER_BY_HEALTHSCORE_DESC:
            
            return {
                ...state, [array]: (quickSort(state[array]).reverse())
            }

        case ORDER_BY_AZ:
            
            return {
                ...state, [array]: sortAZ(state[array])
            }

        case ORDER_BY_ZA:
            
            return {
                ...state, [array]: sortZA(state[array])
            }

        case FILTER_BY_DIET:
            
            return {
                ...state, filteredRecipes: state.recipes.filter( recipe => recipe.diets.includes(action.payload) )
            }

        case REMOVE_FILTER:
            
            return {
                ...state, filteredRecipes: []
            }

        

        default: return state ;
    }
}

export default rootReducer ;