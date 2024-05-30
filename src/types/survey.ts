import { UUID } from "crypto"
import { Question } from "./question"

export type Survey = {
        CreatorId: String,
        Name: string,
        Description: string,
        Price: number,
        IsLimitedPublicationTime: boolean,
        PublicationTimeLimit: Date,
        UsagesLimit: number,
        IsLimitedCompletionTime: number,
        CompletionTimeLimit: number,
        Questions: Array<Question>
}