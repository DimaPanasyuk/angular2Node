import { Component, OnInit } from '@angular/core';
import { Folder } from '../models/folder.model';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { FoldersService } from './folders.service';

@Component({
 selector: 'folders',
 templateUrl: 'public/folders/folders.component.html',
 directives: [ROUTER_DIRECTIVES]
})
export class FoldersComponent implements OnInit{
  activeFolder: string;
  folders: Folder[]
  constructor(private router: Router, 
              private foldersService: FoldersService) {
  }

  writeNewLetter(): void {
    this.router.navigate(['new']);
    this.setActiveFolder('new');
  }

  setActiveFolder(tabName: string): void {
    this.activeFolder = tabName;
    sessionStorage.setItem('activeFolder', this.activeFolder); 
  }

  ngOnInit(): void {
    let _this = this;
    this.activeFolder = sessionStorage.getItem('activeFolder');
    this.foldersService.getFolders()
                       .then(function(data: any) {
                         _this.folders = data;
                       })
  }
}