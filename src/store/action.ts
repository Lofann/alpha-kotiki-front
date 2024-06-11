import { createAction } from "@reduxjs/toolkit";
import { Answers } from "../types/answers";
import { SurveyCard } from "../types/survey-card";
import SurveyCards from "../types/survey-cards";
import { SurveyPost } from "../types/survey-post";
import { QuestionPost } from "../types/question-post";
import { PossibleAnswerProps } from "../components/answer/answer.props";
import { QuestionPostProps } from "../components/question/question.props";

export const getSurveys = createAction<SurveyCards>('data/get-surveys');

export const setSurvey = createAction<SurveyCard>('data/set-survey')

export const changeQuestionNumber = createAction<number>('data/passing-survey/change-question-number');

export const resetQuestionNumber = createAction('data/passing-survey/reset-question-number');

export const resetAnswers = createAction('data/passing-survey/reset-answers')

export const updateAnswers = createAction<Answers>('data/passing-survey/update-answers')


export const saveNewSurvey = createAction<SurveyPost>('data/survey-constructor/create-survey')

export const updateQuestions = createAction<Array<QuestionPost>>('data/survey-constructor/update-questions')

export const pushQuestion = createAction<QuestionPost>("data/survey-constructor/push-question")

export const deleteQuestion = createAction<Number>("data/survey-constructor/delete-question")

export const updateQuestion = createAction<QuestionPostProps>('data/survey-constructor/update-question')



export const pushAnswer = createAction<PossibleAnswerProps>("data/survey-constructor/push-answer")

export const deleteAnswer = createAction<PossibleAnswerProps>("data/survey-constructor/delete-answer")

export const updateAnswer = createAction<PossibleAnswerProps>("data/survey-constructor/update-answer")



