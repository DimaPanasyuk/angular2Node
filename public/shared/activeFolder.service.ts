import { Injectable } from '@angular/core';

@Injectable()
export class ActiveFolderService {
  activeFolder: string;
  constructor() {}
  setActiveFolder(folderName: string) {
    this.activeFolder = folderName;
    console.log(this.activeFolder);
  }
  getActiveFolder(): string {
    return this.activeFolder;
  }
}