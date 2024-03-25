import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";

const Home = () => {
    const { setPage } = useContext(APIContext);

    return <>
        <h1>Welcome!</h1>
        <p>This is a website made for dedicated baseball fans. You may use the navigation links above 
        to look up information about baseball players, teams, and all games that have been officially 
        recorded.</p>
    </>;
}

export default Home;