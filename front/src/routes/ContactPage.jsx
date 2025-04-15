import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png'
import { UserService } from '../service/user.service';
import Footer from '../components/footer';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const [username, setUsername] = useState('');
    const form = useRef();
    const [resultMsg, setResultMsg] = useState("");
    const [msgColor, setMsgColor] = useState("");
  
    const sendEmail = (e) => {
      e.preventDefault();
      
      
      const now = new Date().toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
  
      const timeInput = form.current.querySelector('input[name="time"]');
      if(timeInput) {
        timeInput.value = now;
      }
      
      emailjs.sendForm(
        'service_m7tn7qm',    
        'template_wjtua9q',  
        form.current,
        'uB3i9PiE0trULyXan'   
      )
      .then((result) => {
        setResultMsg("Message envoyé avec succès !");
        setMsgColor("green");
        e.target.reset();
      }, (error) => {
        setResultMsg("Erreur lors de l'envoi du message");
        setMsgColor("red");
      });
    };

    useEffect(() => {
        const userid = localStorage.getItem('userId');
        if (!userid) {
          window.location.href = '/login';
        }
   
    
    
        UserService.getUserById(userid)
          .then((response) => {
            setUsername(response.data.username);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);



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
            <div className="flex-1 flex justify-center items-center px-6 lg:px-20">
    
    <div className="flex justify-center">

        <form ref={form} onSubmit={sendEmail} className="bg-white border-[0.5px] w-105 h-auto rounded-lg m-6">
            <label className=" flex justify-center mb-4 mt-6 font-bold">CONTACTEZ-NOUS</label>
            <p className="text-medium font-medium text-center mb-8">Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter via le formulaire ci-dessous.</p>
        
            <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className=" flex justify-center space-between rounded-sm border-1 border-gray-400 bg-white p-2 mb-8 m-auto w-80"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="votre adresse mail"
          className=" flex justify-center space-between rounded-sm border-1 border-gray-400 bg-white p-2 mb-8 m-auto w-80"
          required
        />
       
        <input type="hidden" name="time" value="" />
        <textarea
          name="message"
          placeholder="Votre message"
          className=" flex justify-center space-between rounded-sm border-1 border-gray-400 bg-white p-2 mb-8 m-auto w-80"
          required
        ></textarea>
        <button
          type="submit"
          className="flex justify-center mb-12 m-auto font-medium bg-purple-400 pl-10 pr-10 pt-2 pb-2 rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out"
        >
          Envoyer
        </button>
        {resultMsg && (
          <div style={{ color: msgColor, textAlign: "center", marginTop: "10px" }}>
            {resultMsg}
          </div>
        )}
        </form>
    </div>
    </div>
    <Footer />
        </div>
    );
};

export default ContactPage;