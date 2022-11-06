import { useState } from "react";
import InputSearch from "./components/InputSearch";
import Weather from "./components/Weather";

function App() {
  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Bogotá");

  return (
    <main className={`grid h-screen place-items-center px-3 bg-gray-900`}>
      <section className="max-w-md w-full p-4 bg-gray-800 rounded-lg">
        <h1 className="text-white font-semibold uppercase text-2xl text-center mb-5">
          Weather in the world
        </h1>
        <InputSearch setResponse={setResponse} city={city} setCity={setCity} setError={setError}/>
        <Weather response={response} error={error}/>
      </section>
    </main>
  );
}

export default App;
