"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function RoutineCards() {
  const cards = [
    {
      id: 36,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Wake up</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Despertarse</p></div>,
    },
    {
      id: 37,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Have breakfast</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Desayunar</p></div>,
    },
    {
      id: 38,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Go to work</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Ir al trabajo</p></div>,
    },
    {
      id: 39,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Eat lunch</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Almorzar</p></div>,
    },
    {
      id: 40,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Come home</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Volver a casa</p></div>,
    },
    {
      id: 41,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Have dinner</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Cenar</p></div>,
    },
    {
      id: 42,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Watch TV</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Ver televisión</p></div>,
    },
    {
      id: 43,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Read</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Leer</p></div>,
    },
    {
      id: 44,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Go to bed</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Irse a la cama</p></div>,
    },
    {
      id: 45,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Brush teeth</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Cepillarse los dientes</p></div>,
    },
    {
      id: 46,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Take a shower</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Ducharse</p></div>,
    },
  ];

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default RoutineCards