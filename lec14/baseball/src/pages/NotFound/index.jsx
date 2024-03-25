import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext";

const NotFound = () => {
    const { setPage } = useContext(APIContext);

    return <>
        <h1>Error 404</h1>
        <p>Your requested page is not found. Please double check the URL and try again.</p>
    </>;
}

export default NotFound;