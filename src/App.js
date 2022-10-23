import './App.css';
import { useState, useEffect } from 'react';
import Pokedex from './components/pokedex/pokedex';
import Gen1Pokemon from './components/gen1_pokemon/gen1_pokemon';

function App() {
	const [gen1Pokedex, setGen1Pokedex] = useState(null);
	const [gen1Pokemon, setGen1Pokemon] = useState(null);

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokedex/2')
			.then((response) => response.json())
			.then((pokedex) => setGen1Pokedex(pokedex))
			.catch((err) => console.log('api'));
	}, []);

	return (
		<div className='App'>
			{gen1Pokedex && <Pokedex PokemonName={gen1Pokedex} />}
			{gen1Pokedex && (
				<Gen1Pokemon
					PokemonName={gen1Pokedex}
					setGen1Pokemon={setGen1Pokemon}
					gen1Pokemon={gen1Pokemon}
				/>
			)}
		</div>
	);
}

export default App;
