import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFolder } from '../models/folder.model';
import { Letter } from '../models/letter.model';
import { MailsService } from './mails.service';
import { FoldersService } from '../folders/folders.service';
import { OrderByPipe } from '../shared/pipes/orderBy.pipe';
import * as _ from 'lodash';

@Component({
  selector: 'mails',
  templateUrl: 'public/mails/mails.component.html',
  pipes: [OrderByPipe]
})
export class MailsComponent implements OnInit {
  pageTitle: string;
  lettersAmount: number;
  sortType: string = 'date';
  selectedAll: boolean = false;
  selectedLetters: Letter[] = [];
  folder: IFolder = {
    name: '',
    _id: null,
    letters: null,
    immutable: false,
    tag: null
  };
  foldersToMove: IFolder[];
  folderToMove: IFolder = {
    name: '',
    _id: null,
    letters: null,
    immutable: false,
    tag: null
  };

  constructor(private route: ActivatedRoute,
              private foldersService: FoldersService, 
              private mailsService: MailsService) { }
  
  ngOnInit(): void {
    this.getMails();
  }

  getMails(): void {
    let that = this;
    this.route.params.subscribe(params => {
      this.mailsService.getMails(params['id'], this.sortType)
                        .then(function(res: any) {
                          that.folder = res.folder;
                          that.pageTitle = that.folder.name;
                          that.lettersAmount = that.folder.letters.length;
                        });
    })
  }

  setOrderBy(type: string): void {
    this.sortType = type;
    this.getMails();
  }

  toggleSelectAll(): void {
    if (this.selectedAll) {
      this.selectedLetters = [];
      this.folder.letters.forEach(letter => {
        letter.selected = false;
      })
      this.selectedAll = false;
    } else {
      this.folder.letters.forEach(letter => {
        letter.selected = true;
        this.selectedLetters.push(letter);
      })
      this.selectedAll = true;
    }
  }

  selectFolderToMove(folder: IFolder): void {
    this.folderToMove = folder;
  }

  toggleSelectedLetter(letter: Letter): void {
    let letterSelected = _.find(this.selectedLetters, {id: letter.id});
    let notSelectedLetter: Letter;
    letter.selected = !letter.selected;
    notSelectedLetter = _.find(this.folder.letters, {selected: false});
    if (!notSelectedLetter) {
      this.selectedAll = true;
    } else {
      this.selectedAll = false;
    }
    if (letterSelected) {
      _.remove(this.selectedLetters, {id: letter.id});
    } else {
      this.selectedLetters.push(letter);
    }
  }

  moveSelectedMails(): void {
    this.foldersService.getFolders()
                       .then((res: any) => {
                         this.foldersToMove = res.folders;
                       })
  }

  approveMovement(): void {
    console.log(`${this.selectedLetters.length} will be moved to ${this.folderToMove.name} folder!`);
  }

  moveToTrash(): void {
    console.log(`${this.selectedLetters.length} will be moved to trash!`);
  }
}