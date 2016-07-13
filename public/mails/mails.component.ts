import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFolder } from '../models/folder.model';

@Component({
  selector: 'mails',
  templateUrl: 'public/mails/mails.component.html'
})
export class MailsComponent implements OnInit {
  pageTitle: string;
  data: IFolder;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
    })
  }
}