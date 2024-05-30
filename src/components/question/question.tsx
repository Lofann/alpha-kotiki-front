
import { FormEvent, useRef, useState } from "react"
import QuestionProps from "./question.props";

import { QuestionType } from "../../const";
import AnswerProps from "../answer/answer.props";
import {  PossibleAnswer } from "../../types/answer";





export default function Question({ }: QuestionProps) {

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
                <div className="question-number">Вопрос 1</div>
                <input className="question-title" type="text" placeholder="Текст Вопроса" />
                <div className="answers-list">

                    {
                    answers.map(answer =>
                                <input value = {answer.Value}
                                       className="question-title"
                                       type ={ answer.Type}
                                      ></input>)}


                    <div className="answer adding">
                        <div className="answer-add" onClick={()=>addNewAnswer({Type:questionType, Value:'', id: answers.length})}>Добавить ответ</div>
                        или
                        <div className="answer-add-another">Добавить вариант "Другое"</div>
                    </div>
                </div>
                <hr />



                <div className="question-settings">
                    <div className="category">
                        <select className="choice-question-type">
                            <option>Категория</option>
                            <option>Пункт 2</option>
                            <option>Пункт 2</option>
                        </select>
                    </div>

                    <div className="right-settings">
                        <div className="switch-box">
                            <label className="switch">
                                <input type="checkbox" />
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