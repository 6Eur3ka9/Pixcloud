import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import image from '../assets/image.png';
import logo from '../assets/logo.png';
import { UserService } from '../service/user.service';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vw',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline: 'none',
  borderRadius: '8px',
};

function CloudPage() {
  const [username, setUsername] = useState('');
  const [pictures, setPictures] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const handleOpen = (url) => {
    setSelectedImage(url);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const userid = localStorage.getItem('userId');
    if (!userid) {
      window.location.href = '/login';
    }

    // Récupère les images
    UserService.getAllPicturesbyUserId(userid)
      .then((response) => setPictures(response.data.images))
      .catch((error) => console.error(error));

    UserService.getUserById(userid)
      .then((response) => setUsername(response.data.username))
      .catch((error) => console.error(error));
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const userId = localStorage.getItem('userId');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userId);

    UserService.uploadPicture(formData)
      .then(() => UserService.getAllPicturesbyUserId(userId))
      .then((resp) => setPictures(resp.data.images))
      .catch((error) => console.error(error));
  };

  const handleDelete = (pictureId) => {
    const userId = localStorage.getItem('userId');
    const formData = new FormData();
    formData.append('pictureId', pictureId);
    formData.append('userId', userId);

    UserService.deletePicture(formData)
      .then(() => UserService.getAllPicturesbyUserId(userId))
      .then((resp) => setPictures(resp.data.images))
      .catch((error) => console.error(error));
  };

  const makeBtnVisible = () => setVisibility((v) => !v);
  const buttonString = 'Supprimer';

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
      <nav
        className="bg-white text-black"
        style={{ boxShadow: '0px -1px 7px 12px rgba(238, 26, 26, 0.8)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center">
              <a href="/">
                <img src={logo} alt="Logo" className="h-22 mt-6" />
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="/edit"
                className="font-bold text-xl hover:scale-110 duration-300 ease-in-out cursor-pointer"
              >
                {username}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 px-6 lg:px-20 flex items-center">
        <div
          className="bg-gray-100 border border-black p-64 rounded flex-1 overflow-auto relative"
          style={{ maxHeight: '500px' }}
        >
          <div className="absolute inset-0 ml-3 mt-5 flex flex-wrap">
            {pictures.map((picture) => (
              <div
                key={picture.id}
                className="relative w-[230px] h-[230px] bg-white m-2 rounded overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 duration-300 ease-in-outr"
                onClick={() => handleOpen(picture.url)}
              >
                <img
                  src={picture.url}
                  alt={`user-pic-${picture.id}`}
                  className="w-full h-full object-cover"
                />
                {visibility && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(picture.id);
                    }}
                    className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded hover:bg-red-700"
                  >
                    X
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div id="button" className="flex flex-col space-y-[95%] ml-10">
          <div>
            <label className="bg-purple-600 w-50 text-center font-bold flex flex-col items-center rounded-sm cursor-pointer hover:scale-105 duration-300 ease-in-out">
              <img src={image} alt="image" className="w-24 mt-10 mb-10" />
              <span>Cliquez pour sélectionner l'image à ajouter</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <p className="font-medium text-lg mt-2">
              Il vous reste {100 - pictures.length}/100 images
            </p>
          </div>
          <button
            onClick={makeBtnVisible}
            className="bg-red-500 font-bold px-10 py-2 rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out"
          >
            {buttonString}
          </button>
        </div>
      </div>

    
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Aperçu"
              className="max-w-full max-h-[80vh] object-contain"
            />
          )}
        </Box>
      </Modal>

      <Footer />
    </div>
  );
}

export default CloudPage;
