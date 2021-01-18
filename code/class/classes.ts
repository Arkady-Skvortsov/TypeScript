class Car {
  protected status: string = "";
  public year: number = 1998;
  public oil: number = 100;
  public DesOil: number;

  constructor(protected color: string) {
    this.color = color;
  }

  getInfo(): void {
    console.log(this.color);
  }
}

const car = new Car("black");

class Ford extends Car {
  public getUse(use: string): void {
    this.status = use;
  }
}

const ford = new Ford("white");

ford.getUse("Middle");

console.log(ford, car);

car.getInfo();
ford.getInfo();

//Абстрактный класс

abstract class Component {
  abstract getText(txt: string): string;
  abstract getCount(): number;
}

class Header extends Component {
  getText(txt) {
    return txt.toUpperCase();
  }

  getCount() {
    return 5 * 5;
  }
}

let header = new Header();

console.log(header.getCount(), header.getText("Hello Header"));
