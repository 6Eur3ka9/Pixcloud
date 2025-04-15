import React from "react";
import LegalMentions from "../routes/LegalMentions";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-7">
            <div className="flex justify-center space-x-6">
                <Link to="/contact" className="hover:underline">Nous contacter</Link>
                <Link to="/legalmentions" className="hover:underline">Mentions légales</Link>
                <Link to="/aboutus" className="hover:underline">Qui sommes nous</Link>
            </div>
        </footer>
    );
};

export default Footer;