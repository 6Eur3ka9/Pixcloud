import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import image from '../assets/image.png';
import logo from '../assets/logo.png';
import { UserService } from '../service/user.service';

function CloudPage() {
    const [username, setusername] = useState('');
    

    useEffect(() => {
        const userid = localStorage.getItem('userId');
        const token = localStorage.getItem('userToken');
        console.log('Token:', token);
        
        if (!userid) {
            window.location.href = '/login';
        }
        UserService.getUserById(userid)
            .then((response) => {
                console.log(response.data);
                console.log('username:', response.data.username);
                setusername(response.data.username);
            }).catch((error) => {
                console.error(error);
            });


        console.log('User ID:', userid);
        
        
    }, []);
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('File uploaded:', file);
          
        }
    };

    const handleDelete = () => {

    } 

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
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
                                    <a href='/edit' className=' font-bold text-xl hover:scale-110 duration-300 ease-in-out cursor-pointer' >{username}</a>
                                    
                                </div>
                            </div>
                        </div>
                    </nav>
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
                
                <div id='button' className="flex flex-col space-y-[100%] ml-10 ">
                    <label className="bg-purple-600 w-50 text-center font-bold flex flex-col items-center rounded-sm cursor-pointer hover:scale-105 duration-300 ease-in-out">
                        <img
                            src={image}
                            alt="image"
                            className="w-24 mt-10 mb-10"
                        />
                        <span className="block">
                            Cliquez pour sélectionner l'image à ajouter
                        </span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                    </label>
                    <button  onClick={handleDelete} className="bg-red-500 font-bold pl-10 pr-10 pt-2 pb-2 rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out">
                        Supprimer
                    </button>
                </div>
              
            </div>
            <Footer />
        </div>
    );
}

export default CloudPage