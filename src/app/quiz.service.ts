import { Injectable } from '@angular/core';
import {Quiz} from '../model/quiz'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class QuizService {

  endpoint: string = "https://cqpvoultfk.execute-api.us-east-1.amazonaws.com/dev/";
 //endpoint: string = "http://localhost:3000/"
 constructor(private http: HttpClient) { }
  getQuizes(topic: string): Observable<Quiz>{
    return this.http.get<Quiz>(this.endpoint + "getQuizByTopic/" + topic);
  }
}
