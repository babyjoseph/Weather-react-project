import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY;
const URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?q=";

export const FetchNextDays = async (CountryName) => {
  try {
    const {
      data: { list, city },
    } = await axios.get(
      `${URL_FORECAST + CountryName}&units=metric&appid=${KEY}`
    );
    let days = [];
    for (let i = 0; i < list.length; i += 8) {
      let temp = [];
      temp.push(new Date(list[i].dt * 1000).getUTCDay());
      temp.push(new Date(list[i].dt * 1000).toDateString());
      temp.push(list[i].main.temp);
      temp.push(list[i].weather[0].description);
      temp.push(list[i].weather[0].icon);
      temp.push(city.name);
      temp.push(city.country);
      days.push(temp);
    }

    // console.log(days);
    return [...days];
  } catch (e) {
    console.log("Error");
  }
};
