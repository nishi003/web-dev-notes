import './App.css';
import Players from './components/Players';
import { APIContext, useApiContext } from './contexts/APIContext';

function App() {

    return <main>
        <APIContext.Provider value={useApiContext()}>
            <Players />
        </APIContext.Provider>
    </main>
}

export default App;
