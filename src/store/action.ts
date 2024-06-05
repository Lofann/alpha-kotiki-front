import { createAction } from "@reduxjs/toolkit";
import { Answers } from "../types/answers";
import { SurveyCard } from "../types/survey-card";
import SurveyCards from "../types/survey-cards";

export const getSurveys = createAction<SurveyCards>('data/get-surveys');

export const setSurvey = createAction<SurveyCard>('data/set-survey')

export const changeQuestionNumber = createAction<number>('data/passing-survey/change-question-number');

export const resetQuestionNumber = createAction('data/passing-survey/reset-question-number');

export const resetAnswers = createAction('data/passing-survey/reset-answers')

export const updateAnswers = createAction<Answers>('data/passing-survey/update-answers')


export const saveNewSurvey = createAction<Survey>('data/survey-constructor/create-survey')

export const updateQuestions = createAction<Array<Question>>('data/survey-constructor/update-questions')

export const pushQuestion = createAction<Question>("data/survey-constructor/push-question")

export const deleteQuestion = createAction<String>("data/survey-constructor/delete-question")

export const updateQuestion = createAction<Question>('data/survey-constructor/update-question')



export const pushAnswer = createAction<PossibleAnswer>("data/survey-constructor/push-answer")

export const deleteAnswer = createAction<PossibleAnswer>("data/survey-constructor/delete-answer")

export const updateAnswer = createAction<PossibleAnswer>("data/survey-constructor/update-answer")


