import React from 'react'

const AddSubCategoryModel = ({ visible, onClose }) => {
    const handleCloseCategory = (e) => {
        if (e.target.id === 'subCategoryModel') onClose()
    }
    if (!visible) return null
    return (
        <div id='subCategoryModel' onClick={handleCloseCategory} className='fixed inset-0 bg-black bg-opacity-30   flex justify-center items-center'>
            <div className="bg-white p-5 rounded-lg ">
                <h1 className='p-4 text-center text-gray-600 font-medium'>Add Sub Category</h1>
                <div className="flex flex-col ">
                    {/* <input placeholder='Select Category' className='border border-gray-400 rounded-lg p-1 m-2' type="text" /> */}
                    <select className='border border-gray-400 text-gray-600 rounded-lg p-1 m-2'>
                        <option  >Select Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <input placeholder='Enter Sub Category Name' className='border border-gray-400 rounded-lg p-1 m-2' type="text" />
                </div>
                <div className="flex gap-2 justify-center m-2 ">
                    <button className='bg-yellow-500 rounded-md p-2'>ADD</button>
                    <button className='bg-gray-300 rounded-md p-2' onClick={onClose}>DISCARD</button>
                </div>
            </div>

        </div>
    )
}

export default AddSubCategoryModel
