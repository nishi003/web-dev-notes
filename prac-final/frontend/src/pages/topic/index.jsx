import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ajax_or_login } from "../../ajax";
import Reply from "../../components/Reply";
import ReplyForm from "../../components/ReplyForm";
import './style.css';

function Topic() {
    const navigate = useNavigate();
    const { topicId } = useParams();
    const [error, setError] = useState("");
    const [topic, setTopic] = useState({
        user: { username: "" },
        last_active: "",
        text: "",
        replies: [],
    });

    useEffect(() => {
        ajax_or_login(`/topic/${topicId}/`, {}, navigate)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw Error(response.statusText);
                }
            })
            .then(json => setTopic(json))
            .catch(error => setError(error.toString()));
    }, [navigate, topicId]);

    const add_reply = (reply) => {
        setTopic({
            ...topic,
            replies: [...topic.replies, reply],
        });
    };

    return <>
        <h2 className="topic-title">{topic.title}</h2>
        <div id="my-topic">
            <span>Posted by <i className="username">{topic.user.username}</i></span>
            <span className="date-time">
                {(new Date(topic.last_active)).toLocaleString()}
            </span>
            <div>{topic.text}</div>
            {topic.replies.map(reply => <Reply {...reply} key={reply.id} />)}
            <p className="error">{error}</p>
        </div>
        <ReplyForm topicId={topic.id} addReply={add_reply} />
    </>;
}

export default Topic;