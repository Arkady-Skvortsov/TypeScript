const clear = (a: Array<number>): void => {
  a.reverse();
};

const arr: Array<number> = [12, 32, 53, 100];

arr.map((item) => console.log(item));

clear(arr);

console.log(arr);

const Sub = (str: string): string => {
  return str.substring(0, 3);
};

const Hello: string = "+Уй";

console.log(Sub(Hello));

// Перегрузка функций
interface Job {
  expirience: number;
  portfolio: Array<string>;
}

interface Resume extends Job {
  resume: string;
}

function GetSuccessfullJob(): Job;
function GetSuccessfullJob(expirience: number): Job;
function GetSuccessfullJob(
  expirience: number,
  portfolio: Array<string>
): Resume;

function GetSuccessfullJob(ex?: number, portF?: Array<string>): any {
  if (!ex && !portF) {
    return { ex: null, portF: null };
  } else if (ex && !portF) {
    return { e: ex, portF: null };
  } else {
    return {
      e: ex,
      port: portF,
      res: "2 goda v IT i yge BOG BLUAT",
    };
  }
}

console.log("Empy: ", GetSuccessfullJob());
console.log("Second", GetSuccessfullJob(5));
console.log(
  "Third",
  GetSuccessfullJob(2, [
    "text-translate-app",
    "messanger-app",
    "resipes-app",
    "chat-realTime",
    "shop-app",
    "Generated random Password",
    "MachineLearning JS",
  ])
);
