
import { FormEvent, useRef, useState } from "react"
// import QuestionProps from "./question.props";

// import { QuestionType } from "../../const";
import {  } from "../../types/answer";
import DropDownListQuestion from "../questions/drop-down-list";
import { useAppDispatch } from "../../hooks/store";

import { Question as QuestionType } from "../../types/question";
import { deleteQuestion, pushAnswer, deleteAnswer, updateQuestion } from "../../store/action";
import Answer from "../answer/answer";
import { PossibleAnswerProps } from "../answer/answer.props";
import { QuestionPost } from "../../types/question-post";
import { QuestionPostProps } from "./question.props";


export default function Question({id,
    name,
    tooltip,
    type,
    isRequired,
    variables: variablesAnswer }: QuestionPostProps) {

    const dispatch = useAppDispatch()


    const questionTypeRef = useRef<HTMLSelectElement>(null);
    //const answersRef = useRef<Array<HTMLInputElement>>(null);
    const [required, setRequired] = useState(false);
    const [questionType, setQuestionType] = useState()
    const [answers, setAnwsers] = useState(Array<PossibleAnswerProps>);

    // const addNewAnswer = (answer: PossibleAnswer) => {
    //     let answersArray = Object.assign([], answers);
    //     answersArray.push(answer)
    //     setAnwsers(answersArray);
    // }

    // const deleteAnswer = (QuestionID: string,AnswerID:string) => {
    //     dispatch(deleteAnswer())
    // }

    const handleDeleteQuestion = (id: number) => {
        dispatch(deleteQuestion(id))
    }

    const addAnswer = (questionId: number, answerId: number) => {
        dispatch(pushAnswer({ id: answerId, questionId: questionId, value: "" }))
    }

    const handlerUpdateQuestion = (

        update_name: string = name,
        update_type: string = type,
        update_isRequired: boolean = isRequired,
    ) => {
        dispatch(updateQuestion({
            id:id,
            name: update_name,
            type: update_type,
            isRequired: update_isRequired,
            variables: variablesAnswer,
            
        }))
    }

    // const selectType = () => {
    //     console.log( questionTypeRef.current?.value)
    // }

    return (
        <>
            <div className="question">
                <div className="question-number">Вопрос {id + 1} </div>
                <input onChange={e=>{handlerUpdateQuestion(name = e.target.value)}} className="question-title" type="text" placeholder="Текст Вопроса" defaultValue={name} />
                <div className="answers-list">


                    {variablesAnswer.map((answer, index) =>
                        <Answer value={answer}
                            id={index}
                            questionId={id}

                        />)}

                    <div className="answer adding">
                        <button className="answer-add" onClick={() => addAnswer(id, variablesAnswer.length)}>Добавить ответ</button>
                        {/* или
                        <div className="answer-add-another">Добавить вариант "Другое"</div> */}
                    </div>
                </div>
                <hr />



                <div className="question-settings">
                    {/* <DropDownListQuestion currentAnswers={survey.questions[questionNumber].variables} currentQuestionId={survey.questions[questionNumber].id}/> */}
                    <div className="right-settings">
                    <div className="category">
              <select className="choice-question-type" ref={questionTypeRef} onInput={e=>{handlerUpdateQuestion(name,questionTypeRef.current?.value)}}>
                <option>Checkbox</option>
                <option>RadioButton</option>
                <option>DropDownList</option>
              </select>
            </div>
            
                        <div className="switch-box">
                            <label className="switch">
                                <input type="checkbox" onClick={e=>{handlerUpdateQuestion(name,type, !isRequired)}} checked={isRequired} />
                                <span className="slider round"></span>
                            </label>
                            <label>Обязательный</label>
                        </div>
                    </div>
                    <div className="right-settings">


                        {/* <i className="icon-copy"></i>
                        <i className="icon-settings"></i> */}
                        {/* <i className="vertical-line"></i> */}

                        <button className="answer-delete" onClick={() => handleDeleteQuestion(id)}><i className="icon-trash"></i></button>

                    </div>
                </div>
            </div>
        </>
    )
}