import { Injectable, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Word } from './../models/word.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export const URL = 'http://localhost:3000/words/';

@Injectable()
export class WordService {

  constructor(private http: Http) {}

  public getWords(): any {
    return this.http.get(URL);
  }

  public addWord(object1: Word): any {
    const body = JSON.stringify(object1);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    return this.http
      .post(URL, body, { headers: headers})
      .map((resp: Response) => resp.json());
  }

  public deleteWord(url): any {
    return this.http.delete(url).subscribe();
  }

}
