export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=IqbJOTP4VsfrkWM7M8XWSFVNub9UiRTc&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifsImages = data.map(el => {
        return {
            id: el.id,
            title: el.title,
            url: el.images?.downsized_medium.url
        }
    });

    return gifsImages;
}