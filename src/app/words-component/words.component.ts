import { Component, NgModule } from '@angular/core';

import { Word } from './../models/word.model';

import { HttpService } from './../service/service.component';

@Component({
  selector: 'app-words-component',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent {

  public word: Word = new Word();

  constructor(public http: HttpService) {}

  public submit(object: Word): any {
    this.http.addWord(object)
             .subscribe((data)=> { this.word=data; console.log(data);});

  }



}
