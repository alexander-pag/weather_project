import { UpperCase } from "./upperCase";

export default function Data({ response }) {
  /* const descriptionSky = response.data.weather[0].description;

  const descriptionSkyResult = descriptionSky.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (word) => word.toUpperCase()
  ); */

  const descriptionSkyResult = UpperCase(response.data.weather[0].description);

  return (
    <section className="mt-4 p-3 border text-white border-gray-300 rounded-lg">
      <h3 className="text-xl font-semibold">{response.data.name}</h3>
      <p className="text-3xl">
        {Math.round(response.data.main.temp - 274.15)}°C
      </p>
      <div className="flex items-center">
        <img
          className="w-10 h-10"
          src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          alt=""
        />
        <h1>{descriptionSkyResult}</h1>
      </div>
      <h1>Humidity: {response.data.main.humidity}%</h1>
      <h1>Wind: {response.data.wind.speed}km/h</h1>
    </section>
  );
}
