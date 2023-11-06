import { Fragment } from "react"

const CreateSurveyPage = () => {
    return (
        <Fragment>
            <div className="page-container">
                <h1>Creatin a survey</h1>
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
                <div className="element-container">
                    <div className="question-settings">
                        <label className="settings-item">
                            Title <input name="title" defaultValue="title" />
                        </label>
                        <button className="settings-item">+img</button>
                        <div className="settings-item"> Тут тип выпадающая менюшка</div>
                        <label className='settings-item'>
                            A few from the list <input type='checkbox' />
                        </label>
                    </div>
                    <div className="questions">
                        <div className="question-item">
                            <input type="radio" disabled />
                            <textarea rows={1} cols={100} placeholder="answer"></textarea>
                        </div>
                        <div className="question-item">
                            <input type="radio" disabled />
                            <textarea rows={1} cols={100} placeholder="answer"></textarea>
                        </div>
                        <button>+</button>
                    </div>
                    <hr/>
                    <div className="question-settings">
                        <label className="settings-item" >
                            Mandatory question <input type="checkbox"/>
                        </label>
                        <button className="settings-item">Delete</button>
                    </div>
                </div>
                <div className="element-container">
                    <button>+</button>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateSurveyPage