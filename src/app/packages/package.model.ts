import { Food } from '../shared/food.model';
export class Package {

    public name:string;
    public description:string;
    public imagePath:string;
    public ingredientes: Food[];
    constructor(name: string, description: string, imagePath: string, ingredientes:Food[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredientes = ingredientes;
    }
}