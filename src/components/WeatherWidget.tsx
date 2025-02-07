
'use client'
import React, { useEffect, useState } from "react";

const API_KEY = "a841663c6ae5ba55555120bfa8d84554";


const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<{
    location: string;
    temperature: number;
    icon: string;
  } | null>(null);
    const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const getLocation = (): Promise<{ lat: number; lon: number }> => {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Геолокация не поддерживается вашим браузером"));
        } else {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              });
            },
            async (error) => {
              console.warn("⚠ Геолокация отключена, используем IP-адрес");
              try {
                const ipResponse = await fetch("https://ip-api.com/json");
                const ipData = await ipResponse.json();
                resolve({ lat: ipData.lat, lon: ipData.lon });
              } catch {
                reject(new Error(`Ошибка геолокации: ${error.message}`));
              }
            }
          );
        }
      });
    };

    const getWeather = async () => {
      try {
        const { lat, lon } = await getLocation();
        const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`;
        const response = await fetch(WEATHER_URL);
        if (!response.ok) throw new Error("Ошибка при получении данных о погоде");

        const weatherData = await response.json();
        setWeather({
          location: weatherData.name,
          temperature: Math.round(weatherData.main.temp), // Округляем температуру
          icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
        });
      } catch (error) {
        console.error("❌ Ошибка:", error);
      }
    };

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();

    getWeather();
      const timeInterval = setInterval(updateTime, 60000); // Обновляем время каждую минуту

    return () => clearInterval(timeInterval);
  }, []);
  

  
  if (!weather) return null; // Если данные ещё загружаются, ничего не показываем

  return (
    <div className="flex items-center gap-8 rounded-lg p-2 px-4 opacity-50 bg-red-500 bg-opacity-50 hover:bg-red-500 ">
      <img src={weather.icon} alt="Погода" width={42} height={42} />
      <span className="font- text-lg text-white">{weather.location}</span>
      <span className="italic text-white">{weather.temperature}°C</span>
      <span className="ml-4 text-lg text-white">{currentTime}</span>
    </div>
  );
};



export default WeatherWidget;
