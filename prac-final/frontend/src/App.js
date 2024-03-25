import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/login';
import Landing from './pages/landing';
import CreateTopic from './pages/create';
import Topic from './pages/topic';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/login/" exact element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="topic/create/" element={<CreateTopic />} />
        <Route path="topic/:topicId/" element={<Topic />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
