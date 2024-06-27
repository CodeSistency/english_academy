"use client"
import React from 'react'
import { FlashcardArray } from 'react-quizlet-flashcard'

function FlashCard5() {
  const cards = [
    {
      id: 1,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium'><p>Cat</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Gato</p></div>,
    },
    {
      id: 2,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl'><p>Dog</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Perro</p></div>,
    },
    {
      id: 3,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Bird</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Pájaro</p></div>,
    },
    {
      id: 4,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Fish</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Pez</p></div>,
    },
    {
      id: 5,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Cow</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Vaca</p></div>,
    },
    {
      id: 6,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Horse</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Caballo</p></div>,
    },
    {
      id: 7,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Lion</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>León</p></div>,
    },
    {
      id: 8,
      frontHTML: <div className='h-full w-full flex justify-center items-center text-4xl  font-medium'><p>Tiger</p></div>,
      backHTML: <div className='h-full w-full flex justify-center items-center text-4xl font-medium dark:bg-amber-400 bg-blue-900 rounded-xl text-white'><p>Tigre</p></div>,
    }
  ];

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <FlashcardArray cards={cards} />
    </div>
  )
}

export default FlashCard5

