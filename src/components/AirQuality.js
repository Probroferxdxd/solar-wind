import React, { useState, useEffect } from 'react';
import { fetchAirQualityForCities } from '../api/airQualityService';

const AirQuality = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const airQualityData = await fetchAirQualityForCities();
        setData(airQualityData);
      } catch (error) {
        if (error.message === 'tooManyRequest') {
          setError('Se ha superado el límite de solicitudes. Por favor, intente de nuevo más tarde.');
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando datos de calidad del aire...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Calidad del Aire en Perú</h1>
      {data.map((cityData, index) => (
        <div key={index} className='main-section-4'>
          <h2>Calidad del Aire en {cityData.city}</h2>
          <p><strong>AQI (Índice de Calidad del Aire):</strong> {cityData.data.current.pollution.aqius || 'Datos no disponibles'}</p>
          <p><strong>Temperatura:</strong> {cityData.data.current.weather.tp || 'Datos no disponibles'} °C</p>
          <p><strong>Humedad:</strong> {cityData.data.current.weather.hu || 'Datos no disponibles'} %</p>
          <p><strong>Velocidad del Viento:</strong> {cityData.data.current.weather.ws || 'Datos no disponibles'} m/s</p>
          <p><strong>Última actualización:</strong> {cityData.data.current.pollution.ts ? new Date(cityData.data.current.pollution.ts).toLocaleString() : 'Datos no disponibles'}</p>
        </div>
      ))}
    </div>
  );
};

export default AirQuality;
