import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/login';
import Landing from './pages/landing';
import CreateTask from './pages/create';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/login/" exact element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="create/" element={<CreateTask />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
