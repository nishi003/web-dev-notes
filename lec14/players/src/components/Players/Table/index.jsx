import { useContext } from 'react';
import './style.css';
import { APIContext } from '../../../contexts/APIContext';

function Table() {
    const { players } = useContext(APIContext);
    return <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Height</th>
                <th>Team</th>
            </tr>
        </thead>
        <tbody>
            {players && players.map(player => (
                // you need a key whenever generating JSX elements through a loop
                <tr key={player.id}>
                    <td>{player.first_name}</td>
                    <td>{player.last_name}</td>
                    <td>{player.position}</td>
                    <td>{player.height_feet ?
                        `${player.height_feet}' ${player.height_inches}"`
                        : ''}
                    </td>
                    <td>{player.team.name}</td>
                </tr>
            ))}
        </tbody>
    </table>;
}

export default Table;