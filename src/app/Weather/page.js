'use client'
import Head from 'next/head';
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
// import { Spinner } from '@chakra-ui/react';
import Navbar from '../../../components/Navbar';
import Weather from '../../../components/Weather';
import { resolve } from 'styled-jsx/css';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=5b1d1abf62dc36759fffdd46c3d81f0c
  `;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    //   console.log(response.data);
    });
    setCity('');
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='bg-amber-300 h-[100vh]'>
        <Head>
          <title>Weather - Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Navbar />

        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[1]' />
        

        {/* Search */}
        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-black z-10'>
          <form
            onSubmit={fetchWeather}
            className='flex justify-between items-center w-full m-[5vw] p-3 border border-black text-black rounded-2xl'
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent border-none text-white focus:outline-none text-2xl'
                type='text'
                placeholder='Search city'
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* Weather */}
        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}