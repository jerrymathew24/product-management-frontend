import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "signin" }) => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 &&
            navigate(`/${path}`, {
                state: location.pathname,
            });
        return () => clearInterval(interval);
    }, [count, navigate, location, path]);
    return (
        <>
            <div className="flex justify-center mt-24" style={{ height: '70vh' }}>
                <h1 className='text-center text-2xl font-medium text-cyan-700'>
                    Redirecting in {count} seconds
                </h1>
                <div className="animate-spin w-8 h-8 border-cyan-700 rounded-full border-2 border-dashed ml-3">
                    <span className="sr-only ">Loading...</span>
                </div>
            </div>

        </>
    )
}

export default Spinner