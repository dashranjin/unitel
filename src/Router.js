import './Router.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Page/Login/Login';
import Dashboard from './Page/Dashboard/Dashboard';
import Navigation from './Page/Navigation/Navigation';
import Temp from './Page/Temp/Temp';
function Router() {
  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Navigation />}>
            <Route index element={<Dashboard />} />
            <Route path="inventory" element={<Temp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
