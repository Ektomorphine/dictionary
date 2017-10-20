import { Component, OnInit } from '@angular/core';

import { HttpService } from './../service/service.component';
import { Word } from './../models/word.model';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  public url = 'http://localhost:3000/words/';
  public start = false;
  public randomNumber: number;
  public wordArray: Word[] = [];
  public questionArray: Word[] = [];
  public answerObj: Word[] = [];
  public selectedAnswer: Word;

  constructor(public http: HttpService) {}

  ngOnInit(){
   this.http.getData(this.url)
    .subscribe(data => {data.json().forEach(word => {
        this.wordArray.push(word);
      });
    });
    this.randomNumber = this.random(0,6);
    console.log(this.randomNumber);

  }

  public isTestStart(): void {
    this.start = !this.start;
    console.log(this.wordArray);
    this.sliceArray();
    this.selectQuestion();

  }

  public random(min, max): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public sliceArray(): any {
     this.questionArray = this.wordArray.slice(this.randomNumber,this.randomNumber+6);
     console.log(this.questionArray);
  }

  public selectQuestion(): any {
    this.answerObj = this.questionArray.slice(this.randomNumber,this.randomNumber+1);
    console.log(this.answerObj);
  }

  public selectAnswer(word: Word): void {
    this.selectedAnswer = word;
    console.log(this.selectAnswer(word));
  }

}
