import { year } from "./index";

export function hungryDog(weight, years) {
  if (year >= 2 / 12 && year <= 4 / 12) {
    return weight * .1;
  } else if (year > 4 / 12 && year <= 7 / 12) {
    return weight * .05;
  } else if (year > 7 / 12 && year < 1) {
    return weight * .04;
  }
  if (year > 1 && weight < 6) {
    return weight * .05;
  } else if (year > 1 && weight >= 6 && weight < 11) {
    return weight * .04;
  } else if (year > 1 && weight >= 11 && weight <= 15) {
    return weight * .03;
  } else if (year > 1 && weight > 15)
    return weight * .03;
}
