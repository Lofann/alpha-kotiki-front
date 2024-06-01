import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CreateSurveyData, PassingSurveyData } from '../../types/state';
import { surveys } from '../../mocks/surveys';
import { deleteAnswer, deleteQuestion, pushAnswer, pushQuestion, saveNewSurvey, updateAnswer, updateQuestion, updateQuestions } from '../action';
import { randomUUID } from 'crypto';

const initialState: CreateSurveyData = {
    survey: {
        creatorId: "",
        name: "",
        description: "",
        price: 0,
        isLimitedPublicationTime: false,
        publicationTimeLimit: new Date(),
        usagesLimit: 0,
        isLimitedCompletionTime: true,
        completionTimeLimit: 0,
        questions: [{
            id: "0",
            name: "1",
            tooltip: "1",
            type: "1",
            isRequired: false,
            variablesAnswer:[]
        }]
    },
    question: [{
        id: "",
        name: "",
        tooltip: "",
        type: "",
        isRequired: false,
        variablesAnswer:[]
    }]
}



export const createSurveyData = createSlice({
    name: NameSpace.Creating,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(saveNewSurvey, (state, action) => {
                state.survey.creatorId = action.payload.creatorId
                state.survey.name = action.payload.name
                state.survey.description = action.payload.description
                state.survey.price = action.payload.price
                state.survey.isLimitedPublicationTime = action.payload.isLimitedPublicationTime
                state.survey.publicationTimeLimit = action.payload.publicationTimeLimit
                state.survey.usagesLimit = action.payload.usagesLimit
                state.survey.isLimitedCompletionTime = action.payload.isLimitedCompletionTime
                state.survey.completionTimeLimit = action.payload.completionTimeLimit
                state.survey.questions = action.payload.questions
            }).addCase(updateQuestions, (state, action) => {
                // state.question.id = action.payload.id
                // state.question.name = action.payload.name
                // state.question.tooltip = action.payload.tooltip
                // state.question.isRequired = action.payload.isRequired
                // state.question.variablesAnswer = action.payload.variablesAnswer
                state.survey.questions = action.payload})
                .addCase(pushQuestion, (state, action) => {
                    state.survey.questions.push(action.payload)
                }).addCase(deleteQuestion, (state, action) => {
                    // state.survey.questions.filter((question)=> question.id != action.payload);
                       state.survey.questions.splice(Number(action.payload),1) 

                }).addCase(deleteAnswer, (state, action) => {
                    state.survey.questions[Number(action.payload.questionId)].variablesAnswer.splice( Number(action.payload.id),1)
                }).addCase(pushAnswer, (state, action) =>  {
                    state.survey.questions[Number(action.payload.questionId)].variablesAnswer.push(action.payload.value)
                }).addCase(updateAnswer, (state, action) =>  {
                    state.survey.questions[Number(action.payload.questionId)].variablesAnswer[Number(action.payload.id)] = (action.payload.value)
                }).addCase(updateQuestion, (state, action) =>  {
                    state.survey.questions[Number(action.payload.id)] = (action.payload)
                })
                
                
                
        }
})