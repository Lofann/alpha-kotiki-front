import { FormEvent, useState } from "react";
import AnswerProps from "./answer.props";
import { PossibleAnswer } from "../../types/answer";
import { useAppDispatch } from "../../hooks/store";
import { deleteAnswer, updateAnswer } from "../../store/action";
import { eventNames } from "process";


export default function Answer(props: PossibleAnswer):JSX.Element{
    
    const dispatch = useAppDispatch()

    const [value, setValue] = useState('')

    const handlerdeleteAnswer = (questionId:string, answerId: string)=>{
        dispatch(deleteAnswer({id:answerId, questionId:questionId,value:''}))
    }

    const handlerUpdateAnswer = (questionId:string, answerId: string, value:string)=>{
        dispatch(updateAnswer({
            id:answerId,
            questionId: questionId,
            value: value
        }))
    }


    return(
        <>
        <div className="answer">
            <span>{Number(props.id)+1}.</span>
        <input 
            onChange={e=>handlerUpdateAnswer(props.questionId,props.id,e.target.value)}
            defaultValue={props.value}
            className="answer emphasized"
            placeholder="Введите вариант ответа">
    

            </input>
        <button className = "answer-delete" onClick={()=>handlerdeleteAnswer(props.questionId, props.id)}>x</button>
    
        </div>

        {value}
        </>
        
    )


}