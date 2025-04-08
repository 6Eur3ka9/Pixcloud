import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-7">
            <div className="flex justify-center space-x-6">
                <a href="#contact" className="hover:underline">
                    nous contacter
                </a>
                <a href="#legal" className="hover:underline">
                    mention legal
                </a>
                <a href="#about" className="hover:underline">
                    qui sommes nous
                </a>
            </div>
        </footer>
    );
};

export default Footer;