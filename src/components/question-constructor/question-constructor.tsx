import QuestionConstructorProps from "./question-constructor.props";

export default function QuestionConstructor({ }: QuestionConstructorProps): JSX.Element {
    return (
            <>
            <div className="question">
            <div className="question-number">Вопрос 1</div>
            <input className="question-title" type="text" placeholder="Текст Вопроса" />
            <div className="answers-list">

                <div className="answer">
                    <input className="answer-type" type="checkbox" />
                    <input className="answer-text" type="text" placeholder="Вопрос" />
                    <button className="answer-delete">x</button>
                </div>

                <div className="answer">
                    <input className="answer-type" type="checkbox" />
                    <input className="answer-text" type="text" placeholder="Вопрос" />
                    <button className="answer-delete">x</button>
                </div>

                <div className="answer">
                    <input className="answer-type" type="checkbox" />
                    <input className="answer-text" type="text" placeholder="Вопрос" />
                    <button className="answer-delete">x</button>
                </div>
                <div className="answer adding">
                    <div className="answer-add">Добавить ответ</div>
                    или
                    <div className="answer-add-another">Добавить вариант "Другое"</div>
                </div>
            </div>
            <hr/>
                <div className="question-settings">
                    <div className="category">
                        <select className="choice-question-type">
                            <option>Категория</option>
                            <option>Пункт 2</option>
                            <option>Пункт 2</option>
                        </select>
                    </div>

                    <div className="right-settings">
                        <div className="switch-box">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <label>Обязательный</label>
                        </div>

                        <i className="icon-copy"></i>
                        <i className="icon-settings"></i>
                        <i className="vertical-line"></i>
                        <i className="icon-trash"></i>
                    </div>
                </div>
                </div>
            </>
            )
}

