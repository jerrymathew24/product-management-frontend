import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.js';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/productDetails' element={<ProductDetails />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
