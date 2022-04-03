export interface QuizItem{
    id          : number;
    quizId      : number;
    question    : string;
    choices     : Array<[]>;
    answer      : string;
}
