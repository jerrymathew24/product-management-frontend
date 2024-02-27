import React, { useState } from 'react'
import toast from "react-hot-toast";
import axios from 'axios'

const AddCategoryModel = ({ visible, onClose }) => {

    const [name, setName] = useState("");

    const handleCloseCategory = (e) => {
        if (e.target.id === 'categoryModel') onClose()
    }
    if (!visible) return null




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/categories/create-category", {
                name,
            });
            if (data?.success) {
                toast.success(`${name} is created`);
                setName('')
                console.log(data, "dataaaaaaaaaaaaaa")
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("somthing went wrong in input form checkk");
        }
    };



    return (
        <form onSubmit={handleSubmit} id='categoryModel' onClick={handleCloseCategory} className='fixed inset-0 bg-black bg-opacity-30   flex justify-center items-center'>
            <div className="bg-white p-2 rounded-lg ">
                <h1 className='p-4 text-center text-gray-600 font-medium'>Add Category</h1>
                <input placeholder='Enter Category Name' className='border border-gray-400 rounded-lg p-1 m-5' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <div className="flex gap-2 justify-center">
                    <button type='submit' className='bg-yellow-500 rounded-md p-2'>ADD</button>
                    <button className='bg-gray-300 rounded-md p-2' onClick={onClose}>DISCARD</button>
                </div>
            </div>

        </form>
    )
}

export default AddCategoryModel