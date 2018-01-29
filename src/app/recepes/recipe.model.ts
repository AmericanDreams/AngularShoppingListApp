import {Ingridient} from '../shared/ingridient.model';


export class Recipe {

  public id: number;
  public name: string;
  public  description: string;
  public imagePath: string;
  public ingridients: Ingridient[];

  constructor(id: number , name: string , desc: string , imagePath: string , ingridients = []) {
      this.id = id;
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.ingridients = ingridients;
  }

}
