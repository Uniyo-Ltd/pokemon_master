// src/components/PokemonCategories.tsx
import React from 'react';
import { useQuery } from 'react-query';

interface PokemonCategory {
 name: string;
}

interface PokemonCategoriesData {
 results: PokemonCategory[];
}

const fetchPokemonCategories = async () => {
 const res = await fetch('https://pokeapi.co/api/v2/type');
 if (!res.ok) {
      throw new Error('Network response was not ok');
 }
 return res.json();
};

const PokemonCategories = () => {
 const { data, isLoading, error } = useQuery<PokemonCategoriesData, Error>('pokemonCategories', fetchPokemonCategories);

 if (isLoading) return <div>Loading...</div>;
 if (error) return <div>An error has occurred: {error.message}</div>;

 return (
      <div>
        {data?.results.map((category: PokemonCategory) => (
          <div key={category.name}>{category.name}</div>
        ))}
      </div>
 );
};

export default PokemonCategories;