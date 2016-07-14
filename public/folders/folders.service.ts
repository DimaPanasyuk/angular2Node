import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { IFolder } from '../models/folder.model';

@Injectable()
export class FoldersService {
  folders: IFolder[] = [];
  constructor(private http: Http) {}
  getFolders(): any {
    let url = `api/folders`;
    return this.http.get(url)
                    .toPromise()
                    .then(this.handleResponse);
  }

  deleteFolder(folder: IFolder): any {
    let url = `api/folders/${folder._id}`;
    return this.http.delete(url)
                    .toPromise()
                    .then(this.handleResponse);
  }

  createFolder(folder: IFolder): any {
    let url = `api/folders`;
    let body = JSON.stringify(folder);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers })
    return this.http.post(url, body, options)
                    .toPromise()
                    .then(this.handleResponse);
  }

  handleResponse(response: any): IFolder[] {
    let data = response.json();
    return data;
  }
}