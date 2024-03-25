import { useState, useEffect } from "react";
import Table from "./Table";
import './style.css';
import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";

function Players() {
    const { setPlayers } = useContext(APIContext);
    // search and page are bundled so we combine the states into one
    const [query, setQuery] = useState({search: "", page: 1});
    const [totalPages, setTotalPages] = useState(1);

    // Fetch from "https://www.balldontlie.io/api/v1/players"
    // Note that it takes two query parameters:
    //     search: filter by keyword
    //       page: page number (used for pagination)

    useEffect(() => {
        // destruct
        const {search, page} = query;
        // pass both search and page during query
        fetch(`https://www.balldontlie.io/api/v1/players?search=${search}&page=${page}`) // endpoint we want to fetch
            .then(response => response.json()) // when the promise is resolved, get the response, return another promise function
            .then(json => {
                setPlayers(json.data);
                setTotalPages(json.meta.total_pages);
            })
        // default: GET request, we don't have to specify anything else for GET request
    // empty dependency array => only call when loading the component
    }, [query]);

    // use Table subcomponent to generate a table of players
    return <>
        <p>
            <label>
                Search Player Name:
                <input value={query.search}
                    // event.target.value: value of the target box that triggered the event
                    onChange={event => setQuery({search: event.target.value, page: 1})}
                />
            </label>
        </p>
        <Table />
        <p>
            {query.page > 1 ? 
            <button onClick={() => setQuery({...query, page: query.page - 1})}>Previous</button> 
            : <></>}
            {query.page < totalPages ? 
            <button onClick={() => setQuery({...query, page: query.page + 1})}>Next</button> 
            : <></>}
        </p>
        <p>Page {query.page} out of {totalPages}</p>
    </>;
}

export default Players;