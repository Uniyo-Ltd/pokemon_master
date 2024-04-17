import { render, screen } from '@testing-library/react';
import PokemonCategory from './PokemonCategory'; // Adjust the import path as necessary

test('renders PokemonCategory component', () => {
 render(<PokemonCategory categoryName="Grass" />);
 const categoryElement = screen.getByText(/Grass/i);
 expect(categoryElement).toBeInTheDocument();
});``