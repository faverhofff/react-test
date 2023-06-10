import React from 'react';
import { render, screen } from '@testing-library/react';
import DynamicTable from '../dynamic.table';

describe('DynamicTable test', () => {
  test('renders table with data', async () => {

    // Mock data
    const mockData = {
      "key": "hub_toplists_order",
      "toplists": {
        "575": [
            {
            "brand_id": "14164",
            "position": 2,
            "info": {
                "rating": 4,
                "features": [
                "Easy cash back options",
                "Good payment options",
                "Exclusive games"
                ]
            },
            "terms_and_conditions": "21+ | <a href=\"https://generator.lorem-ipsum.info/terms-and-conditions\">T&CS Apply</a> | Gamble Responsibly",
            "logo": "https://picsum.photos/195/75",
            "play_url": "https://example.com/amazing-offer/2134"
            }
        ]
      }
    } 

    // Mock fetch function to return the mock data
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    // Render the component
    render(<DynamicTable url="http://localhost:3004/data" />);

    // Search text into rendered table
    await screen.findByText('Easy cash back options');
    await screen.findByText('Exclusive games');
    await screen.findByText('Good payment options');

    // Assertions
    expect(screen.getByText('Easy cash back options')).toBeInTheDocument();
    expect(screen.getByText('Good payment options')).toBeInTheDocument();
    expect(screen.getByText('Exclusive games')).toBeInTheDocument();
  });
});