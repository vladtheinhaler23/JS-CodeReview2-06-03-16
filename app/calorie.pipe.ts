import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    console.log('selected meal: ', args[1])
    var desiredDoneState = args[0];
    if(desiredDoneState === "above") {
      return input.filter((meal) => {
        return meal.calories > 500;
      });
    } else if (desiredDoneState === "below") {
      return input.filter((meal) => {
        return meal.calories < 500;
      });
    } else {
      return input;
    }
  }
}
