import React from 'react';
import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaRecetas from './components/ListaRecetas'

function App() {
	return (
		// Se rodea todo con CategoriasProvider para que los value que pasamos, sean heredados por los hijos
		<CategoriasProvider>
			<RecetasProvider>
				<ModalProvider>
					
					<Header/>

					<div className="container mt-5">
						<div className="row">
							<Formulario/>
						</div>

						<ListaRecetas/>
					</div>

				</ModalProvider>
			</RecetasProvider>
		</CategoriasProvider>
	);
}

export default App;
