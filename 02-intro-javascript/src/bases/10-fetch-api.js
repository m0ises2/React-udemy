
const apiKey = 'WkpC1Ntsr3YMwK3PGyDdlVOS1H2JScHE';
const randomGifUrl = 'https://api.giphy.com/v1/gifs/random';

const response = fetch(`${randomGifUrl}?apiKey=${apiKey}`);

response.then(data => data.json())
.then(({ data }) => {
    const { images: { original: { url } } } = data;
    const img = document.createElement('img');
    
    img.src = url;
    
    document.body.append(img);
});
