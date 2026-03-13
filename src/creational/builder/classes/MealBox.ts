import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealBox implements MealCompositeProtocol {
    private readonly items: MealCompositeProtocol[] = [];

    getPrice(): number {
        return this.items.reduce((total, item) => total + item.getPrice(), 0);
    }

    add(...meal: MealCompositeProtocol[]): void {
        meal.forEach(item => this.items.push(item));
    }
}