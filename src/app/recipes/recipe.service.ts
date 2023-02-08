import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredients } from '../share/ingrdient.model';
import { Recipe } from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  //  private recipes: Recipe[]= [
  //       new Recipe('A test Recipe',
  //       'This is simply a test',
  //       'https://insanelygoodrecipes.com/wp-content/uploads/2021/04/Chicken-Tabbouleh-with-Quinoa-Tomatoes-and-Cucumber-683x1024.webp'
  //       ,[
  //           new Ingredients('Meat', 1),
  //           new Ingredients('French Fries', 20)
  //       ]),
  //       new Recipe('This is a new one',
  //       'New one Recipe',
  //       'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
  //       [
  //           new Ingredients('Buns', 2),
  //           new Ingredients('Meat', 1)
  //       ])
  //     ];
  private recipes: Recipe[] = [];
  constructor(private store: Store<fromApp.AppState>) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
