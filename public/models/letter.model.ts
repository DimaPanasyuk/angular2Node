import { IUser } from './user.model';

export interface ILetter {
  id: number;
  title: string;
  body: string;
  sender: IUser;
  date: number;
  selected: boolean;
}

export class Letter implements ILetter {
  constructor(public id: number,
              public title: string,
              public body: string,
              public sender: IUser,
              public date: number,
              public selected: boolean) {}
}