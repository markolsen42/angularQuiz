import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../model/quiz'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }
  quiz: Quiz = new Quiz('Marks Quiz');
  ngOnInit() {
  }

}
