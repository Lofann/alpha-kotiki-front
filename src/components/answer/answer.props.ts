// import { QuestionType } from "../../const"
import { Answer } from "../../types/answer"

type AnswerProps = {
    Type : string,
    Value: string,
    AnswerList: Array<Answer>
    deleteFunc: Function
}

export default AnswerProps