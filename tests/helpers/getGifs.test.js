import { getGifts } from '../../src/helpers/getGifs';

describe('Tests on getGifs()', () => {

    test('should return and arrays of gifs', async () => {
        const gifs = await getGifts('One Punch');
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0]).toHaveProperty('id', 'title', 'url');
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        }); 
    });
 })