import { Component, OnInit } from '@angular/core';
import { WordService } from './../../services/word.service';
import { Word } from './../../models/word.model';

@Component({
  selector: 'app-test-page',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss']
})
export class TestPage {

  private wordsCopy: Word[] = [];  // Array for questions, which one reduce with time
  private questions: Word[] = []; // 6 answers
  private countAnswers = 0;
  public selectedAnswer: Word;
  public started = false;
  public words: Word[] = []; // Parent array of words
  public answerObj: Word; //
  public indexOfCorrectWord = 0;

  constructor(public _wordservice: WordService) {}

  ngOnInit() {
   this._wordservice.getWords() // get data from server
    .subscribe(data => {data.json().forEach(word => {
        this.words.push(word);
      });
    });
  }

  public testStart(): void { // f for start test// need for init 1st answerObj
    this.started = !this.started;
    this.wordsCopy = this.words.slice();
    this.sliceArray();
    this.selectQuestion();
  }

  public nextQuestion(): any { // func for next question
     if (this.selectedAnswer.id === this.answerObj.id) {
       this.countAnswers++;
     }
     this.indexOfCorrectWord = this.wordsCopy.indexOf(this.answerObj); // set index of correct word
     this.wordsCopy.splice(this.indexOfCorrectWord, 1); // delete word from array to escape repeating same question
     this.questions = [];
     this.sliceArray();
     this.selectQuestion();
     if (this.wordsCopy.length === 0) { // end of test and results
       alert('Correct answers = ' + this.countAnswers);
       location.reload();
     }
  }

  public random(min, max): number { // randomize func
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public sliceArray(): any { // func for getting 6 answer words
    let count = 0;
    while (count < 6) {
      const rand = this.words[this.random(0, this.words.length)];
      if (this.questions.indexOf(rand) === -1) {
        this.questions.push(rand);
        ++count;
      }
    }
  }

  public selectQuestion(): any {
    let randomNumber = this.random(0, 6);
    this.answerObj = this.questions.slice(randomNumber, randomNumber + 1)[0];
  }

  public selectAnswer(word: Word): any {
    this.selectedAnswer = word;
    this.nextQuestion();
  }

}
