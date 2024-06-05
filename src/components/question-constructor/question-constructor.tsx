import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import Question from "../question/question";
import QuestionConstructorProps from "./question-constructor.props";
import { Question as QuestionType } from "../../types/question";
import { getQuestions } from "../../store/survey-constructor-data/create-survey.selectors";
import { pushQuestion } from "../../store/action";

export default function QuestionConstructor(): JSX.Element {
    const dispatch = useAppDispatch()

    const questions = useAppSelector(getQuestions)
    // const [questions, setQuestuions] = useState<Array<QuestionType>>()



    const handleCompliteButtonClick = (evt: FormEvent<HTMLButtonElement>) => {
        evt.preventDefault()


    }

    const handleDeleteQuestion = (evt: FormEvent<HTMLButtonElement>) => {
        evt.preventDefault()

    }
    const handleAddQuestion = (id: string) => {
        dispatch(pushQuestion({
            id: id,
            name: id,
            tooltip: "",
            type: "",
            isRequired: false,
            variables: []
        }))
    }

    const getQuestionData = () => {

        console.log(questions)

        return
    }

    return (
        <>
            <div className="question add">

                {questions?.map((question, index) => (<Question
                    id={String(index)}
                    name={question.name}
                    type={question.type}
                    isRequired={question.isRequired}
                    variables={question.variables}
                />
                ))}
                <button className="add-btn" onClick={() => handleAddQuestion(String(questions?.length))}>+</button>

            </div>
        </>
    )
}

