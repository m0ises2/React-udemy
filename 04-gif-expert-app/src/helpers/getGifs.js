export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WkpC1Ntsr3YMwK3PGyDdlVOS1H2JScHE&q=${category}&limit=5`;
    
    const response = await fetch(url);
    
    const { data } = await response.json();
    
    const gifs = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }));

    return gifs;
};
