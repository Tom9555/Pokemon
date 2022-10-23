import React from 'react';

import PokemonMonsters from '../pokemon_monsters/pokemon_monsters';
import './pokedex.css';

const Pokedex = ({ PokemonName }) => (
	<div className='pokedex'>
		{PokemonName.pokemon_entries.map((PokemonName, index) => {
			const pokemonID = PokemonName.entry_number;
			return (
				<div key={pokemonID}>
					<PokemonMonsters pokemonID={PokemonName} />
				</div>
			);
		})}
	</div>
);

export default Pokedex;
