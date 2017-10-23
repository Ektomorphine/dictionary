import { Component, NgModule, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CanDeactivate } from '@angular/router';


import { Word } from './../models/word.model';
import { HttpService } from './../service/service.component';
import { CanDeactivateGuard } from './../routing/exit.component';

import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'app-words-component',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  public saved = false;
  public word: Word = new Word();
  public addWordForm: FormGroup;

  constructor(public http: HttpService) {}

  ngOnInit() {
    this.addWordForm  = new FormGroup ({
    'word': new FormControl('', Validators.required),
    'translation': new FormControl('', Validators.required),
    'transliteration': new FormControl('', Validators.required)
    });
  }

  public submit(object: Word): any {
    this.http.addWord(object)
             .subscribe();
    this.saved = !this.saved;

  }

   canDeactivate(): boolean {
    if (this.addWordForm.controls.word.value ||
        this.addWordForm.controls.translation.value ||
        this.addWordForm.controls.transliteration.value) {
      return window.confirm('Есть несохраненные изменения. Удалить их?');
    }
    return true;
  }
}
