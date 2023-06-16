import { Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoutes';
import BlogList from './pages/BlogList';

function App() {
  const routers = (
    <Routes>
      <Route element={<PrivateRoute isAccessible={false} />}>
        <Route path="/about" element={<h1>About page</h1>}></Route>
        <Route path="/secret" element={<h1>Secret Page</h1>}></Route>
      </Route>
      <Route path="/" element={<BlogList />}></Route>
    </Routes>
  );
  return routers;
}

export default App;
