import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ajax_or_login } from "../../ajax";
import './style.css';

function CreateTask() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    function handle_submit(event) {
        let data = new FormData(event.target);

        ajax_or_login("/topic/", {
            method: "POST",
            body: data,
        }, navigate)
        .then(response => { 
            if (response.ok) {
                return response.json();
            }
            else {
                throw Error(response.statusText);
            }
        })
        .then(json => {
            navigate(`/topic/${json.id}/`);
        })
        .catch(error => {
            setError(error.toString());
        });
        
        event.preventDefault();
    }

    return <>
        <h1>Create Topic</h1>
        <form id="create-topic" onSubmit={handle_submit}>
            <label htmlFor="title">Title: </label>
            <input name="title" type="text" id="title" required />
            <label htmlFor="detail">Body: </label>
            <textarea name="text" id="detail" required rows="10" />
            <div className="offset-1">
                <button className="btn" type="submit">Create</button>
            </div>
            <p className="error">{error}</p>
        </form>
    </>;
}

export default CreateTask;