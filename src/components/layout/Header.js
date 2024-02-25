import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast'

const Header = () => {
    const [auth, setAuth] = useAuth()
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth')
        toast.success('Logout Successful')
    }
    return (
        <>
            <nav className="w-full bg-cyan-800 p-3 rounded-md">
                <div className="items-center  grid grid-cols-2">
                    <div className="w-full flex justify-end">
                        <form className="flex bg-white rounded-xl ">
                            <input className="rounded-xl p-1 mx-2" type="search" placeholder="Search anything here" aria-label="Search" />
                            <button className="bg-yellow-500 p-3 w-full rounded-xl text-white " type="submit">Search</button>
                        </form>
                    </div>
                    <div className='mr-12'>
                        <ul className="flex items-center justify-end gap-3">

                            <li className="">
                                <NavLink to='/' className="nav-link text-white"><FaRegHeart /></NavLink>
                            </li>
                            {!auth.user ? (<>
                                <li className="">
                                    <NavLink to='/signUp' className="nav-link text-white">signup</NavLink>
                                </li>
                                <li className="">
                                    <NavLink to='/signIn' className="nav-link text-white">signIn</NavLink>
                                </li>
                            </>) : (
                                <>
                                    <li className="">
                                        <NavLink onClick={handleLogout} to='/signIn' className="nav-link text-white">SignOut</NavLink>
                                    </li>
                                </>
                            )}
                            <li className="">
                                <NavLink to='/' className="nav-link text-white"><IoCartOutline /></NavLink>
                            </li>
                            <li className="">
                                <NavLink to='/' className="nav-link text-white">cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header