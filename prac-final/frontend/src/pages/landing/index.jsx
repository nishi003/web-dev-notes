import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { ajax_or_login } from '../../ajax';

/* TODO: complete me */
function Landing() {
    const [currentPage, setCurrentPage] = useState(1);
    const [topics, setTopics] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const limit = 6;
                const offset = (currentPage - 1) * limit;
                const res = await ajax_or_login(`/topic/?limit=${limit}&offset=${offset}`, {}, navigate);

                if (res.ok) {
                    const data = await res.json();
                    setTotalPages(Math.ceil(data.count / limit));
                    setTopics(data.results);
                } else {
                    console.log("Res not ok: ", res);
                }

            } catch (error) {
                console.log("Error during fetch: ", error);
            }
        }
        fetchData();
    }, [navigate, currentPage])

    console.log(totalPages);

    return <>
        <h1>UToronto Forum</h1>
        <table id="forum">
            <thead>
                <tr>
                    <th>Topic</th>
                    <th>Author</th>
                    <th>Replies</th>
                    <th>Last Active</th>
                </tr>
            </thead>
            <tbody>
                {topics && topics.map(topic => {
                    return (
                        <tr key={topic.id} onClick={() => navigate(`/topic/${topic.id}/`)}>
                            <td className='topic'>{topic.title}</td>
                            <td className='author'>{topic.user.username}</td>
                            <td className='replies'>{topic.num_replies}</td>
                            <td className='last_active'>{(new Date(topic.last_active)).toLocaleString()}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        {/* TODO: fix me */}
        <ul className="pagination">
            {currentPage > 1 && <li onClick={() => setCurrentPage(currentPage - 1)}>&lt;</li>}
            {[...Array(totalPages).keys()].map(page => {
                page += 1;
                if (page === currentPage) {
                    return <li className="active">{page}</li>
                } else {
                    return <li onClick={() => setCurrentPage(page)}>{page}</li>
                }
            })}
            {currentPage < totalPages && <li onClick={() => setCurrentPage(currentPage + 1)}>&gt;</li>}
        </ul>
    </>;
}

export default Landing;