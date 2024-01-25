export const getGifts = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BSg2E7snc6bkpIITG2VcXiNRAgcapbU4&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    return data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
};