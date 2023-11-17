import { Fragment } from "react"
import { useForm } from "react-hook-form"

enum QuestionTypes{

}

type Question = {
    title:string;
    type: QuestionTypes;
    answers: Array<String>;
    img?: string 
    mandatory: boolean;
}

type FormState = {
    title: string;
    discription?: string;
    quesions: Array<Question>
}





const constructorElement: React.FC<FormState> = (): JSX.Element => {

    return (
        <>
            <div className="element-container">
                <form>
                    <label>
                        Title <input name="title" defaultValue="title" />
                    </label>
                    <hr />
                    <p>Discription</p>
                    <textarea rows={10} cols={50} placeholder="Discription">
                    </textarea>
                </form>
            </div>

        </>
    )
}

export default constructorElement