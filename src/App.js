import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.js';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/Auth/SignUp.js';
import SignIn from './pages/Auth/SignIn.js';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddCategory from './pages/Protected/AddCategory.js';
import PrivateRoute from './components/Routes/Private.js';
import AddSubCategory from './pages/Protected/AddSubCategory.js';
import AddProduct from './pages/Protected/AddProduct.js';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/addCategory' element={<PrivateRoute />}>
          <Route path='' element={<AddCategory />} />
        </Route>
        <Route path='/addSubCategory' element={<PrivateRoute />}>
          <Route path='' element={<AddSubCategory />} />
        </Route>
        <Route path='/addProduct' element={<PrivateRoute />}>
          <Route path='' element={<AddProduct />} />
        </Route>
        <Route path='/productDetails' element={<ProductDetails />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes >
    </>
  );
}

export default App;
