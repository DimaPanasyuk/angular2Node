
export interface IUser {
  id: string,
  name: string,
  surname: string,
  age: number
}

export class User implements IUser {
  constructor(public id: string,
              public name: string,
              public surname: string,
              public age: number) { }
}