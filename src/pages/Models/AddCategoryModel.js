import React from 'react'

const AddCategoryModel = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        if (e.target.id === 'model') onClose()
    }
    if (!visible) return null
    return (
        <div id='model' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30   flex justify-center items-center'>
            <div className="bg-white p-2 rounded-lg ">
                <h1 className='p-4 text-center text-gray-600 font-medium'>Add Category</h1>
                <input className='border border-gray-400 rounded-lg p-1 m-5' type="text" />
                <div className="flex gap-2 justify-center">
                    <button className='bg-yellow-500 rounded-md p-2'>ADD</button>
                    <button className='bg-gray-300 rounded-md p-2' onClick={onClose}>DISCARD</button>
                </div>
            </div>

        </div>
    )
}

export default AddCategoryModel