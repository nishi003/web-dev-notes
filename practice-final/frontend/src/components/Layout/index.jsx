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
                <p>TODO List</p>
                <Link class="link" to="/">View All</Link>
                <Link class="link" to="/create/">Create</Link>
            </nav>
            <div>
                <p>Hello, {username}</p>
                <button class="link" onClick={logout}>Logout</button>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </>;
}

export default Layout;