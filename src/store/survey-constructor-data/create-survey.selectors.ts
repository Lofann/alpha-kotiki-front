import { State } from "../../types/state";
import { NameSpace } from "../../const";
import SurveyCards from "../../types/survey-cards";
import { Answers } from "../../types/answers";
import { SurveyCard } from "../../types/survey-card";
import { Survey } from "../../types/survey";

// export const setSurveyData = (state: Pick<State, NameSpace.Creating>):Survey|undefined => state[NameSpace.Creating].selector

// export const setNameSurvey = (state: Pick<State, NameSpace.Creating>):string => state[NameSpace.Creating].Name

// export const setDescriptionSurvey = (state: Pick<State, NameSpace.Creating>):string => state[NameSpace.Creating].Description

// export const setPriceSurvey = (state: Pick<State, NameSpace.Creating>):number => state[NameSpace.Creating].Price

// export const setIsLimitedPublicationTimeSurvey = (state: Pick<State, NameSpace.Creating>):boolean => state[NameSpace.Creating].IsLimitedPublicationTime

// export const setPublicationTimeLimitSurvey = (state: Pick<State, NameSpace.Creating>):Date|undefined => state[NameSpace.Creating].PublicationTimeLimit

// export const setUsagesLimitSurvey = (state: Pick<State, NameSpace.Creating>):number => state[NameSpace.Creating].UsagesLimit

// export const setIsLimitedCompletionTimeSurvey = (state: Pick<State, NameSpace.Creating>):number => state[NameSpace.Creating].IsLimitedCompletionTime

// export const setCompletionTimeLimitSurvey = (state: Pick<State, NameSpace.Creating>):number => state[NameSpace.Creating].CompletionTimeLimit

export const createNewSurvey = (state: Pick<State, NameSpace.Creating>):Survey => state[NameSpace.Creating].survey


//export const saveNewSurvey = createAction<Survey>('data/survey-constructor/saveSurvey')