import { EventEmitter } from '@angular/core';
import{Food} from '../shared/food.model';
export class FoodListService {
    foodChanged = new EventEmitter<Food[]>();
    private foodList: Food[] = [
        new Food('Carne', 1),
        new Food('Arroz', 2),
        new Food('Feijão', 3),
        new Food('Farofa', 4)
    ];
    getFoods() {
        return this.foodList.slice(); // traz a copia do array
    }
    addFood(newFood: Food) {
        this.foodList.push(newFood);
        this.foodChanged.emit(this.foodList.slice());
    }
    addIngredients(ingredients: Food[]) {
        this.foodList.push(...ingredients);
        this.foodChanged.emit(this.foodList.slice());
    }
    clearFoods() {
        this.foodList = [];
        this.foodChanged.emit(this.foodList.slice());
    }
}