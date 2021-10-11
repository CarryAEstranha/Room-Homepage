// Importações do React
import { useEffect, useState } from "react";

// Importação dos estilos
import styles from "./Slider.module.scss";

// Importaçaõ de imagens
import angleLeft from "../../assets/images/icon-angle-left.svg";    // Setinha para esquerda
import angleRight from "../../assets/images/icon-angle-right.svg";  // Setinha para direita
import arrow from "../../assets/images/icon-arrow.svg"              // Flexinha

// Exporta a função do componente
export function Slider() {
    // Estado que armazena os dados dos slides
    const [slides, setSlides] = useState([])
    // Estado que armazena o indice de slide
    const [slideIndex, setSlideIndex] = useState(0);

    // useEffect para receber os dados da API
    useEffect(() => {
        // Verifica se os slides existem
        if (slides.length === 0) {
            // Requisita os dados dos slides
            fetch("data.json").then(response => response.json()).then(data => {
                // Atualiza o estado que armazena os dados dos slides
                setSlides(data);
            });
        }
    }, [slides]);

    // Função que altera o indice do slider
    function changeSlide(value) {
        // Verifica se é para voltar um slider
        if (value === "back") {
            // Verifica se o indice é zero
            if (slideIndex === 0 && slides.length > 0) {
                // Seta o indice para o último slide
                setSlideIndex(slides.length - 1);
            } else if (slideIndex > 0 && slides.length > 0) {
                // Diminui o indice do slide
                setSlideIndex(slideIndex - 1);
            }
        } else if (value === "progress") {
            // Verifica se o indice já é o último
            if (slideIndex === slides.length - 1 && slides.length > 0) {
                // Seta o indice para o primeiro slide
                setSlideIndex(0);
            } else if (slideIndex < slides.length - 1 && slides.length > 0) {
                // Aumenta o indice do slide
                setSlideIndex(slideIndex + 1);
            }
        }
    }

    // Retorna a função renderizada
    return (
        <div id={styles.sliderContainer}>
            {slides.length !== 0 ? (
                <>
                    <div
                        id="sliderImage"
                        className={styles.sliderImage}
                        style={{ backgroundImage: `url(${slides[slideIndex].image})` }}
                    ></div>

                    <div id={styles.sliderInformation}>
                        <h1>{slides[slideIndex].title}</h1>

                        <span>{slides[slideIndex].span}</span>

                        <button>
                            <span>SHOP NOW</span>

                            <img src={arrow} alt="" />
                        </button>
                    </div>

                    <div id={styles.sliderArrow}>
                        <div
                            className={styles.arrow}
                            onClick={() => {
                                changeSlide("back")
                            }}
                        >
                            <img src={angleLeft} alt="Arrow left" />
                        </div>

                        <div
                            className={styles.arrow}
                            onClick={() => {
                                changeSlide("progress")
                            }}
                        >
                            <img src={angleRight} alt="Arrow right" />
                        </div>
                    </div>
                </>
            ) : (
                null
            )}
        </div>
    );
}