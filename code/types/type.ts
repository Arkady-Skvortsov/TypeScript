const Truethy: number = 0;

//tuple
let arr: [number, string] = [124, "true"];

//never
let infinite = (message: number): void => {
  message = 15;
  console.log(message);
};

infinite(Truethy);

//Type - что-то на подобие interface(Тоже в TypeScript)
type Register = string | number | Array<string>; //type - удобно

const login: Register = "Arkadiy";
const secondLogin: Register = "TVOIAMAMA";
const jobs: Register = [
  "Santexnic",
  "programmer",
  "Sucker",
  "Mexannik-voditel",
  "policeman",
];

console.log(login, secondLogin);

jobs.map((item) => console.log(item.toLowerCase()));

let symm = (a: number, b: number): number => {
  return (a * b) / 2;
};

console.log(symm(1, 12));
