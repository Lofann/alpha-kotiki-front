import { State } from "../../types/state";
import { NameSpace } from "../../const";
import SurveyCards from "../../types/survey-cards";
import { Answers } from "../../types/answers";
import { SurveyCard } from "../../types/survey-card";

export const getSurveys = (state: Pick<State, NameSpace.Passing>): SurveyCards => state[NameSpace.Passing].surveys

export const getSurvey = (state: Pick<State, NameSpace.Passing>): SurveyCard | undefined => state[NameSpace.Passing].survey

export const getQuestionNumber = (state: Pick<State, NameSpace.Passing>): number => state[NameSpace.Passing].question

export const getAnswers = (state: Pick<State, NameSpace.Passing>): Answers => state[NameSpace.Passing].answers