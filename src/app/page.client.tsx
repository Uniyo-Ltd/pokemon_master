import { useState } from 'react';
import { usePokemonCategories, usePokemonByCategory } from '../hooks/usePokemon';

interface Category {
 name: string;
 id: string;
}

interface Pokemon {
  name: string;
 }


export default function Home() {
 const { data: categories, isLoading: isLoadingCategories } = usePokemonCategories();
 const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

 const handleCategoryClick = (categoryId: string) => {
   // Convert the categoryId from string to number
   const categoryIdNumber = Number(categoryId);
   setSelectedCategory(categoryIdNumber);
 };

 let isLoadingPokemon = false;
 let pokemonByCategory = [];

 if (selectedCategory !== null) {
   const { data, isLoading } = usePokemonByCategory(selectedCategory);
   isLoadingPokemon = isLoading;
   pokemonByCategory = data?.pokemon || [];
 }

 if (isLoadingCategories || isLoadingPokemon) {
   return <div>Loading...</div>;
 }

 return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
       <h1>Pokémon Categories</h1>
       <div className="categories-grid">
         {categories.results.map((category: Category) => (
           <div
              key={category.name}
              onClick={() => handleCategoryClick(category.id)}
              className="neumorphism"
             >
             {category.name}
           </div>
         ))}
       </div>
       {selectedCategory && (
         <div>
           <h2>Pokémon in Category {selectedCategory}</h2>
           <ul>
             {pokemonByCategory.map((pokemon: Pokemon) => (
               <li key={pokemon.name}>{pokemon.name}</li>
             ))}
           </ul>
         </div>
       )}
     </div>
   </main>
 );
}
