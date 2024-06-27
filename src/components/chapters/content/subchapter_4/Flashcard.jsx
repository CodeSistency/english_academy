"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function FlashCard4() {
  const cards = [
    {
      id: 1,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Red</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Rojo</p></div>,
    },
    {
      id: 2,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl'><p>Blue</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Azul</p></div>,
    },
    {
      id: 3,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Green</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Verde</p></div>,
    },
    {
      id: 4,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Yellow</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Amarillo</p></div>,
    },
    {
      id: 5,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Black</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Negro</p></div>,
    },
    {
      id: 6,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>White</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Blanco</p></div>,
    },
    {
      id: 7,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Orange</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Naranja</p></div>,
    },
    {
      id: 8,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Purple</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Morado</p></div>,
    }
  ];

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default FlashCard4
