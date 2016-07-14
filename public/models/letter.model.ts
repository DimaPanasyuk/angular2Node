import { IUser } from './user.model';

export interface ILetter {
  _id: string;
  title: string;
  body: string;
  sender: IUser;
  date: number;
  selected: boolean;
}

export class Letter implements ILetter {
  constructor(public _id: string,
              public title: string,
              public body: string,
              public sender: IUser,
              public date: number,
              public selected: boolean) {}
}