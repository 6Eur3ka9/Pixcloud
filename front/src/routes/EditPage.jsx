import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import logo from '../assets/logo.png';
import { UserService } from '../service/user.service';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../service/context.provider';

const EditPage = () => {



    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('*********');
    const [editingField, setEditingField] = useState(null);
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');


    const {
        setConnectedUserToken,
        setConnectedUserId,
        setConnectedUserPassword
    } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const userid = localStorage.getItem('userId');
        setUserId(userid);
        if (!userid) {
            window.location.href = '/login';
        }
        UserService.getUserById(userid)
            .then((response) => {
                console.log(response.data);
                console.log('username:', response.data.username);
                setusername(response.data.username);
                setEmail(response.data.email);


            }).catch((error) => {
                console.error(error);
            });

        console.log('User ID:', userid);


    }, []);


    const changeUsername = () => {


        const data = {
            userId: userId,
            username: newUsername,
        };


        console.log(data);
        UserService.editUsername(data)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) {
                    setusername(newUsername);
                    setEditingField(null);
                    setUsernameError('');

                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const changeEmail = () => {
        const data = {
            userId: userId,
            email: newEmail,
        };


        console.log(data);
        UserService.editEmail(data)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) {
                    setEmail(newEmail);
                    setEditingField(null);
                    setEmailError('');
                }
            })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.data && error.response.data.error) {
                    setEmailError(error.response.data.error);
                } else {
                    setEmailError("Une erreur est survenue lors de la mise à jour");
                }
            });
    }

    const changePassword = () => {

        const data = {
            userId: userId,
            password: newPassword,
        };

        console.log(data);

        UserService.editPassword(data)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) {

                    setEditingField(null);
                    setPasswordError('');
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }


    const logout = () => {

        localStorage.removeItem('userToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userPassword');

        setConnectedUserToken(null);
        setConnectedUserId(null);
        setConnectedUserPassword(null);


        navigate('/');
    };


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
                            <h3 className=' font-bold text-xl hover:scale-110 duration-300 ease-in-out cursor-pointer' >{username}</h3>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-1 flex justify-center items-center px-6 lg:px-20">
                <div className="flex justify-center">
                    <div id='2' className="bg-white border-[0.5px] w-120 h-auto rounded-lg m-6 p-6">
                        <label className="flex justify-center mb-12 font-bold">Modifier vos informations de compte</label>

                        {editingField === 'username' ? (
                            <div className="flex flex-col items-start mb-6">
                                <input
                                    type="text"
                                    value={newUsername}
                                    onChange={(e) => {
                                        setNewUsername(e.target.value);
                                        setUsernameError(''); // Réinitialiser l'erreur dès que l'utilisateur modifie l'input
                                    }}
                                    className={
                                        "border rounded-sm p-2 w-full " + (usernameError ? "border-red-500" : "border-gray-400")
                                    }
                                />
                                {usernameError && (
                                    <p className="mt-1 text-red-500 text-sm">{usernameError}</p>
                                )}
                                <button
                                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => {
                                        changeUsername();

                                    }}
                                >
                                    Sauvegarder
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center mb-6">
                                <div className="rounded-sm border border-gray-400 bg-white p-2 w-full font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                                    {username}
                                </div>
                                <button
                                    className="ml-4 text-blue-500 hover:underline cursor-pointer font-medium"
                                    onClick={() => setEditingField('username')}
                                >
                                    Changer
                                </button>
                            </div>
                        )}

                        {editingField === 'email' ? (
                            <div className="flex flex-col items-start mb-6">
                                <input
                                    type="text"
                                    value={newEmail}
                                    onChange={(e) => {
                                        setNewEmail(e.target.value);
                                        setEmailError(''); // Réinitialiser l'erreur dès que l'utilisateur modifie l'input
                                    }}
                                    className={
                                        "border rounded-sm p-2 w-full " + (emailError ? "border-red-500" : "border-gray-400")
                                    }
                                />
                                {emailError && (
                                    <p className="mt-1 text-red-500 text-sm">{emailError}</p>
                                )}
                                <button
                                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => {
                                        changeEmail();

                                    }}
                                >
                                    Sauvegarder
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center mb-6">
                                <div className="rounded-sm border border-gray-400 bg-white p-2 w-full font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                                    {email}
                                </div>
                                <button
                                    className="ml-4 text-blue-500 hover:underline cursor-pointer font-medium"
                                    onClick={() => setEditingField('email')}
                                >
                                    Changer
                                </button>
                            </div>
                        )}

                        {editingField === 'password' ? (
                            <div className="flex flex-col items-start mb-6">
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="border border-gray-400 rounded-sm p-2 w-full"
                                />
                                <button
                                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => {
                                        changePassword();

                                    }}
                                >
                                    Sauvegarder
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center mb-6">
                                <div className="rounded-sm border border-gray-400 bg-white p-2 w-full font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                                    {password}
                                </div>
                                <button
                                    className="ml-4 text-blue-500 hover:underline cursor-pointer font-medium"
                                    onClick={() => setEditingField('password')}
                                >
                                    Changer
                                </button>
                            </div>
                        )}

                        <div className="flex justify-center items-center mb-6">
                            <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600">
                                se déconnecter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default EditPage;