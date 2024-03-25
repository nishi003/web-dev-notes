/*
 * Reply component
 */

function Reply(props) {
    return <>
        <span>Reply from <i className="username">{props.user.username}</i></span>
        <span className="date-time">
            {(new Date(props.create_time)).toLocaleString()}
        </span>
        <div>{props.text}</div>
    </>;
}

export default Reply;