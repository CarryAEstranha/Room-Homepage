// Importações de componentes
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";

// Função principal da página
function App() {
	// Retorna a função renderizada
	return (
		<>
			<Header />
			<Slider />
			<About />
		</>
	);
}

// Exporta o App
export default App;