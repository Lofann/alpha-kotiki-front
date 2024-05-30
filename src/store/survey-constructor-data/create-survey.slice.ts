import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CreateSurveyData, PassingSurveyData } from '../../types/state';
import { surveys } from '../../mocks/surveys';
import {  saveNewSurvey, setCompletionTimeLimitTimeSurvey, setDescriptionSurvey, setIsLimitedCompletionTimeSurvey, setIsLimitedPublicationTimeSurvey, setNameSurvey, setPriceSurvey, setPublicationTimeLimitSurvey, setUsagesLimitSurvey,  } from '../action';
import { randomUUID } from 'crypto';

const initialState: CreateSurveyData = {
    CreatorId: "",
    Name: "",
    Description: "",
    Price: 0,
    IsLimitedPublicationTime: false,
    PublicationTimeLimit: undefined,
    UsagesLimit: 0,
    IsLimitedCompletionTime: 0,
    CompletionTimeLimit: 0,
    Questions: []
}


export const createSurveyData =  createSlice({
    name: NameSpace.Creating,
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(setNameSurvey, (state, action) =>{
            state.Name = action.payload
        })
        .addCase(setDescriptionSurvey, (state, action) =>{
            state.Description = action.payload
        })
        .addCase(setPriceSurvey, (state, action) =>{
            state.Price = action.payload
        })
        .addCase(setIsLimitedPublicationTimeSurvey, (state, action) =>{
            state.IsLimitedPublicationTime = action.payload
        })
        .addCase(setPublicationTimeLimitSurvey, (state, action) =>{
            state.PublicationTimeLimit = action.payload
        })
        .addCase(setUsagesLimitSurvey, (state, action) =>{
            state.UsagesLimit = action.payload
        })
        .addCase(setIsLimitedCompletionTimeSurvey, (state, action) =>{
            state.IsLimitedCompletionTime = action.payload
        })
        .addCase(setCompletionTimeLimitTimeSurvey, (state, action) =>{
            state.CompletionTimeLimit = action.payload
        })
    }
})