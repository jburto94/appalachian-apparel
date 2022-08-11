import { Routes, Route } from 'react-router-dom'

import Home from "./components/routes/Home";
import Shop from './components/routes/Shop';
import Authentication from './components/routes/Authentication';
import Navigation from './components/partials/Navigation';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
  );
};

export default App;
