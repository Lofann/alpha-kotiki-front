import { NameSpace } from "../../const";
import { FullSurveyPost } from "../../types/full-servey-post";
import { QuestionPost } from "../../types/question-post";
import { State } from "../../types/state";
import { SurveyPost } from "../../types/survey-post";

export const getCreatingSurvey = (state: Pick<State, NameSpace.Creating>):SurveyPost|undefined => state[NameSpace.Creating].survey
export const getSurveyQuestions = (state: Pick<State, NameSpace.Creating>):QuestionPost[]|undefined => state[NameSpace.Creating].questions
