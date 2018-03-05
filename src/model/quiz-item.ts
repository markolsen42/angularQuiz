export class AnswerOption{
    constructor(public label: string, public possibleAnswer: string){

    }
}

export class QuizItem{
    constructor(public id: string, private question: string, public answerOptions: AnswerOption[]){       
    }
}