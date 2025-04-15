import mainPage from "../routes/mainPage.jsx"
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function LegalMentions() {

    return (
    <div className="min-h-screen flex justify-center flex-col bg-gradient-to-b from-[#A406FF] via-[#D580FF] to-transparent">
    <Navbar />
        <div className="bg-white p-5 w-4xl m-auto rounded-lg border-[0.5px]">
            <h1 className="text-center mb-5 font-bold">Mentions légales :</h1>

            <h2 class="mt-8 mb-4">Éditeur et responsable du contenu du site :</h2>
            <p className="mt-4 mb-4">Cette mention est valable pour tous les sites exploités par Pixcloud ainsi que pour tous les réseaux sociaux de Pixcloud.</p>

            <h3 className="mt-8 mb-4">Informations sur la société :</h3>

            <ul>
                <li className="mt-3">France</li>
                <li className="mt-3">Téléphone : +12 34 56 78 90</li>
                <li className="mt-3">E-mail : john.doe@gmail.com</li>
            </ul>

            <h3 className="mt-8 mb-4">Numéro d’identification de la société :</h3>
            <p >123456</p>

            <h3 class="mt-8 mb-4">Direction / représentée par :</h3>
            <p>John Doe</p>

            <a href="/mainpage" className="flex justify-center text-purple-400 hover:text-purple-600 font-medium mt-5">Revenir à la page principale</a>
        </div>
        <Footer />
    </div>
    )
}

export default LegalMentions;