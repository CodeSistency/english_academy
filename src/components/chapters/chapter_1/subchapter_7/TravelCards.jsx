"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function TravelCards() {
    const cards = [
        {
          id: 85,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>car</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>coche</p></div>,
        },
        {
          id: 86,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>bus</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>autobús</p></div>,
        },
        {
          id: 87,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>train</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>tren</p></div>,
        },
        {
          id: 88,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>airplane</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>avión</p></div>,
        },
        {
          id: 89,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>hotel</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>hotel</p></div>,
        },
        {
          id: 90,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>airport</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>aeropuerto</p></div>,
        },
        {
          id: 91,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>beach</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>playa</p></div>,
        },
        {
          id: 92,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>mountain</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>montaña</p></div>,
        },
        {
          id: 93,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>city</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>ciudad</p></div>,
        },
        {
          id: 94,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>luggage</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>equipaje</p></div>,
        },
        {
          id: 95,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>passport</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>pasaporte</p></div>,
        },
        {
          id: 96,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>ticket</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>billete</p></div>,
        },
        {
          id: 97,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>sightseeing</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>turismo</p></div>,
        },
        {
          id: 98,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>map</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>mapa</p></div>,
        },
        {
          id: 99,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>tourist</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>turista</p></div>,
        },
        {
          id: 100,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>restaurant</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>restaurante</p></div>,
        },
        {
          id: 101,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>museum</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>museo</p></div>,
        },
        {
          id: 102,
          frontHTML: <div className='h-full w-full flex justify-center items-center'><p>souvenir</p></div>,
          backHTML: <div className='h-full w-full flex justify-center items-center'><p>recuerdo</p></div>,
        },
      ];
      
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <FlashcardArray cards={cards} />
    </div>
  )
}

export default TravelCards