import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

const AddSubCategoryModel = ({ visible, onClose }) => {

    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [category, setCategory] = useState('')
    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/categories/get-category");
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in getting category");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/subcategories/create-subcategory", {
                category, name,
            });
            if (data?.success) {
                toast.success(`${name} is created`);
                setName('')
                setCategory('')
                console.log(data, "dataaaaaaaaaaaaaa success")
            } else {
                toast.error(data.message);

            }
        } catch (error) {
            console.log(error);
            toast.error("somthing went wrong in input form checkk");
        }
    };

    const handleCloseCategory = (e) => {
        if (e.target.id === 'subCategoryModel') onClose()
    }
    if (!visible) return null
    return (
        <form onSubmit={handleSubmit} id='subCategoryModel' onClick={handleCloseCategory} className='fixed inset-0 bg-black bg-opacity-30   flex justify-center items-center'>
            <div className="bg-white p-5 rounded-lg ">
                <h1 className='p-4 text-center text-gray-600 font-medium'>Add Sub Category</h1>
                <div className="flex flex-col ">
                    {/* <select onChange={(e) => setCategory(e.target.value._id)} className='border border-gray-400 text-gray-600 rounded-lg p-1 m-2'>
                        <option value={category} >Select Category</option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select> */}
                    <select className='border border-gray-400 text-gray-600 rounded-lg p-1 m-2' value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                    <input placeholder='Enter Sub Category Name' className='border border-gray-400 rounded-lg p-1 m-2' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex gap-2 justify-center m-2 ">
                    <button className='bg-yellow-500 rounded-md p-2'>ADD</button>
                    <button className='bg-gray-300 rounded-md p-2' onClick={onClose}>DISCARD</button>
                </div>
            </div>

        </form>
    )
}

export default AddSubCategoryModel