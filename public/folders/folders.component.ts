import { Component, OnInit } from '@angular/core';
import { Folder } from '../models/folder.model';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { FoldersService } from './folders.service';
import { ActiveFolderService } from '../shared/activeFolder.service';

@Component({
 selector: 'folders',
 templateUrl: 'public/folders/folders.component.html',
 directives: [ROUTER_DIRECTIVES]
})
export class FoldersComponent implements OnInit{
  activeFolder: string;
  folders: Folder[]
  constructor(private router: Router, 
              private foldersService: FoldersService,
              private activeFolderService: ActiveFolderService) {
    this.activeFolder = this.activeFolderService.getActiveFolder();
  }

  writeNewLetter(): void {
    this.router.navigate(['new']);
  }

  ngOnInit(): void {
    let _this = this;
    this.foldersService.getFolders()
                       .then(function(data: any) {
                         _this.folders = data;
                       })
  }
}