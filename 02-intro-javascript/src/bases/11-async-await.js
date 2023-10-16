const apiKey = 'WkpC1Ntsr3YMwK3PGyDdlVOS1H2JScHE';
const randomGifUrl = 'https://api.giphy.com/v1/gifs/random';


const getImage = async () => {
    const response = await fetch(`${randomGifUrl}?apiKey=${apiKey}`);
    const { data: jsonData } = await response.json();
    const { images: { original: { url } } } = jsonData;
    const img = document.createElement('img');
    
    img.src = url;
    
    document.body.append(img);
}

getImage();
