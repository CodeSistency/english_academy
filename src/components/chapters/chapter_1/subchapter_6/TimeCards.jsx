"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function TimeCards() {
  const cards = [
    {
      id: 58,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Monday</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Lunes</p></div>,
    },
    {
      id: 59,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Tuesday</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Martes</p></div>,
    },
    {
      id: 60,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Wednesday</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Miércoles</p></div>,
    },
    {
      id: 61,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Thursday</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Jueves</p></div>,
    },
    {
      id: 62,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Friday</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Viernes</p></div>,
    },
    {
      id: 63,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Saturday</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Sábado</p></div>,
    },
    {
      id: 64,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Sunday</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Domingo</p></div>,
    },
    {
      id: 65,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>January</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Enero</p></div>,
    },
    {
      id: 66,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>February</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Febrero</p></div>,
    },
    {
      id: 67,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>March</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Marzo</p></div>,
    },
    {
      id: 68,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>April</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Abril</p></div>,
    },
    {
      id: 69,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>May</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Mayo</p></div>,
    },
    {
      id: 70,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>June</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Junio</p></div>,
    },
    {
      id: 71,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>July</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Julio</p></div>,
    },
    {
      id: 72,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>August</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Agosto</p></div>,
    },
    {
      id: 73,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>September</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Septiembre</p></div>,
    },
    {
      id: 74,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>October</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Octubre</p></div>,
    },
    {
      id: 75,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>November</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Noviembre</p></div>,
    },
    {
      id: 76,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>December</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Diciembre</p></div>,
    },
    {
      id: 77,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Spring</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Primavera</p></div>,
    },
    {
      id: 78,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Summer</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Verano</p></div>,
    },
    {
      id: 79,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Fall</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Otoño</p></div>,
    },
    {
      id: 80,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Winter</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Invierno</p></div>,
    },
    {
      id: 81,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Sunny</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Soleado</p></div>,
    },
    {
      id: 82,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Rainy</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Lluvioso</p></div>,
    },
    {
      id: 83,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Cold</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Frío</p></div>,
    },
    {
      id: 84,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Hot</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Caliente</p></div>,
    },
  ];

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default TimeCards