import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../model/quiz'
import {QuizService} from '../quiz.service';
import {QuizItem,AnswerOption} from '../../model/quiz-item'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService) { }
  quiz: Quiz;
  displayQuiz() {return JSON.stringify(this.quiz); }
  ngOnInit() {
    this.quizService.getQuizes("maths")
    .subscribe((quiz:any) => {
      console.log(JSON.stringify(quiz));
        this.quiz = quiz;
      });
  }


}
