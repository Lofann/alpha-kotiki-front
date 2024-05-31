import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import Question from "../question/question";
import QuestionConstructorProps from "./question-constructor.props";
import { Question as QuestionType } from "../../types/question";
import { getQuestions } from "../../store/survey-constructor-data/create-survey.selectors";

export default function QuestionConstructor({ }: QuestionConstructorProps): JSX.Element {
    const dispatch = useAppDispatch()

    const questions = useAppSelector(getQuestions)
    // const [questions, setQuestuions] = useState<Array<QuestionType>>()


    
    const handleCompliteButtonClick = (evt: FormEvent<HTMLButtonElement>) =>{
        evt.preventDefault() 

        
    }

    const handleDeleteQuestion = (evt: FormEvent<HTMLButtonElement> )=>{
        evt.preventDefault() 

    }
    const handleAddQuestion = (evt: FormEvent<HTMLButtonElement>)=>{
        evt.preventDefault()


    }
    
    return (
        <>
            <div className="question">
        
            {
                questions?.map((question, index)=><Question
                    id={question.id = '' + index}
                    name={question.name}
                    type={question.type}
                    isRequired={question.isRequired}
                    variablesAnswer={question.variablesAnswer}            
                />)
            }

            <button onClick={handleAddQuestion}>+</button>
            
            </div>
        </>
    )
}

