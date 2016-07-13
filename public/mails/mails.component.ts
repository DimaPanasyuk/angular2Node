import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFolder } from '../models/folder.model';
import { Letter } from '../models/letter.model';
import { MailsService } from './mails.service';
import { ActiveFolderService } from '../shared/activeFolder.service';
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
  sortOrder: string = 'date';
  selectedAll: boolean = false;
  selectedLetters: Letter[] = [];
  folder: IFolder = {
    name: null,
    id: null,
    letters: null
  }
  constructor(private route: ActivatedRoute, 
              private mailsService: MailsService,
              private activeFolderService: ActiveFolderService) { }
  
  ngOnInit(): void {
    let that = this;
    this.route.params.subscribe(params => {
      this.mailsService.getMails(params['id'])
                        .then(function(res: any) {
                          that.folder = res.folder;
                          that.activeFolderService.setActiveFolder(that.folder.name);
                          that.pageTitle = that.folder.name;
                          that.lettersAmount = that.folder.letters.length;
                        });
    })
  }

  setOrderBy(type: string): void {
    this.sortOrder = type;
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
}