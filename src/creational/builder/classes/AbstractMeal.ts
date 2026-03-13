import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private price: number) { }

  getPrice(): number {
    return this.price;
  }
}