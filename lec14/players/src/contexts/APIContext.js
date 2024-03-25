import { useState } from "react";
import { createContext } from "react";

export const APIContext = createContext({
    players: [],
    setPlayers: () => { },
});

export const useApiContext = () => {
    const [players, setPlayers] = useState([]);
    return {
        players,
        setPlayers,
    };
}