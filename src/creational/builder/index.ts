import { Bean } from './classes/Bean';
import { Meat } from './classes/Meat';
import { Rice } from './classes/Rice';
import { MealBox } from './classes/MealBox';
import { MainDishBuilder } from './classes/MainDishBuilder';

// Usando composite
const rice = new Rice('Arroz', 15);
const bean = new Bean('Feijão', 10);
const meat = new Meat('Carne', 25);

const mealBox = new MealBox();
mealBox.add(rice, bean, meat);
console.log(mealBox.getPrice());

// Usando builder
const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.getMeal();

