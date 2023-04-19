const KEY = '284286d903074f57b9505421231904';

const fetchData = async (city) => {
const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

const response = await fetch(url);
const data = await response.json();
return data;
}

export default fetchData;