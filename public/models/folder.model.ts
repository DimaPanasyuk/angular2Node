import { Letter } from './letter.model';

export class IFolder {
  _id: string;
  name: string;
  letters: Letter[];
  immutable: boolean;
  tag: string;
}

export class Folder implements IFolder{
  constructor(public _id: string, 
              public name: string,
              public letters: Letter[],
              public immutable: boolean, 
              public tag: string) {}
}