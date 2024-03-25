import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ajax } from '../../ajax';
import './style.css';

function Login() {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handle_submit(event) {
        let data = new FormData(event.target);

        ajax("/account/login/", {
            method: "POST",
            body: data,
        })
        .then(request => request.json())
        .then(json => {
            if ('access' in json) {
                localStorage.setItem('access', json.access);
                localStorage.setItem('username', data.get('username'));
                navigate('/');
            }
            else if ('detail' in json) {
                setError(json.detail);
            }
            else {
                setError("Unknown error while signing in.")
            }
        })
        .catch(error => {
            setError(error);
        });

        event.preventDefault();
    }

    return <form id="login" onSubmit={handle_submit}>
        <h2>Please enter your login information</h2>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" required  />
        <div className="offset-1">
            <button className="btn" type="submit">Login</button>
        </div>
        <p className="error">{error}</p>
    </form>;
}

export default Login;
