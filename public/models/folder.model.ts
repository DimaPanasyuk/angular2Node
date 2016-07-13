export class IFolder {
  id: number;
  name: string;
}

export class Folder implements IFolder{
  constructor(public id: number, public name: string) {}
}