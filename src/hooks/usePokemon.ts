// src/hooks/usePokemon.ts
import { useQuery } from 'react-query';

// Define interfaces for the data structure
interface TypeResult {
 name: string;
 url: string;
}

interface TypeResponse {
 count: number;
 next: string | null;
 previous: string | null;
 results: TypeResult[];
}

// Define the fetch function for fetching Pokémon types
const fetchTypes = async (): Promise<TypeResponse> => {
 const response = await fetch('https://pokeapi.co/api/v2/type');
 if (!response.ok) {
    throw new Error('Network response was not ok');
 }
 return response.json();
};

// Define the custom hook for fetching Pokémon types
export const useTypes = () => {
 return useQuery<TypeResponse>('types', fetchTypes);
};

const fetchPokemonCategories = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/type');
    return res.json();
   };
   
   // Export the usePokemonCategories hook
   export const usePokemonCategories = () => {
    return useQuery('pokemonCategories', fetchPokemonCategories);
   };
   
   // Assuming you have a function to fetch Pokémon by category
   const fetchPokemonByCategory = async (categoryId: number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${categoryId}`);
    return res.json();
   };
   
   // Export the usePokemonByCategory hook
   export const usePokemonByCategory = (categoryId: number) => {
    return useQuery(['pokemonByCategory', categoryId], () => fetchPokemonByCategory(categoryId));
   };