const API_KEY = ''; // 9d1bfed1-f965-4ae5-ab40-d62197574e0e

// Lista de ciudades en Perú para obtener datos
const cities = [
  { name: 'Lima', lat: -12.0464, lon: -77.0428 },
  { name: 'Arequipa', lat: -16.4090, lon: -71.5376 },
  { name: 'Cusco', lat: -13.5319, lon: -71.9675 }
];

// Función para obtener datos de calidad del aire para varias ciudades
export const fetchAirQualityForCities = async () => {
  try {
    const results = await Promise.all(
      cities.map(async city => {
          const response = await fetch(`https://api.airvisual.com/v2/nearest_city?lat=${city.lat}&lon=${city.lon}&key=${API_KEY}`);
        const data = await response.json();
        return { city: city.name, data: data.data };
      })
    );
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
};
