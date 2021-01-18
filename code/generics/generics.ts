const array: Array<number> = [1, 1, 2, 3, 5];
const strings: Array<string> = ["one", "two", "three"];
const bools: Array<boolean> = [true, false];

//Динамический тип <T> | T[], тобишь, позволяет работать с разными типами данных.... В данном случае - с массивами)
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverse(array), reverse(strings), reverse(bools));
