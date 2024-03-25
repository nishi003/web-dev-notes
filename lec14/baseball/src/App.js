import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Players from './pages/Players';
import Layout from './components/Layout';
import Home from './pages/Home';
import { APIContext, useAPIContext } from './contexts/APIContext';
import NotFound from './pages/NotFound';
import Teams from './pages/Teams';
import Team from './pages/Team';
import Games from './pages/Games';

function Webpages() {
	return <BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="teams" element={<Teams />} />
				<Route path="teams/:teamID" element={<Team />} />
				<Route path="players" element={<Players />} />
				<Route path="games" element={<Games />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>;
}

function App() {
	return <APIContext.Provider value={useAPIContext()}>
		<Webpages />
	</APIContext.Provider>;
}

export default App;
