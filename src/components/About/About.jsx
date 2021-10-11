// Importa os estilos
import styles from "./About.module.scss";

// Exporta a função do About
export function About() {
    // Retorna o componente renderizado
    return (
        <div id={styles.aboutContainer}>
            <div 
                id={styles.leftImage}
                style={{backgroundImage: "url(https://i.ibb.co/vVxbLCt/Dark.jpg)"}}
            ></div>

            <div id={styles.aboutInformation}>
                <h2>ABOUT OUR FURNITURE</h2>

                <span>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space</span>
            </div>

            <div 
                id={styles.rightImage}
                style={{backgroundImage: "url(https://i.ibb.co/NxpvpT2/Light.jpg)"}}
            ></div>
        </div>
    );
}