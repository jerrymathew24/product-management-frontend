import React from 'react'
import Header from './Header.js';

const layout = ({ children }) => {
    return (
        <div className="">
            <Header />
            <main style={{ minHeight: "80vh" }}>
                {children}
            </main>
        </div>
    )
}

export default layout