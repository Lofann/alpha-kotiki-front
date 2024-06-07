export type SurveyPost = {
    creatorId: string,
    name: string,
    description: string,
    price: number,
    
    isLimitedPublicationTime: boolean,
    publicationTimeLimit:  undefined | string,

    isLimitedUsages: boolean,
    usagesLimit: number,

    isLimitedCompletionTime: boolean,
    completionTimeLimit: number,

}
