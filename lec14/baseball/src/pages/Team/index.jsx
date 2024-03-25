import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Team() {
    const navigate = useNavigate();

    const [ team, setTeam ] = useState({});
    const { teamID } = useParams();

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/teams/${teamID}`)
        .then(response => response.json())
        .then(json => {
            setTeam(json);
        });
    }, [ teamID ]);

    // ?. null-coalescing operator: if team is null don't do anything, otherwise, display the name
    // team can be null on the first useState call
    // could also have name="", city="", abbreviation="" in the useState dictionary
    return <> 
        <h1>Team Detail</h1>
        <dl>
            <dt>Name:</dt><dd>{team?.name}</dd>
            <dt>City:</dt><dd>{team?.city}</dd>
            <dt>Abbreviation:</dt><dd>{team?.abbreviation}</dd>
        </dl>
        <button onClick={() => navigate("/teams")}>Back to Teams</button>
    </>;
}

export default Team;