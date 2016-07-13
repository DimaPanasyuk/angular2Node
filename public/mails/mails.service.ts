import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Letter } from '../models/letter.model';

@Injectable()
export class MailsService {
  constructor(private http: Http) {}

  getMails(id: number, sortType: string): any {
    let url = `/api/folders/${id}?sortType=${sortType}`;
    return this.http.get(url)
                    .toPromise()
                    .then(this.handleResponse);
  }

  handleResponse(data: any): any {
    let response = data.json();
    return response;
  }
}