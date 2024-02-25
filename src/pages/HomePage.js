import React, { useState } from 'react'
import Layout from '../components/layout/Layout.js';
// import { useAuth } from '../context/auth.js';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import AddCategoryModel from './Models/AddCategoryModel.js';

const HomePage = () => {
    // const [auth, setAuth] = useAuth()
    const [showMyModel, setShowMyModel] = useState(false)
    const handleOnClose = () => setShowMyModel(false)
    return (
        <Layout>
            {/* <h1>homepage</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre> */}
            <div className="items-center  grid grid-cols-2 p-11">
                <div class="font-semibold text-base inline-flex items-center">Home <span className='ml-2'><FaAngleRight /></span></div>

                <div className="inline-flex">
                    <div className="">
                        <Link onClick={() => setShowMyModel(true)} className='bg-yellow-500 rounded-3xl p-4 m-2 text-white text-sm font-semibold'>Add Category</Link>

                    </div>
                    <div className="">
                        <Link to='/addsubcategory' className='bg-yellow-500 rounded-3xl p-4 m-2 text-white text-sm font-semibold'>Add Sub Category</Link>
                    </div>
                    <div className="">
                        <Link to='/addproduct' className='bg-yellow-500 rounded-3xl p-4 m-2 text-white text-sm font-semibold'>Add Product</Link>
                    </div>
                </div>

            </div>
            <AddCategoryModel visible={showMyModel} onClose={handleOnClose} />
        </Layout>
    )
}
export default HomePage