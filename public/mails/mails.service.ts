import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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

  moveMails(lettersIds: string[], sourceId: string, destinationId: string): any {
    let url = `api/folders/${sourceId}`;
    let body = JSON.stringify({
      lettersIds: lettersIds,
      destinationId: destinationId
    });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(url, body, options)
                    .toPromise()
                    .then(this.handleResponse);
  }

  handleResponse(data: any): any {
    let response = data.json();
    return response;
  }
}