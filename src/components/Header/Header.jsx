// Importa os estilos
import styles from "./Header.module.scss";

// Importação das imagens
import close from "../../assets/images/icon-close.svg";             // Icone de fechar
import hamburder from "../../assets/images/icon-hamburger.svg";     // Icone de abrir o navbar
import logo from "../../assets/images/logo.svg";                    // Logo

// Exporta a função do component
export function Header() {
    // Retorna o componente renderizado
    return (
        <header id={styles.headerContainer}>
            <div 
                id="header"
                className={styles.header}
            >
                <img
                    id="logo" 
                    src={logo}
                    alt="" 
                />

                <nav id="navBar">
                    <a href="/#">home</a>
                    <a href="/#">shop</a>
                    <a href="/#">about</a>
                    <a href="/#">contact</a>
                </nav>

                <div
                    id="navButton"
                    className={styles.navButton}
                    style={{ backgroundImage: `url(${hamburder})` }}
                    onClick={() => {
                        // Remove a visibilidade desse botão
                        document.getElementById("navButton").style.display = "none";
                        // Remove a visibilidade da logo
                        document.getElementById("logo").style.display = "none";

                        // Adiciona a visibilidade ao botão de fechar o navbar
                        document.getElementById("closeNavButton").style.display = "unset";
                        // Adiciona a visilibidade aos botão de navegação
                        document.getElementById("navBar").style.display = "unset";

                        // Altera a cor do header
                        document.getElementById("header").style.background = "var(--white)";
                    }}
                ></div>

                <div
                    id="closeNavButton"
                    className={styles.closeNavButton}
                    style={{ backgroundImage: `url(${close})` }}
                    onClick={() => {
                        // Remove a visibilidade desse botão
                        document.getElementById("closeNavButton").style.display = "none";
                        // Remove a visibilidade aos botões de navegação
                        document.getElementById("navBar").style.display = "none";

                        // Adiciona a visibilidade ao botão de abrir o navbar
                        document.getElementById("navButton").style.display = "unset";
                        // Adiciona a visilibidade a logo
                        document.getElementById("logo").style.display = "unset";

                        // Altera a cor do header
                        document.getElementById("header").style.background = "unset";
                    }}
                ></div>
            </div>
        </header>
    );
}