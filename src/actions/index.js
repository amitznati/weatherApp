import axios from 'axios';
const API_KEY = '5fd0dd891894d3883e5bd66847b2f244';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${API_URL}&q=${city},IL`;
    const request = axios.get(url);

    console.log('Request: ',request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}