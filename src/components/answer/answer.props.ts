import { QuestionType } from "../../const"
import { Answer } from "../../types/answer"

type AnswerProps = {
    Type : QuestionType,
    Value: string,
    AnswerList: Array<Answer>
    deleteFunc: Function
}

export default AnswerProps