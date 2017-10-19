import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import {CanDeactivate} from "@angular/router";


import { Word } from './../models/word.model';
import { HttpService } from './../service/service.component';
import { CanDeactivateGuard } from './../routing/exit.component';

import { Observable } from "rxjs/Rx";



@Component({
  selector: 'app-words-component',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  public saved = true;
  public word: Word = new Word();
  public addWordForm: FormGroup;

  constructor(public http: HttpService) {

    this.addWordForm  = new FormGroup ({
    "word": new FormControl("", Validators.required),
    "translation": new FormControl("", Validators.required),
    "transliteration": new FormControl("", Validators.required)
     });
  }

  ngOnInit() {
    this.addWordForm.valueChanges.subscribe(data => console.log(data));

  }

  public submit(object: Word): any {
    this.http.addWord(object)
             .subscribe((data)=> { this.word=data;});

  }

   canDeactivate(): boolean {
    console.log('i am navigating away');


    if (document.getElementsByClassName('ng-valid')) {
      console.log('Work guard');
      return window.confirm('Discard changes?');
    }

    return true;
}




}
