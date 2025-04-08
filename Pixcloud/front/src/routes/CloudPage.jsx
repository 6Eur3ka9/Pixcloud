import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function CloudPage() {


    
    return <>
    <Navbar />
    <section className="bg-linear-to-t from-fuchsia-100 to-purple-300">
            <div>
                <img src="src/assets/logo.png" alt="Placeholder image" />
            </div>

            <aside className="margin-0-auto bg-purple-400 w-50 text-center font-bold block flex justify-end">
                <img src="src/assets/photo.png" alt="Sélectionnez une photo" className="w-30 h-auto" />
                <p className="block">Cliquez pour sélectionner l'image à ajouter</p>
            </aside>

            
            <div className="block">
                <button className="bg-red-500 font-bold pl-10 pr-10 pt-2 pb-2 rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out">Supprimer</button>
            </div>
    </section>
    <Footer />
    </>
}

export default CloudPage