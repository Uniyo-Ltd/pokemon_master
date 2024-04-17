// src/components/PokemonDetails.tsx
import React from 'react';
import { useQuery } from 'react-query';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


const fetchPokemonDetails = async (name: string) => {
 const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
 if (!res.ok) throw new Error('Network response was not ok');
 return res.json();
};

interface PokemonDetailsProps {
 name: string;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ name }) => {
 const { data, isLoading, error } = useQuery(['pokemonDetails', name], () => fetchPokemonDetails(name));

 if (isLoading) return <div>Loading...</div>;
 if (error) return <div>An error has occurred: {(error as Error).message}</div>;

 // Example chart data
 const chartOptions: ApexOptions = {
    chart: { type: 'bar' as const }, // Explicitly type 'bar' as a constant
    series: [{ data: data.stats.map((stat: { base_stat: number; stat: { name: string } }) => stat.base_stat) }],
    xaxis: { categories: data.stats.map((stat: { base_stat: number; stat: { name: string } }) => stat.stat.name) }
 };

 return (
    <div>
      <h2>{data.name}</h2>
      <Chart options={chartOptions} type="bar" />
    </div>
 );
};

export default PokemonDetails;
