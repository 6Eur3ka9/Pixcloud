import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import image from '../assets/image.png';
import { UserService } from '../service/user.service';

function CloudPage() {

    useEffect(() => {
        const userid = localStorage.getItem('userId');
        if (!userid) {
            window.location.href = '/login';
        }
        UserService.getUserById(userid)
            .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error);
            });

            
        console.log('User ID:', userid);
        
    }, []);
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
            <Navbar />
            <div className="flex-1 px-6 lg:px-20 flex items-center">
                <div
                    
                    className="border border-black p-64 rounded flex-1 overflow-auto relative"
                    style={{ maxHeight: '500px' }}
                >
                    <div className="absolute inset-0 ml-3 mt-5  flex flex-wrap">
                        {Array.from({ length: 100 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-[230px] h-[230px] bg-white m-2 rounded"
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col space-y-[100%] ml-10">
                    <button className="bg-purple-600 w-50 text-center font-bold flex flex-col items-center rounded-sm">
                        <img
                            src={image}
                            alt="image"
                            className="w-24 mt-10 mb-10"
                        />
                        <p className="block">
                            Cliquez pour sélectionner l'image à ajouter
                        </p>
                    </button>
                    <button className="bg-red-500 font-bold pl-10 pr-10 pt-2 pb-2 rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out">
                        Supprimer
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CloudPage