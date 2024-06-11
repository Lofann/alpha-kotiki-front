import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import Question from '../question/question'
import QuestionConstructorProps from "./question-constructor.props";
import { Question as QuestionType } from "../../types/question";
import { getCreatingSurvey, getSurveyQuestions, } from "../../store/survey-constructor-data/create-survey.selector";
import { pushQuestion } from "../../store/action";
// import { getQuestions } from "../../store/survey-constructor-data/create-survey.selectors";
// import { pushQuestion } from "../../store/action";

export default function QuestionConstructor(): JSX.Element {
    const dispatch = useAppDispatch()

    const questions = useAppSelector(getSurveyQuestions)
    // const [questions, setQuestuions] = useState<Array<QuestionType>>()



    const handleCompliteButtonClick = (evt: FormEvent<HTMLButtonElement>) => {
        evt.preventDefault()


    }

    const handleDeleteQuestion = (evt: FormEvent<HTMLButtonElement>) => {
        evt.preventDefault()

    }
    const handleAddQuestion = (id: number) => {
        dispatch(pushQuestion({
            name: '',
            tooltip: "",
            type: "",
            isRequired: false,
            variables: [],

        }))
    }

    const getQuestionData = () => {

        console.log(questions)

    }


    return (
        <>
            <div className="question-list">

                <div className="answers-list">

                    {questions?.map((question, index) => (<Question
                        id={index}
                        name={question.name}
                        type={question.type}
                        isRequired={question.isRequired}
                        variables={question.variables}
                    />
                    ))}
                    <div>
                        <button className="add-btn" onClick={() => handleAddQuestion(questions === undefined ? 0 : questions.length)}>+</button>
                    </div>

                </div>
            </div>
        </>
    )

}
