import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IFolder } from '../models/folder.model';

@Injectable()
export class FoldersService {
  constructor(private http: Http) {}
  getFolders(): any {
    let url = `api/folders`;
    return this.http.get(url)
                    .toPromise()
                    .then(this.handleResponse);
  }

  handleResponse(response: any): IFolder[] {
    let folders = response.json().folders;
    return folders;
  }
}