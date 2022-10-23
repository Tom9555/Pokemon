import React from 'react';

import './pokemon_monsters.css';

const PokemonMonsters = ({ pokemonID }) => {
	const { entry_number } = pokemonID;
	const { name } = pokemonID.pokemon_species;

	return (
		<div className='monsterCard'>
			<div>
				{entry_number}.{name}
			</div>

			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry_number}.png`}
				alt={name}
				width=''
				height=''
			/>

			<p>
				Ut nisi voluptate aliquip anim tempor. Velit proident id irure nostrud
				fugiat exercitation nulla pariatur irure occaecat. Nulla ullamco ex non
				officia dolor labore qui non aliqua quis dolore qui ipsum.
			</p>
		</div>
	);
};

export default PokemonMonsters;
