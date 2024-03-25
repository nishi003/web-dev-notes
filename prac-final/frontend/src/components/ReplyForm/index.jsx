import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ajax_or_login } from "../../ajax";
import './style.css';

function ReplyForm(props) {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    function handle_submit(event) {
        let data = new FormData(event.target);

        ajax_or_login(`/topic/${props.topicId}/reply/`, {
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
            props.addReply({
                user : {
                    username : localStorage.getItem("username"),
                },
                create_time : (new Date()).toLocaleString(),
                text : data.get("text"),
            });
            event.target.reset();
        })
        .catch(error => {
            setError(error.toString());
        });
        
        event.preventDefault();
    }

    return <>
        <form id="reply-form" onSubmit={handle_submit}>
            <input type="hidden" value={props.topicId} />
            <textarea name="text" required rows="8" />
            <div>
                <button className="btn" type="submit">Reply</button>
            </div>
            <p className="error">{error}</p>
        </form>
    </>;
}

export default ReplyForm;