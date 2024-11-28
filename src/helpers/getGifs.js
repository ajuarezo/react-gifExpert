
export const GetGif= async(category) => {
    const apiKey = 'NGbvdmVx8GWhW4Ay4mi41SNdW9r9o6Gz';
    const peticion = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

    const resp = await fetch(peticion);
        
    const {data} = await resp.json()
    //console.log(data);

    const gifts = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url,
    }));

    //console.log(gifts);
    return gifts;
}    
