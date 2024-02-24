import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests on <GifItem />', () => {
    
    const title = 'Saitama is the best hero';
    const url = 'https://one-punch.com/saitama.jpg';
    
    test('should match snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test('Should show image with url and alt', () => {
        render(<GifItem title={ title } url={ url } />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url);
        // expect( screen.getAllByRole('image').alt).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Should show the title in component', () => {
        render(<GifItem title={ title } url={ url } />);
        expect( screen.getByText(title) ).toBeTruthy();
    });

});