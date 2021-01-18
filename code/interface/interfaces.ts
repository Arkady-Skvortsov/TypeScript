interface User {
  [key: string]: string | number | boolean | Function | Array<any>;
}

interface Job extends User {
  CanUserGetJob(): void;
}

let user: Job = {
  login: "Guest123",
  password: "Generated3333",
  isReg: true,
  age: 20,
  portfolio: [
    "pokemon-app",
    "chat-app",
    "resipes-app",
    "music-app",
    "shop",
    "inventar-app",
  ],
  CanUserGetJob() {
    if (this.Reg === true && this.portfolio.includes("chat-app")) {
      console.log("Вы приняты!", this.portfolio.length);
    } else {
      console.log("Приходите в другой раз");
    }
  },
};

user.CanUserGetJob();

interface Stylus {
  [key: string]: string | boolean; //Такая запись позволяет не перечислять все свойства, которые будут унаследованны объектом/классом, а просто указать тип ключа и значения
}

let css: Stylus = {
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "space-around",
  color: "red",
  top: false,
};

console.log(css);
