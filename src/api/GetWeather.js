import axios from "axios";

const KEY = "51ac90b9c6a93c003f7e1e384516c23d";
const URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?q=";
const URL_FORECAST_TODAY = "https://api.openweathermap.org/data/2.5/weather?q=";

export const FetchToday = async (CountryName) => {
  try {
    const {
      data: { dt, main, name, weather, sys },
    } = await axios.get(
      `${URL_FORECAST_TODAY + CountryName}&appid=${KEY}&units=metric`
    );
    let today = [];
    today.push(new Date(dt * 1000).toDateString());
    today.push(main.temp);
    today.push(name);
    today.push(sys.country);
    today.push(weather[0].description);
    today.push(weather[0].icon);
    // console.log(today);
    return [today];
  } catch (error) {
    console.log("This is the error: " + error);
  }
};

export const FetchNextDays = async (CountryName) => {
  try {
    const {
      data: { list },
    } = await axios.get(`${URL_FORECAST + CountryName}&appid=${KEY}`);
    let days = [];
    for (let i = 0; i < list.length; i += 8) {
      let temp = [];
      temp.push(new Date(list[i].dt * 1000).getUTCDay());
      temp.push(list[i].main.temp);
      temp.push(list[i].weather[0].icon);
      days.push(temp);
    }

    // console.log(days);
    return [...days];
  } catch (e) {
    console.log("Error");
  }
};
