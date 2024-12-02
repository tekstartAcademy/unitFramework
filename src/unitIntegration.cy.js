import add from './add';
import { minus } from './minus';
import { multiplication } from './multiplication';

export const arithmeticCombination = (numberOne, numberTwo) => {
  const summation = add(numberOne, numberTwo);
  const multiply = multiplication(numberOne, numberTwo);

  return minus(multiply, summation);
};
