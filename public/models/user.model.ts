export interface IUser {
  name: string,
  age: number,
  showUpdateModal: boolean
}

export class User {
  constructor(public name: string,
              public age: number,
              public showUpdateModal: boolean) { }
}