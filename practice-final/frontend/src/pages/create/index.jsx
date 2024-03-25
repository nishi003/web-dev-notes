import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ajax_or_login } from "../../ajax";

function CreateTask() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    function handle_submit(event) {
        let data = new FormData(event.target);

        ajax_or_login("/task/", {
            method: "POST",
            body: data,
        }, navigate)
        .then(request => request.json())
        .then(json => {
            navigate("/?open=" + json.id);
        })
        .catch(error => {
            setError(error);
        });
        
        event.preventDefault();
    }

    return <>
        <h1>Create Task</h1>
        <form id="create-task" onSubmit={handle_submit}>
            <label htmlFor="title">Title: </label>
            <input name="title" type="text" id="title" required placeholder="E.g., 'file my taxes for 2023'" />
            <label htmlFor="due_date">Due Date: </label>
            <input name="due_date" type="datetime-local" id="due_date" required />
            <label htmlFor="detail">Detail: </label>
            <textarea name="detail" id="detail" required placeholder="E.g., 'Need to get my T2202 forms from the University'" />
            <div className="offset-1">
                <button className="btn" type="submit">Create</button>
            </div>
            <p className="error">{error}</p>
        </form>
    </>;
}

export default CreateTask;