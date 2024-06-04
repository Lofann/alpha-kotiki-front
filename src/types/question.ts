import { PossibleAnswer } from "./answer"

//Тип вопроса
export type Question = {
  id: string,
  name: string,
  tooltip?: string,
  //type: QuestionType,
  type:string
  isRequired: boolean,
  //variables: Array<PossibleAnswer>,
  variables:Array<string>
}