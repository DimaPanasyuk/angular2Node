import { Component, OnInit } from '@angular/core';
import { FoldersService } from '../folders/folders.service';
import { Folder } from '../models/folder.model';
import * as _ from 'lodash';

@Component({
  selector: 'management',
  templateUrl: 'public/management/management.component.html'
})
export class ManagementComponent implements OnInit {
  pageTitle: string = 'Folders management';
  folders: Folder[] = [];
  newFolder: Folder = {
    _id: null,
    name: '',
    letters: [],
    immutable: false,
    tag: 'cog'
  }
  creationMode: boolean = false;
  constructor(private foldersService: FoldersService) {}

  ngOnInit(): void {
    this.getFolders();
  } 

  getFolders(): void {
    this.foldersService.getFolders()
                       .then((res: any) => {
                         this.folders = res.folders;
                       });
  }

  deleteFolder(folder: Folder): void {
    this.foldersService.deleteFolder(folder)
                       .then((data: any) => {
                         if (!data.error) {
                            _.remove(this.folders, {_id: folder._id});
                         } else {
                           console.log(data.error);
                         }
                       })
  }

  setCreationMode(): void {
    this.creationMode = true;
  }

  createFolder(): void {
    this.foldersService.createFolder(this.newFolder)
                       .then((data: any) => {
                          if (!data.error) {
                            this.folders.push(data.folder);
                            this.cancelCreation();
                          }
                       })
  }

  cleanNewFolder(): void {
    this.newFolder.name = '';
  }

  cancelCreation(): void {
    this.creationMode = false;
    this.cleanNewFolder();
  }
}