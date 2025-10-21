import { EventEmitter, Injectable } from '@angular/core';
import { Package } from './package.model';
import { Food } from '../shared/food.model';
import { FoodListService } from '../food-list/food-list.service';

@Injectable()
export class PackageService {
    packageSelected = new EventEmitter<Package>();

    private packages: Package[] = [
        new Package(
            'Churrasco',
            'Churrasco de picanha',
            'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia28136/churrasco-e-acompanhamentos-afe.jpg',
            [
                new Food('Picanha', 1),
                new Food('Cebola', 1),
                new Food('Tomate', 1)
            ]
        ),
        new Package(
            'Salmão Grelhado',
            'Salmão',
            'https://media.istockphoto.com/id/1281404116/pt/foto/fried-salmon-steaks-fried-potatoes-and-fresh-vegetables-on-wooden-table.jpg?s=612x612&w=0&k=20&c=6cYDalaziL_zkP1R-JeWLixZKDwnOcZcP--rA2nVVs4=',
            [
                new Food('Salmão', 1),
                new Food('Sal', 1),
                new Food('Tomate', 1),
            ]
        )
    ];

    constructor(private foodListService: FoodListService) { }

    getPackages() {
        return this.packages.slice(); // retorna uma copia de packages e retorna ao usuario
    }

    addIngredientsToFoodList(ingredients: Food[]) {
        this.foodListService.addIngredients(ingredients);
    }
}