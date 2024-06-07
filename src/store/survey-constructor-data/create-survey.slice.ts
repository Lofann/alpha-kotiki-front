import { NameSpace } from "../../const";
import { CreateSurveyData } from "../../types/state";
import { createSlice } from '@reduxjs/toolkit';
import { deleteAnswer, deleteQuestion, pushAnswer, pushQuestion, saveNewSurvey, updateAnswer, updateQuestion, updateQuestions } from "../action";
import { postNewSurvey } from "../api-action";

const initialState: CreateSurveyData = {
    survey: {
        
        creatorId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: '',
        description: '',
        price: 0,
        
        isLimitedPublicationTime: true,
        publicationTimeLimit:  undefined,
    
        isLimitedUsages: false,
        usagesLimit:0,
    
        isLimitedCompletionTime: false,
        completionTimeLimit: 0,
    
    },
    questions: []
}

export const createSurveyData = createSlice({
    name: NameSpace.Creating,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(saveNewSurvey, (state, action) => {
                state.survey = action.payload
            })
            .addCase(pushQuestion, (state, action) => {
                state.questions.push(action.payload)
            })
            .addCase(updateQuestions, (state, action) => {
                state.questions = action.payload
            })
            .addCase(deleteQuestion, (state, action) => {
                // state.survey.questions.filter((question)=> question.id != action.payload);
                state.questions.splice(Number(action.payload), 1)
            })
            .addCase(deleteAnswer, (state, action) => {
                state.questions[Number(action.payload.questionId)].variables.splice(Number(action.payload.id), 1)
            }).addCase(pushAnswer, (state, action) => {
                state.questions[Number(action.payload.questionId)].variables.push(action.payload.value)
            }).addCase(updateAnswer, (state, action) => {
                state.questions[Number(action.payload.questionId)].variables[Number(action.payload.id)] = (action.payload.value)
            }).addCase(updateQuestion, (state, action) => {
                state.questions[Number(action.payload.id)] = (action.payload)
            })
            //  .addCase(postNewSurvey.fulfilled, (state, action) => {
            //      action.meta.arg.fullSurveyPost = {survey: state.survey, questions: state.questions}
            //   })

    }
})