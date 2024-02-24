import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';


describe('Tests on <GifExpertAp />', () => {

    test('should have an H2 and H3 element at the beginning', () => {
        render(<GifExpertApp />);
        screen.debug();
        expect( screen.getAllByRole('heading', { level: 2 }).length ).toBeGreaterThan( 0 );
        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBeGreaterThan( 0 );
    });

    test('should have textbox value empty', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('');
    });

    test('should match the textbox value', () => {
        const inputValue = 'Saitama';
        render(<GifExpertApp />);

        fireEvent.input( screen.getByRole('textbox'), { target: { value: inputValue } } );
        expect( screen.getByRole('textbox').value ).toBe( inputValue );
    });
});