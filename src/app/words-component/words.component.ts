import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Word } from './../models/word.model';

import { HttpService } from './../service/service.component';

@Component({
  selector: 'app-words-component',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent {

  public word: Word = new Word();

  public addWordForm: FormGroup;

  constructor(public http: HttpService) {

    this.addWordForm  = new FormGroup ({

    "word": new FormControl("", Validators.required),
    "translation": new FormControl("", Validators.required)

     });
  }

  public submit(object: Word): any {
    this.http.addWord(object)
             .subscribe((data)=> { this.word=data; console.log(data);});

  }





}
