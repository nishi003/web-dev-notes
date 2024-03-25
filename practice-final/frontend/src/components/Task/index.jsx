import './style.css';

// TODO: implement me

function Task(props) {
    const date = new Date(props.due_date);

    return <details>
        <summary>
            <h2>{props.title}</h2>
            <span>{date.toLocaleString()}</span>
        </summary>
        <div>
            <p>{props.detail}</p>
            <p><button className="btn">Complete</button></p>
            <p className="error"></p>
        </div>
    </details>;
}

export default Task;