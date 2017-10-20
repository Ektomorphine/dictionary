import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from './../service/service.component';
import { Word } from './../models/word.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public url = 'http://localhost:3000/words/';
  public words: Word[]  = [];
  public selectedWord: Word;

  constructor( public http: HttpService ) {}

  ngOnInit() {
    this.http.getData(this.url)
             .subscribe((data => this.words = data.json()));
  }

  public deleteSelectedWord(word): void {
    let toDeleteUrl = this.url+word.id;
    this.words.splice(this.words.indexOf(word), 1);
    this.http.deleteWord(toDeleteUrl);

  }

}
