const API_KEY = 'ac1bec2a-5add-4887-b7fe-66ccf227aa78';

export const getData = async () => {
  try {
    const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
      method: "GET",
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    console.log('Возникла ошибка');
  }
}