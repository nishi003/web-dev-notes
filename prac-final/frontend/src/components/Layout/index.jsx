import { useNavigate, Outlet, Link } from "react-router-dom";
import './style.css';

function Layout() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    if (username === null) {
        navigate('/login/');
    }

    const logout = () => {
        localStorage.clear();
        navigate('/login/');
    };

    return <>
        <header>
            <nav>
                <p>CSC309 Final</p>
                <Link className="link" to="/">View Topics</Link>
                <Link className="link" to="/topic/create/">Create Topic</Link>
            </nav>
            <div>
                <p>Hello, {username}</p>
                <button className="link" onClick={logout}>Logout</button>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </>;
}

export default Layout;