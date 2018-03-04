import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../model/quiz'
import {MockQuiz} from './mock-quiz'
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
  quizes: Quiz[];
  ngOnInit() {
    this.quizService.getQuizes("maths")
    .subscribe((quizes:any) => {

      console.log(quizes[0]);
      this.quiz = new Quiz(quizes[0].name);
      quizes.foreach(quiz =>{
        quiz.questions.foreach((question)=>{
          answerOption: AnswerOption = new AnswerOption();
        })
        let quizItem: QuizItem = new QuizItem()
        
      })
    });
  }

}
