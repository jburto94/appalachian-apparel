import { Routes, Route } from 'react-router-dom'

import Home from "./components/routes/home/Home";
import Shop from './components/routes/shop/Shop';
import Authentication from './components/routes/authentication/Authentication';
import Checkout from './components/routes/checkout/Checkout';
import Navigation from './components/partials/Navigation';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
  );
};

export default App;
