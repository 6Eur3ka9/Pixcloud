import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav
            className="bg-white text-black"
            style={{
                boxShadow: "0px -1px 7px 12px rgba(238, 26, 26, 0.8)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">
                    <div className="flex items-center">
                        <a href="/" >
                            <img src={logo} alt="Logo" className="h-22 mt-6  " />
                        </a>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="px-4 py-2 rounded-md text-sm font-medium transform transition-transform duration-200"
                            style={{
                                backgroundColor: "rgba(164, 6, 255, 0.5)",
                                color: "white",
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                        >
                            se connecter
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 rounded-md text-sm font-medium transform transition-transform duration-200"
                            style={{
                                backgroundColor: "rgba(164, 6, 255, 0.5)",
                                color: "white",
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                        >
                            s’inscrire
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;