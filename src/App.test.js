// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinLand title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinLand/i);
    expect(titleElement).toBeInTheDocument();
});
