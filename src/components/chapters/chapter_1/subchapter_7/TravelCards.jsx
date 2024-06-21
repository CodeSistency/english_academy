"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function TravelCards() {
  const cards = [
    {
      id: 85,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Car</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Coche</p></div>,
    },
    {
      id: 86,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Bus</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Autobús</p></div>,
    },
    {
      id: 87,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Train</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Tren</p></div>,
    },
    {
      id: 88,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Airplane</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Avión</p></div>,
    },
    {
      id: 89,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Hotel</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Hotel</p></div>,
    },
    {
      id: 90,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Airport</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Aeropuerto</p></div>,
    },
    {
      id: 91,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Beach</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Playa</p></div>,
    },
    {
      id: 92,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Mountain</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Montaña</p></div>,
    },
    {
      id: 93,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>City</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Ciudad</p></div>,
    },
    {
      id: 94,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Luggage</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Equipaje</p></div>,
    },
    {
      id: 95,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Passport</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Pasaporte</p></div>,
    },
    {
      id: 96,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Ticket</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Billete</p></div>,
    },
    {
      id: 97,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Sightseeing</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Turismo</p></div>,
    },
    {
      id: 98,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Map</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Mapa</p></div>,
    },
    {
      id: 99,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Tourist</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Turista</p></div>,
    },
    {
      id: 100,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Restaurant</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Restaurante</p></div>,
    },
    {
      id: 101,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Museum</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Museo</p></div>,
    },
    {
      id: 102,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Souvenir</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>recuerdo</p></div>,
    },
  ];

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default TravelCards