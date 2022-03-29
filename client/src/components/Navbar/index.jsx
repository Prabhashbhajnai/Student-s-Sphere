import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";

// Images
import logo from "../../Assets/logo.png"

const MobileNav = () => {
    return (
        <div className="flex w-full items-center justify-between lg:hidden">
            <Link to={"/"}>
                <div className="w-28 h-28">
                    <img src={logo}
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
            </Link>
            <div className="flex items-center gap-3">
                <button className="bg-customPink-200  text-white py-2 px-3 rounded-full">
                    UseApp
                </button>
                <span className="border p-2 border-gray-300 text-Library-400 rounded-full">
                    <FaUserAlt />
                </span>
            </div>
        </div>
    );
};

const LargeNav = () => {
    return (
        <>
            <div className="flex w-full bg-grey-50">
                <div className="hidden w-full mr-20 items-center justify-between lg:flex gap-5 ">
                    <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }} className='flex items-center gap-4'>
                        <div className="pl-2 w-28 h-24">
                            <img
                                src={logo}
                                alt="logo"
                                className="w-full h-full"
                            />
                        </div>
                        <h1 className='text-2xl w-72 mr-6'>Student's Hub</h1>
                    </Link>
                    <div className="w-2/4 mr-56 bg-white shadow-md p-3 border border-gray-200 rounded">
                        <div className="flex items-center gap-2 ">
                            <RiSearch2Line />
                            <input
                                type="search"
                                placeholder="Search for your books"
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <button className="text-gray-500 text-xl hover:text-gray-800">
                            Login
                        </button>
                        <button className="text-gray-500 text-xl hover:text-gray-800">
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav className="py-0 flex shadow-md lg:shadow-none w-full flex-col items-center">
                <MobileNav />
                <LargeNav />
            </nav>
        </>
    );
};





export default Navbar;