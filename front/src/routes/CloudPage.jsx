import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import image from '../assets/image.png';
import logo from '../assets/logo.png';
import { UserService } from '../service/user.service';


function CloudPage() {
  const [username, setUsername] = useState('');
  const [pictures, setPictures] = useState([]);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const userid = localStorage.getItem('userId');
    if (!userid) {
      window.location.href = '/login';
    }

    // Récupération de toutes les images de l'utilisateur
    UserService.getAllPicturesbyUserId(userid)
      .then((response) => {
        console.log('Response:', response.data);
        // Suppose que votre API renvoie { images: [...] }
        setPictures(response.data.images);
      })
      .catch((error) => {
        console.error(error);
      });


    UserService.getUserById(userid)
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const userId = localStorage.getItem('userId');
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);

      console.log('Envoi du fichier…', formData);
      UserService.uploadPicture(formData)
        .then((response) => {
          console.log('Fichier uploadé avec succès :', response.data);
          return UserService.getAllPicturesbyUserId(userId);
        })
        .catch((error) => {
          console.error('Erreur lors de l\'upload du fichier :', error);
        });
    }
  };
  
  const handleDelete = () => {
    const deleteFile = setPictures(pictures.slice(0, -1));

    if (deleteFile) {
      const userId = localStorage.getItem('userId');
      const formData = new FormData();
      formData.remove('file', file);
      formData.append('userId', userId);

      console.log('Suppression du fichier…', formData);

      UserService.deletePicture(formData)
        .then((response) => {
          console.log('Fichier suprrimé avec succès :', response.data);
          return UserService.getAllPicturesbyUserId(userId);
        })
        .catch((error) => {
          console.error('Erreur lors de la suppression du fichier :', error);
        });
    }
  }
  

function makeBtnVisible() {
  if(visibility === false){
    setVisibility(true)
  } else setBtnVisibility(false);
}

const buttonString = visibility == true ? "Supprimer" : "Supprimer"

  
  //Essais infructueux :

  // const handleDelete = (event) => {
  //   const file = event.target.pictures[0];
    
  //   if (file) {
  //     const userId = localStorage.getItem('userId');
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append('userId', userId);
    
  //     const uploadedPictures = pictures.filter((_, i) => i !== pictures.index);
  //     setPictures(uploadedPictures);
      
  //     // Tu peux appeler l'API ici pour supprimer côté serveur aussi

  //     console.log('Suppression du fichier...', formData)
    
  //     UserService.deletePicture(formData).then((response) => {
  //       console.log('Fichier supprimé avec succès :', response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Erreur lors de la suppression du fichier :', error);
  //     });
  //   };
  // };

  //Je clique sur le bouton,
  //J'ATTEND de cliquer sur le l'img à supprimer pour la supprimer
  //Je supprime l'image cliquée

  //const removePicture = (pictureIndex) => setPictures(pictures.filter((_, a) => a !== pictureIndex));
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
      
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  // const handleDelete = () => {
  //   setPictures(pictures.slice(0, -1));
  // }

  // const handleDelete = (pictures) => {
  //   pictures((prevState) => {
  //     let username = [...prevState];
  //     console.log(username);
  //     pictures.splice(0, -1);
  //     return pictures;
  //   });
  // };

  // const handleDelete = (index, pictureId) => {
  //   const userId = localStorage.getItem('userId');
  
  //   // Suppression locale (côté client)
  //   setPictures((prevPictures) => prevPictures.filter((_, i) => i !== index));
  
  //   // Appel au backend pour supprimer l'image côté serveur
  //   UserService.deletePicture({ index, pictureId })
  //     .then((response) => {
  //       console.log('Fichier supprimé avec succès :', response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Erreur lors de la suppression du fichier :', error);
  //     });
  // };
  // {pictures.map((picture, index) => (
  //   <div
  //     key={picture.id}
  //     className="relative w-[230px] h-[230px] bg-white m-2 rounded overflow-hidden flex items-center justify-center"
  //   >
  //     <img
  //       src={picture.url}
  //       alt={`user-pic-${index}`}
  //       className="w-full h-full object-cover"
  //     />
  //     <button
  //       onClick={() => handleDelete(index, picture.id)}
  //       className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded hover:bg-red-700"
  //     >
  //       X
  //     </button>
  //   </div>
  // ))}
//   <button onClick={appearOnClick() => {
//     if(pictures.length > 0) {
//       const picture = pictures[pictures.length - 1];
//       handleDelete(pictures.length - 1, picture.id);
//     }
//   }
// }
// className="bg-red-500 font-bold pl-10 pr-10 pt-2 pb-2 rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out">Supprimer</button>
  

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
      <nav
        className="bg-white text-black"
        style={{ boxShadow: "0px -1px 7px 12px rgba(238, 26, 26, 0.8)" }}
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
          className=" bg-gray-100 border border-black p-64 rounded flex-1 overflow-auto relative"
          style={{ maxHeight: '500px' }}
        >
          <div className="absolute inset-0 ml-3 mt-5 flex flex-wrap">
          {pictures.map((picture, index) => (
              <div key={picture.id} className="relative w-[230px] h-[230px] bg-white m-2 rounded overflow-hidden flex items-center justify-center">
                <img
                  src={picture.url}
                  alt={`user-pic-${index}`}
                  className="w-full h-full object-cover"
                />
                {visibility && (
                  <button
                    onClick={() => handleDelete(picture.id)}
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
          <p className='font-medium text-lg mt-2'>il vous reste {100 - pictures.length}/100 images</p>
            </div>
            <button onClick={makeBtnVisible} className="bg-red-500 font-bold pl-10 pr-10 pt-2 pb-2 rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out">{buttonString}</button>
            </div>
      </div>
      <Footer />
    </div>
    )
};

export default CloudPage;