class MyMessage {
  header: string = "header";
  message: string = "Hello MyMessage";
}

class BugMessage {
  header: string = "bugHeader";
  ErrMessage: Error = new Error("New Error");
}

const myMessage = new MyMessage();
const bugMessage = new BugMessage();

function handle(x: MyMessage | BugMessage) {
  if (x instanceof MyMessage) {
    return {
      info: `${x.header}, ${x.message}`,
    };
  } else {
    return {
      info: `${x.header}, ${x.ErrMessage}`,
    };
  }
}

console.log(handle(myMessage).info);

console.log(handle(bugMessage).info);

//type guards? Стоп, это просто обычные типы, вот и все...

type Login = "Max" | "Danil"; //Оказывается, что в type мы указываем не только тип переменной, но еще и значение

const checkLogin = (login: Login): void => {
  if (login.length < 5) {
    console.log(`Добавьте еще ${login.length - 1} буквы`);
  } else {
    console.log("Вы зарегистрированы!");
  }
};

checkLogin("Max");
checkLogin("Danil");
