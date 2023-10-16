export const getImagen = async() => {
    try {
        const apiKey = 'WkpC1Ntsr3YMwK3PGyDdlVOS1H2JScHE';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;
    } catch (error) {
        console.log(error);
        return 'No se encontró la imagen'; 
    }   
};
