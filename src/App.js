import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.js';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/Auth/SignUp.js';
import Login from './pages/Auth/Login.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productDetails' element={<ProductDetails />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
