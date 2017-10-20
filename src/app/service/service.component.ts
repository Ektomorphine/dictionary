import { Injectable, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Word } from './../models/word.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  public getData(url): any {
    return this.http.get(url);
  }

  public addWord(object1: Word): any {
    const body = JSON.stringify(object1);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    return this.http.post('http://localhost:3000/words', body, { headers: headers})
                    .map((resp:Response)=>resp.json());
  }

  public deleteWord(url): any {
    console.log(url);
    return this.http.delete(url).subscribe();
  }

}
