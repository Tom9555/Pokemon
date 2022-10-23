import { useEffect } from 'react';

const Gen1Pokemon = ({ PokemonName, setGen1Pokemon, gen1Pokemon }) => {
	const pokemon_entries = PokemonName.pokemon_entries;

	useEffect(() => {
		const test = pokemon_entries.map(async (pokemon_entry) => {
			const name = pokemon_entry.pokemon_species.name;

			try {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
				const response_1 = await response.json();
				return response_1;
			} catch (err) {
				return console.log('api');
			}
		});
		console.log(test);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log({ gen1Pokemon });
	}, [gen1Pokemon]);
};

export default Gen1Pokemon;

{
	/* <div className='pokedex'>
{PokemonName.pokemon_entries.map((PokemonName, index) => {
	const pokemonID = PokemonName.entry_number;
	return (
		<div key={pokemonID}>
			<PokemonMonsters pokemonID={PokemonName} />
		</div>
	);
} */
}
// fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
// 			.then((response) => response.json())
// 			.then((response) => {
// 				setGen1Pokemon({ response });
// 			})
// 			.catch((err) => console.log('api'));
