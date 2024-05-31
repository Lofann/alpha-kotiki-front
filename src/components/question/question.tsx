
import { FormEvent, useRef, useState } from "react"
import QuestionProps from "./question.props";

import { QuestionType } from "../../const";
import AnswerProps from "../answer/answer.props";
import {  PossibleAnswer } from "../../types/answer";
import DropDownListQuestion from "../questions/drop-down-list";
import { useAppDispatch } from "../../hooks/store";





export default function Question(questionData: QuestionProps) {

    const dispatch = useAppDispatch()
    

    const questionRef = useRef<HTMLInputElement>(null);
    //const answersRef = useRef<Array<HTMLInputElement>>(null);
    const [required, setRequired] = useState(false);
    const [questionType, setQuestionType] = useState(QuestionType.Text)
    const [answers, setAnwsers] = useState(Array<PossibleAnswer>);
    
    const addNewAnswer = (answer: PossibleAnswer) =>{
        let answersArray = Object.assign([], answers);
        answersArray.push(answer)
        setAnwsers(answersArray);
    }   

    const deleteAnswer = (id: number) =>{
        setAnwsers(answers.filter((answer)=> answer.id != id));
    }

    return (
        <>
            <div className="question">
                <div className="question-number">Вопрос {questionData.id} </div>
                <input className="question-title" type="text" placeholder="Текст Вопроса" />
                <div className="answers-list">

                    {
                    answers.map(answer =>
                                <input value = {answer.Value}
                                       className="question-title"
                                       type ={ questionData.type}
                                      ></input>)}


                    <div className="answer adding">
                        <div className="answer-add" onClick={()=>addNewAnswer({Type:questionType, Value:'', id: answers.length})}>Добавить ответ</div>
                        или
                        <div className="answer-add-another">Добавить вариант "Другое"</div>
                    </div>
                </div>
                <hr />



                <div className="question-settings">
                     {/* <DropDownListQuestion currentAnswers={survey.questions[questionNumber].variables} currentQuestionId={survey.questions[questionNumber].id}/> */}

                    <div className="right-settings">
                        <div className="switch-box">
                            <label className="switch">
                                <input type="checkbox" checked={questionData.isRequired}/>
                                <span className="slider round"></span>
                            </label>
                            <label>Обязательный</label>
                        </div>

                        <i className="icon-copy"></i>
                        <i className="icon-settings"></i>
                        <i className="vertical-line"></i>
                        <i className="icon-trash"></i>
                    </div>
                </div>
            </div>
        </>
    )
}