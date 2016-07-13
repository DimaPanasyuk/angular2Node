import { Letter } from './letter.model';

export class IFolder {
  id: number;
  name: string;
  letters: Letter[];
  tag: string;
}

export class Folder implements IFolder{
  constructor(public id: number, 
              public name: string, 
              public letters: Letter[],
              public tag: string) {}
}