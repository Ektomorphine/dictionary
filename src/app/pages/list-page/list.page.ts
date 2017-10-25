import { Component, OnInit} from '@angular/core';
import { WordService, URL as WORDS_URL } from './../../services/word.service';
import { Word } from './../../models/word.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list-page',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage {

  public words: Word[]  = [];

  constructor( private _wordService: WordService ) {}

  ngOnInit() {
    this._wordService
      .getWords()
      .subscribe((data => this.words = data.json()));
  }

  public deleteSelectedWord(word): void {
    const toDeleteUrl = WORDS_URL + word.id;
    this.words.splice(this.words.indexOf(word), 1);
    this._wordService.deleteWord(toDeleteUrl);
    console.log("URL:",toDeleteUrl);
  }

}
