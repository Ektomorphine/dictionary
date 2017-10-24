import { Injectable, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Word } from './../models/word.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class WordService {

  constructor(private http: Http) {}

  public url = 'http://localhost:3000/words/'; // public cos list.component.ts use this var. for concat. with word.id

  public getWords(): any {
    return this.http.get(this.url);
  }

  public addWord(object1: Word): any {
    const body = JSON.stringify(object1);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    return this.http.post(this.url, body, { headers: headers})
                    .map((resp: Response) => resp.json());
  }

  public deleteWord(url): any {
    return this.http.delete(url).subscribe();
  }

}
