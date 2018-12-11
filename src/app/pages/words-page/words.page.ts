import { Component, NgModule, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CanDeactivate } from '@angular/router';
import { AbstractControl } from '@angular/forms';


import { Word } from './../../models/word.model';
import { WordService } from './../../services/word.service';
import { WordsGuard } from './../../services/words-guard.service';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-words-page',
  templateUrl: './words.page.html',
  styleUrls: ['./words.page.scss']
})
export class WordsPage implements OnInit {

  public saved = false;
  public word: Word = new Word();
  public addWordForm: FormGroup;

  constructor(public _wordservice: WordService) {}

  ngOnInit() {
    this.addWordForm  = new FormGroup ({
    'word': new FormControl('', Validators.required),
    'translation': new FormControl('', Validators.required),
    'transliteration': new FormControl('', Validators.required)
    });
  }

  public submit(object: Word): any {
    this._wordservice.addWord(object)
             .subscribe();
    this.saved = !this.saved;
  }

   canDeactivate(): boolean {
    if (!this.addWordForm.pristine) {
      return window.confirm('Есть несохраненные изменения. Удалить их?');
    }
    return true;
  }
}
