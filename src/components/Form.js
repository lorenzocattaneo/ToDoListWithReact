import { useState } from 'react';
import './../index.css'

function Form(props) {

    const [toDo, setToDo] = useState({
        testo: '',
        completed: false
    });

    const formSubmit = (e) => {
        props.onFormSubmit(e, toDo)
        setToDo({ ...toDo, testo: '' })
    }

    return (
        <form className="form-component" onSubmit={(e) => formSubmit(e)}>
            <div className="form-header">
                <h1>To-Do List</h1>
            </div>
            <div className="text-input">
                <input type="text" placeholder="Write something..." class="text-center"
                    onChange={(e) => setToDo({ ...toDo, testo: e.target.value })} value={toDo.testo} />
            </div>
            <div className="form-button">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form