import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Letter } from '../models/letter.model';

@Injectable()
export class MailsService {
  constructor(private http: Http) {}

  getMails(id: number): any {
    let url = `/api/folders/${id}`;
    return this.http.get(url)
                    .toPromise()
                    .then(this.handleResponse);
  }

  handleResponse(data: any): any {
    let response = data.json();
    return response;
  }
}