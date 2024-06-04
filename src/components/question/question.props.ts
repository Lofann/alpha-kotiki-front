import { PossibleAnswer } from "../../types/answer"

type Question = {

    id: string,
    name: string,
    tooltip?: string,
    //type: QuestionType,
    type:string
    isRequired: boolean,
    // variablesAnswer: Array<PossibleAnswer>,
    variablesAnswer:Array<string>
}

export default Question