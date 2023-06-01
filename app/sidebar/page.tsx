"use client"
import React, { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                className="fixed top-4 left-4 md:hidden lg:hidden z-50 bg-gray-200 rounded-full p-2 focus:outline-none"
                onClick={toggleSidebar}
            >
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-gray-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 text-gray-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                )}
            </button>

            <div
                className={`${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-40`}
            >
                {/* Sidebar içeriği */}
            </div>

            {isOpen && (
                <div
                    className="fixed top-0 left-0 h-screen w-screen md:bg-white md:opacity-100 bg-black opacity-25 z-30"
                    onClick={toggleSidebar}
                />
            )}
        </div>
    );
};

export default Sidebar;