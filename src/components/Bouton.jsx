import React, { useEffect, useState } from 'react';
import './main.css'; // Assurez-vous d'importer le fichier CSS correct

const Bouton = ({ index, name, click }) => { // Déstructurez les props ici
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(deplacerAleatoirement, 6000);

        return () => clearInterval(interval);
    }, []);
    
    const deplacerAleatoirement = () => {
        const largeurPage = window.innerWidth;
        const hauteurPage = window.innerHeight;
        const nouvellePositionX = Math.random() * largeurPage;
        const nouvellePositionY = Math.random() * hauteurPage;

        setPosition({ x: nouvellePositionX, y: nouvellePositionY });
    };

    return (
        <button className="bouton" onClick={() => click(index)} style={{ top: position.y, left: position.x }}>
            {name}
        </button>
    );
};

export default Bouton;
