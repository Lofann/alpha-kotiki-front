import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CreateSurveyData, PassingSurveyData } from '../../types/state';
import { surveys } from '../../mocks/surveys';
import { saveNewSurvey, updateQuestions } from '../action';
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
        questions: []
    },
    question: {
        id: "",
        name: "",
        tooltip: "",

        type: "",
        isRequired: false,

        variablesAnswer:[]
    }
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



        // .addCase(setDescriptionSurvey, (state, action) =>{
        //     state.description = action.payload
        // })
        // .addCase(setPriceSurvey, (state, action) =>{
        //     state.price = action.payload
        // })
        // .addCase(setIsLimitedPublicationTimeSurvey, (state, action) =>{
        //     state.isLimitedPublicationTime = action.payload
        // })
        // .addCase(setPublicationTimeLimitSurvey, (state, action) =>{
        //     state.publicationTimeLimit = action.payload
        // })
        // .addCase(setUsagesLimitSurvey, (state, action) =>{
        //     state.usagesLimit = action.payload
        // })
        // .addCase(setIsLimitedCompletionTimeSurvey, (state, action) =>{
        //     state.isLimitedCompletionTime = action.payload
        // })
        // .addCase(setCompletionTimeLimitSurvey, (state, action) =>{
        //     state.completionTimeLimit = action.payload
        // })
        }})