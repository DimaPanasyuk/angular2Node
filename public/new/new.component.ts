import { Component, OnInit } from '@angular/core';
import { ILetter } from '../models/letter.model';

@Component({
  selector: 'new-email',
  templateUrl: 'public/new/new.component.html'
})
export class NewEmailComponent implements OnInit {
  newLetter: ILetter = {
    _id: undefined,
    title: '',
    body: '',
    date: new Date().getTime(),
    sender: null,
    selected: false
  }
  whomToSend: string = '';

  constructor() {

  }

  ngOnInit(): void {
    console.log('yep new mail!');
  }
}