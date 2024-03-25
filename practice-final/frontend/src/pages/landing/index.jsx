import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Task from '../../components/Task';
import { ajax_or_login } from "../../ajax";
import './style.css';

function Landing() {
    const navigate = useNavigate();
    const [ params, ] = useSearchParams();
    const [ tasks, setTasks ] = useState([]);
    const open_task = parseInt(params.get('open'));

    useEffect(() => {
        ajax_or_login("/task/", {}, navigate)
        .then(response => response.json())
        .then(json => setTasks(json))
    }, [navigate]);

    const complete = (task_id, completed) => {
        setTasks(tasks.map(task => {
            if (task.id === task_id) {
                task.completed = completed;
            }
            return task;
        }));
    }

    return <>
        <h1>View Tasks</h1>
        {tasks.map(task => <Task {...task} key={task.id} open={task.id === open_task} complete={complete} />)}
    </>;
}

export default Landing;