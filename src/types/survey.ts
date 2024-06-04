import { UUID } from "crypto"
import { Question } from "./question"

export type Survey = {
        creatorId: string,
        name: string,
        description: string,
        price: number,
        isLimitedPublicationTime: boolean,
        publicationTimeLimit: Date | null,
        usagesLimit: number,
        isLimitedCompletionTime: boolean,
        completionTimeLimit: number,
        questions: Array<Question>
}