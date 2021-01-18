type User = {
  readonly _id: number;
  name: string;
  email: string;
  about: string;
};

type UserInformation = Exclude<keyof User, "_id" | "name" | "email">; //Тобишь этот оператор позволяет наоборот убрать из типа что-то лишнее, пробегаясь по его ключам, при этом присваивая это другому типу
type UserInformation2 = Pick<User, "_id" | "name">; //Тут же наоборот, добавить что-то нужное из какого-нибудь типа

let UserInf: UserInformation = "about";
let UserMostInfo: UserInformation2 = {
  _id: 5,
  name: "Arkadiy",
};

console.log(UserInf, UserMostInfo);
