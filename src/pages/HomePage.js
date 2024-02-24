import React from 'react'
import Layout from '../components/layout/Layout.js';
import { useAuth } from '../context/auth.js';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

const HomePage = () => {
    const [auth, setAuth] = useAuth()
    return (
        <Layout>
            {/* <h1>homepage</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre> */}
            <div className="items-center  grid grid-cols-2 p-11">
                <div class="font-semibold text-base inline-flex items-center">Home <span className='ml-2'><FaAngleRight /></span></div>

                <div className="">
                    <Link className='bg-yellow-500 rounded-3xl p-4 m-2 text-white text-sm font-semibold'>Add Category</Link>
                    <Link className='bg-yellow-500 rounded-3xl p-4 m-2 text-white text-sm font-semibold'>Add Sub Category</Link>
                    <Link className='bg-yellow-500 rounded-3xl p-4 m-2 text-white text-sm font-semibold'>Add Product</Link>
                </div>
            </div>

        </Layout>
    )
}

export default HomePage