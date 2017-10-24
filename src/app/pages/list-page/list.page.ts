import { Component, OnInit} from '@angular/core';
import { WordService } from './../../services/word.service';
import { Word } from './../../models/word.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list-page',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage {

  public words: Word[]  = [];
  public selectedWord: Word;

  constructor( private _wordService: WordService ) {}

  ngOnInit() {
    this._wordService.getWords()
             .subscribe((data => this.words = data.json()));
  }

  public deleteSelectedWord(word): void {
    const toDeleteUrl = this._wordService.url + word.id;
    this.words.splice(this.words.indexOf(word), 1);
    this._wordService.deleteWord(toDeleteUrl);
    console.log("URL:",toDeleteUrl);
  }

}
