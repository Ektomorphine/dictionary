import { Component, OnInit } from '@angular/core';
import { WordService } from './../../services/word.service';
import { Word } from './../../models/word.model';

@Component({
  selector: 'app-test-page',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss']
})
export class TestPage {

  public start = false;
  public randomNumber: number;
  public wordArray: Word[] = []; // Parent array of words
  public qestionWordArray: Word[] = [];  // Array for questions, which one reduce with time
  public questionArray: Word[] = []; // 6 answers
  public answerObj: Word; //
  public selectedAnswer: Word;
  public countAnswers = 0;
  public indexOfCorrectWord = 0;

  constructor(public http: WordService) {}

  ngOnInit() {
   this.http.getWords() // get data from server
    .subscribe(data => {data.json().forEach(word => {
        this.wordArray.push(word);
      });
    });
    this.randomNumber = this.random(0, 6); // init random number [1..6] for selecting random word
  }

  public isTestStart(): void { // f for start test
    this.start = !this.start;
    this.qestionWordArray = this.wordArray.slice();
    this.sliceArray();
    this.selectQuestion();
  }

  public nextQuestion(): any { // func for next question
     if (this.selectedAnswer.id === this.answerObj.id) { // check for right answer
       this.countAnswers++;
     }
     this.indexOfCorrectWord = this.qestionWordArray.indexOf(this.answerObj); // set index of correct word
     this.qestionWordArray.splice(this.indexOfCorrectWord, 1); // delete word from array to escape repeating same question
     this.questionArray = [];
     this.randomNumber = this.random(0, 6); // new random number
     this.sliceArray();
     this.selectQuestion();

     if (this.qestionWordArray.length === 0) { // end of test and results
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
      const rand = this.wordArray[this.random(0, this.wordArray.length)];
      if (this.questionArray.indexOf(rand) === -1) {
        this.questionArray.push(rand);
        ++count;
      }
    }
  }

  public selectQuestion(): any {
    this.answerObj = this.questionArray.slice(this.randomNumber, this.randomNumber + 1)[0];
  }

  public selectAnswer(word: Word): any {
    this.selectedAnswer = word;
  }

}
