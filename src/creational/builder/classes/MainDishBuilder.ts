import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { Bean } from './Bean';
import { Rice } from './Rice';
import { Meat } from './Meat';
import { Beverage } from './Beverage';
import { Dessert } from './Dessert';
import { MealBox } from './MealBox';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();
  // Poderia receber as refeições por parâmetro, mas para exemplificar, estou criando as refeições dentro do método.
  makeMeal(): this {
    const rice = new Rice('Arroz', 15);
    const bean = new Bean('Feijão', 10);
    const meat = new Meat('Carne', 25);
    this._meal.add(rice, bean, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Refrigerante', 10);
    this._meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Sorvete', 15);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
}
