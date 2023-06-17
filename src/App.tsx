import { Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoutes';
import BlogList from './pages/BlogList';
import Header from './components/Header';

function App() {
  const routers = (
    <div style = {{backgroundColor: '#f9f7f0', height: '100vh'}}>
    <Header/>
    <Routes>
      <Route element={<PrivateRoute isAccessible={true} />}>
        <Route path="/about" element={<h1>About page</h1>}></Route>
        <Route path="/secret" element={<h1>Secret Page</h1>}></Route>
      </Route>
      <Route path="/" element={<BlogList />}></Route>
    </Routes>
    </div>
    
  );
  return routers;
}

export default App;
