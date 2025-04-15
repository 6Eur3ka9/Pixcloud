import Navbar from "../components/navbar";
import Footer from "../components/footer";

function AboutUs() {

    return (
    <div className="min-h-screen flex justify-center flex-col bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
    <Navbar />
        <div className="text-center bg-white p-5 w-4xl m-auto rounded-lg border-[0.5px]">
            <h1 className="text-center mb-5 font-bold">Qui sommes nous ?</h1>
            <p>Pixcloud est un projet étudiant réalisé dans le cadre de la formation "TP - Développeur Web" de l'AFEC.</p>
            <p>Pixcloud permet à ses utilisateurs de sauvegarder jusqu'à 100 photos dans un cloud sécurisé et facile d'utilisation.</p>
            <p>Ce projet a été réalisé par <a href="https://github.com/6Eur3ka9" className="text-blue-800 hover:underline">6Eur3ka9</a> et <a href="https://github.com/Luna-bf" className="text-blue-800 hover:underline">Luna-bf</a>.</p>

            <a href="/mainpage" className="flex justify-center text-purple-400 hover:text-purple-600 font-medium mt-5">Revenir à la page principale</a>
        </div>
    <Footer />
    </div>
    )
}

export default AboutUs;